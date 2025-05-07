AuthMech\Controllers\AuthController.cs:
```csharp
﻿using AuthMech.Model.DTOs.Auth;
using AuthMech.Model.Entities;
using AuthMech.Model.Helper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AuthMech.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase{

        private readonly UserManager<User> _userManager;
        private readonly JwtTokenGenerator _jwtTokenGenerator;
        private readonly SignInManager<User> _signInManager;

        public AuthController(UserManager<User> userManager,
                              SignInManager<User> signInManager,
                              JwtTokenGenerator jwtTokenGenerator) {
            _userManager = userManager;
            _jwtTokenGenerator = jwtTokenGenerator;
            _signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto) {
            var user = new User {
                FullName = registerDto.FullName,
                Email = registerDto.Email,
                UserName = registerDto.Email
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);

            var token = _jwtTokenGenerator.GenerateToken(user);

            return Ok(new { Token = token });

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto) {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null) return Unauthorized("invalid Credentials.");

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
            if(!result.Succeeded) return Unauthorized("invalid Credentials.");

            var token = _jwtTokenGenerator.GenerateToken(user);
            return Ok(new { Token = token });
        }


    }
}

```

AuthMech\Data\ApplicationDbContext.cs:
```csharp
﻿using AuthMech.Model.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AuthMech.Data {
    public class ApplicationDbContext : IdentityDbContext<User> {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {
            // the constructor is automatically invoked every time you create an instance of a class
        }

        // Optional if you're not accessing this directly
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {
            base.OnModelCreating(builder);

            // Rename default Identity tables
            builder.Entity<User>().ToTable("Users");
            builder.Entity<IdentityRole>().ToTable("Roles");
            builder.Entity<IdentityUserRole<string>>().ToTable("UserRoles");
            builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims");
            builder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins");
            builder.Entity<IdentityUserToken<string>>().ToTable("UserTokens");
            builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaims");
        }
    }
}
```

AuthMech\Model\DTOs\Auth\LogInDTO.cs:
```csharp
﻿namespace AuthMech.Model.DTOs.Auth {
    public class LoginDto {
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}

```

AuthMech\Model\DTOs\Auth\RegisterDTO.cs:
```csharp
﻿namespace AuthMech.Model.DTOs.Auth {
    public class RegisterDto {
        public required string FullName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}
```

AuthMech\Model\Entities\User.cs:
```csharp
﻿using Microsoft.AspNetCore.Identity;

namespace AuthMech.Model.Entities
{
    public class User : IdentityUser {

        public string FullName { get; set; }
    }

}
```

AuthMech\Model\Helper\JwtTokenGenerator.cs:
```csharp
﻿using AuthMech.Model.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AuthMech.Model.Helper {
    public class JwtTokenGenerator {

        private readonly IConfiguration _configuration;

        public JwtTokenGenerator(IConfiguration configuration) {
            _configuration = configuration;            
        }

        public string GenerateToken(User user) {
            var jwtSettings = _configuration.GetSection("jwtSettings");

            var authClaims = new List<Claim> {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["SecretKey"]));

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

```

AuthMech\Program.cs:
```csharp
using AuthMech.Data;
using AuthMech.Model.Entities;
using AuthMech.Model.Helper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS
builder.Services.AddCors(options => {
    options.AddPolicy("AllowedAngular", builder => {
        builder.WithOrigins("http://localhost:4200")
               .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowCredentials();
    });
});

// Add DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Add Identity
builder.Services.AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

// Add JWT Authentication
var jwtSettings = builder.Configuration.GetSection("JwtSettings");

builder.Services.AddAuthentication(options => {
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options => {
    options.RequireHttpsMetadata = false; // Only for development
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,

        ValidIssuer = jwtSettings["Issuer"],
        ValidAudience = jwtSettings["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["SecretKey"]))
    };
});

// Custom token generator
builder.Services.AddScoped<JwtTokenGenerator>();

var app = builder.Build();

// Middleware pipeline
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowedAngular");

app.UseAuthentication(); // Important: must come before Authorization
app.UseAuthorization();

app.MapControllers();
app.Run();

```


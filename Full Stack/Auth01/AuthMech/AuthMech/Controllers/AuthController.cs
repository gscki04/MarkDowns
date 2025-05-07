using AuthMech.Model.DTOs.Auth;
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
            return Ok(new { Token = token, FullName = user.FullName });
        }


    }
}

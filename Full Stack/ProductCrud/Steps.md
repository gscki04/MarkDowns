## backend  
1. Project Setup  
`Program.cs`  
```C#
using Microsoft.EntityFrameworkCore;
using Product_APIs.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDBContext>(options => options  // db context here
        .UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options => {       // cors here
    options.AddPolicy("AllowAngularApp", builder => {
        builder.WithOrigins("http://localhost:4200")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAngularApp"); // here

app.UseAuthorization();

app.MapControllers();

app.Run();
```  
2. Create the Model  
`model/entities/Product.cs`  
```C#
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Product_APIs.Model.Entities {
    public class Product {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "Product name is required.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public string ProductName { get; set; }

        [Range(0.01, 10000, ErrorMessage = "Price must be between 0.01 and 10000.")]
        public decimal ProductPrice { get; set; }
    }
}
```  
3. Set Up Database Context  
`appsettings.json`  
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    //"DefaultConnection": "Server=COM-36\\SQL2016;Database=FirstApp;User Id=sa;Password=skhot@2016;Trusted_connection=true;TrustServerCertificate=true;"
    "DefaultConnection": "Server=DESKTOP-T5UQ4DF;Database=ProductDemo;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```
4. Configure Database  
`Data/ApplicationDBContext.cs`  
```C#
using Microsoft.EntityFrameworkCore;
using Product_APIs.Model.Entities;

namespace Product_APIs.Data {
    public class ApplicationDBContext : DbContext {

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options): base(options) {
        
        }

        public DbSet<Product> products { get; set; }
    }
}
```  
`model/AddProduct.cs`  
```C#
using System.ComponentModel.DataAnnotations;

namespace Product_APIs.Model {
    public class AddProductDTO {

        [Required(ErrorMessage = "Product name is required.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public string ProductName { get; set; }

        [Range(0.01, 10000, ErrorMessage = "Price must be between 0.01 and 10000.")]
        public decimal ProductPrice { get; set; }
    }
}
```  
`model/UpdateProduct.cs`  
```C#
using System.ComponentModel.DataAnnotations;

namespace Product_APIs.Model {
    public class UpdateProductDTO {

        [Required(ErrorMessage = "Product name is required.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public string ProductName { get; set; }

        [Range(0.01, 10000, ErrorMessage = "Price must be between 0.01 and 50000.")]
        public decimal ProductPrice { get; set; }
    }
}
```  
5. Create CRUD API Controller  
`conrtoller/ProductController.cs`  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Product_APIs.Data;
using Product_APIs.Model;
using Product_APIs.Model.Entities;

namespace Product_APIs.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase {
        private readonly ApplicationDBContext dBContext;

        public ProductController(ApplicationDBContext dBContext) {
            this.dBContext = dBContext;
        }

        //all endpoint here

        [HttpGet] // get all products
        public async Task<IActionResult> GetAllProduct() {
            var allProducts = await dBContext.products.ToListAsync();
            return Ok(allProducts);
        }

        [HttpPost] // create a product
        public IActionResult AddProduct(AddProductDTO addProductDTO) {

            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var productEntity = new Product() {
                ProductName = addProductDTO.ProductName,
                ProductPrice = addProductDTO.ProductPrice
            };

            dBContext.products.Add(productEntity);
            dBContext.SaveChanges();
            return Created($"/api/products/{productEntity.Id}", productEntity);
        }

        [HttpGet] // get single product using id
        [Route("{id:int}")]
        public IActionResult GetProductById(int id) {
            var product = dBContext.products.Find(id);

            if (product == null) {
                return NotFound();
            }
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            return Ok(product);
        }

        [HttpPut] // update product using id
        [Route("{id:int}")]
        public IActionResult UpdateProduct(int id, UpdateProductDTO updateProductDTO) {
            var product = dBContext.products.Find(id);

            if (product == null) {
                return NotFound();
            }
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            product.ProductName = updateProductDTO.ProductName;
            product.ProductPrice = updateProductDTO.ProductPrice;

            dBContext.SaveChanges();
            return Ok(product);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteProduct(int id) {
            var product = dBContext.products.Find(id);

            if (product is null) {
                return NotFound();
            }

            dBContext.products.Remove(product);
            dBContext.SaveChanges();
            return Ok("Product deleted.");
        }

    }
}
```  
6. Add Data Validation  
7. Testing the API   

## frontend  
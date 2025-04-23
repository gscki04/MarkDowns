using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Product_APIs.Data;
using Product_APIs.Model;
using Product_APIs.Model.Entities;

namespace Product_APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDBContext dBContext;

        public ProductController(ApplicationDBContext dBContext) {
            this.dBContext = dBContext;
        }

        //all endpoint here

        [HttpGet] // get all products
        public IActionResult GetAllProduct() { 
            var allProducts = dBContext.products.ToList();
            return Ok(allProducts);
        }

        [HttpPost] // create a product
        public IActionResult AddProdcut(AddProductDTO addProductDTO) {

            var productEntity = new Product() {
                ProductName = addProductDTO.ProductName,
                ProductPrice = addProductDTO.ProductPrice
            };

            dBContext.products.Add(productEntity);
            dBContext.SaveChanges();
            return Created($"/api/products/{productEntity.Id}", productEntity);
        }

        [HttpGet] // get single product using id
        [Route("{id:guid}")]
        public IActionResult GetProductById(Guid id) {
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
        [Route("{id:guid}")]
        public IActionResult UpdateProduct(Guid id, UpdateProductDTO updateProductDTO) {
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
        [Route("{id:guid}")]
        public IActionResult DeleteProduct(Guid id) {
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

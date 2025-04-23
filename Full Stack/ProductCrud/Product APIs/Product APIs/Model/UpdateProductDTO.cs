using System.ComponentModel.DataAnnotations;

namespace Product_APIs.Model {
    public class UpdateProductDTO {
        [Required(ErrorMessage = "Product name is required.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public string ProductName { get; set; }

        [Range(0.01, 10000, ErrorMessage = "Price must be between 0.01 and 10000.")]
        public decimal ProductPrice { get; set; }
    }
}

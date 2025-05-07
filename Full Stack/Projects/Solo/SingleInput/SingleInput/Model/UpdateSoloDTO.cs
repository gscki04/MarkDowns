using System.ComponentModel.DataAnnotations;

namespace SingleInput.Model {
    public class UpdateSoloDTO {

        [Required(ErrorMessage = "Name is required!.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public required string Name { get; set; }

        // add other fields here
    }
}

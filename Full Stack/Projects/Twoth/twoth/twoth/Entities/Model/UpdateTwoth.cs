using System.ComponentModel.DataAnnotations;

namespace twoth.Entities.Model {
    public class UpdateTwoth {

        [Required(ErrorMessage = "name is required!.")]
        [StringLength(50, ErrorMessage = "Name can't exceed 50 characters.")]
        public required string Name { get; set; }
    }
}

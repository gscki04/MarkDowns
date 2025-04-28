using System.ComponentModel.DataAnnotations;

namespace twoth.Entities {
    public class AddTwoths {

        [Required(ErrorMessage = "name is required!.")]
        [StringLength(50, ErrorMessage = "Name can't exceed 50 characters.")]
        public required string Name { get; set; }
    }

}

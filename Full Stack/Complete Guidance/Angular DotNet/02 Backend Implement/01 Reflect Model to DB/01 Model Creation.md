Create new folder `Model` inside main folder, we will create Enity here.
Model layer has DTO (Data Transfer Object) 

- Create `Entities` folder inside `Model` folder 
here we wil be storing all DB entities  
```C#
using System.ComponentModel.DataAnnotations;

namespace SingleInput.Model.Entities {
    public class Solo {
        [Key] // make this primary key
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public string Name { get; set; }
    }
}
```  
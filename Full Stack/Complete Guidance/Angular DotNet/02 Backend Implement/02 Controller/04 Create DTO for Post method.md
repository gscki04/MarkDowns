we finished Get Method, but for Post method we need a `DTO`: Data Transfer Object.  
so lets create that  
`Model` ----> create a DTO class here  
```C#
namespace SingleInput.Model {
    public class AddSoloDTO {
    }
}
```  
& inside this we need all Employee properties except if.  
just copy all those from entity (we purposefully having single property to ease of learn).  
```C#
using System.ComponentModel.DataAnnotations;

namespace SingleInput.Model {
    public class AddSoloDTO {

        [Required(ErrorMessage = "Name is required!.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public required string Name { get; set; }
        // add other properties if added later  
    }
}
```  
now this is complete we can use this as a parameter in our controller's POST method  
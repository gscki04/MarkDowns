Create new folder `Model` inside main folder, we will create Enity here.
Model layer has DTO (Data Transfer Object) 

- Create `Entities` folder inside `Model` folder 
here we wil be storing all DB entities  
```C#
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity;

namespace AuthMech1.Model.Entities {

    public class User : IdentityUser {

        public required string FullName { get; set; }

    }
}
```  
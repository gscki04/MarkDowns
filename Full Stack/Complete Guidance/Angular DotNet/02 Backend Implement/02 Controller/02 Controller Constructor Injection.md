now we have created the controller, we need to inject the DbContext inside our controller.  
we have DbContext (Bridge between Code & Database) inside our main `Program.cs` file  
now lets use it in controller  

### 1. create constructor function inside a controller  
snippet shortcut(visual studio 2022) is ctor: constu`ctor` postfix shortcut in visual studio to create constructor.    
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase
    {

        public SoloController() {   // 🔄: this constructor
        }
    }
}
```  
pass application-database-context & variable as a parameter.  
after variable `ctrl` + `.` ----> create and `assign field` & hit enter.  
it will create private & readonly variable for you. 
this `private field` or `variable` we will be going for all API operations  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SingleInput.Data;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;  // 🔄: Create this with (CTRL + .) = assign field, or create it manually

        public SoloController(ApplicationDbContext dbContext) {   
            this.dbContext = dbContext;
        }
    }
}
```  
Right click on Controller Folder ----> `Add` ----> `Controller` 
`Common` ----> `API` ----> `API Contoller - Emmpty` & give the name to contoller (here, its `EmployeesController`)  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAdminPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
    }
}
```  



Right click on Controller Folder ----> `Add` ----> `Controller` 
`Common` ----> `API` ----> `API Contoller - Empty` & give the name to contoller (here, its `SoloController`)  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SingleInput.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase
    {
    }
}
```  
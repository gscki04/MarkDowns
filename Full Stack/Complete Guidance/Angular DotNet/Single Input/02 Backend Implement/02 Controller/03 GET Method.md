## Current Code
```csharp
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SingleInput.Data;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;  
        
        public SoloController(ApplicationDbContext dbContext) {   
            this.dbContext = dbContext;
        }

        // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }
    }
}
```  
this is our current controller now lets add the first method which is GET  
## GET method
```C#
               // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }
```  
we can consice the code block by removing a variable & passing the assigned value directly to return statement.
##### `with` variable:
```C#
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
```  
##### `without` variable:
```C#
            return Ok(await dbContext.solos.ToListAsync());
```  
### Breakdown:


1. **Attribute `[HttpGet]`:**
   - This tells your API that this method responds to HTTP GET requests. It's the standard for retrieving data from a server.

2. **Method Signature:**
   - `public async Task<IActionResult> GetAllSolo()`: Now asynchronous, allowing the method to run without blocking the main thread.

3. **Fetching Data:**
   - `await dbContext.solos.ToListAsync();`
     - `dbContext.solos`: Accesses the `solos` table via your Entity Framework Core DbContext.
     - `.ToListAsync()`: Asynchronously executes the query and loads all records into a list. This is non-blocking and improves scalability for high-load scenarios.

4. **Returning Response:**
   - `return Ok(...)`: Returns an HTTP 200 (OK) response with the fetched list in the response body.

`NOTE`: **IActionResult** is an interface in ASP.NET Core which has pre-build functionalities, like  
- `OkResult` and `OkObjectResult`: Return HTTP 200 responses.  
- `NotFoundResult`: Returns an HTTP 404 response.​  
- `BadRequestResult`: Returns an HTTP 400 response.  
- `JsonResult`: Returns JSON-formatted data.  
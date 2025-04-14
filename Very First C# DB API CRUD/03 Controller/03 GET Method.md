## Current Code
```C#
using EmployeeAdminPortal.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAdminPortal.Controllers
{
    [Route("api/[controller]")] // api/[controller] = "api//" + classname.ToLower()-"controller"
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public EmployeesController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }

        // Our All Hitpoints here

    }
}
 
```  
this is our current controller now lets add the first method which is GET  
## GET method
```C#
        // Read All Employees
        [HttpGet]
         public IActionResult GetAllEmployee() {
            var allEmployees = dbContext.employees.ToList();
            return Ok(allEmployees);
        }
```  
we can consice the code block by removing a variable & passing the assigned value directly to return statement.
##### `with` variable:
```C#
            var allEmployees = dbContext.employees.ToList();
            return Ok(allEmployees);
```  
##### `without` variable:
```C#
            return Ok(dbContext.employees.ToList());
```  
### Breakdown:

1. **Attribute `[HttpGet]`:**
   - This tells your API that this method responds to HTTP GET requests. It's the standard for retrieving data from a server.

2. **Method Signature:**
   - `public IActionResult GetAllEmployee()`: Defines a public method returning `IActionResult`, which is a flexible way to return various HTTP responses.

3. **Fetching Data:**
   - `var allEmployees = dbContext.employees.ToList();`
     - `dbContext.employees`: Accesses the `employees` table via your Entity Framework Core DbContext.
     - `.ToList()`: Executes the query and loads all employee records into a list. This method sends the query to the database and retrieves the results immediately. citeturn0search3

4. **Returning Response:**
   - `return Ok(allEmployees);`
     - `Ok()`: A helper method that returns an HTTP 200 status code, indicating success.
     - `allEmployees`: The list of employees is included in the response body.


`NOTE`: **IActionResult** is an interface in ASP.NET Core which has pre-build functionalities, like  
- `OkResult` and OkOb`jectResult: Return HTTP 200 responses.  
- `NotFoundResult`: Returns an HTTP 404 response.​  
- `BadRequestResult`: Returns an HTTP 400 response.  
- `JsonResult`: Returns JSON-formatted data.  
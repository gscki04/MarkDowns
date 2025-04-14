## Prevouse Code
```C#
using EmployeeAdminPortal.Data;
using EmployeeAdminPortal.Model;
using EmployeeAdminPortal.Model.Entities;
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

        // Read All Employees
        [HttpGet]
         public IActionResult GetAllEmployee() {
            var allEmployees = dbContext.employees.ToList();
            return Ok(allEmployees);
        }

        // Create an entry
        [HttpPost]
        public IActionResult AddEmployee(AddEmployeeDTO addEmployeeDTO) {

            var emplopyeeEntity = new Employee() {
                // skip GUID, its auto generated
                Name = addEmployeeDTO.Name,
                Email = addEmployeeDTO.Email,
                Phone = addEmployeeDTO.Phone, // nullable
                Salary = addEmployeeDTO.Salary,
            };

            dbContext.employees.Add(emplopyeeEntity);
            dbContext.SaveChanges();
            return Ok(emplopyeeEntity);
        }
    }
} 
```  

## Get By ID implmentation  
```C#
// Read one Employee By Id
[HttpGet]
[Route("{id:guid}")]
public IActionResult GetEmployeeById(Guid id) {
    var employee = dbContext.employees.Find(id);

    if(employee is null) {
        return NotFound();
    }
    return Ok(employee);
}
```  
## Full Code:  
```C#
using EmployeeAdminPortal.Data;
using EmployeeAdminPortal.Model;
using EmployeeAdminPortal.Model.Entities;
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

        // Read All Employees
        [HttpGet]
         public IActionResult GetAllEmployee() {
            var allEmployees = dbContext.employees.ToList();
            return Ok(allEmployees);
        }

        // Read one Employee By Id
        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetEmployeeById(Guid id) {
            var employee = dbContext.employees.Find(id);

            if(employee is null) {
                return NotFound();
            }
            return Ok(employee);
        }


        // Create an entry
        [HttpPost]
        public IActionResult AddEmployee(AddEmployeeDTO addEmployeeDTO) {

            var emplopyeeEntity = new Employee() {
                // skip GUID, its auto generated
                Name = addEmployeeDTO.Name,
                Email = addEmployeeDTO.Email,
                Phone = addEmployeeDTO.Phone, // nullable
                Salary = addEmployeeDTO.Salary,
            };

            dbContext.employees.Add(emplopyeeEntity);
            dbContext.SaveChanges();
            return Ok(emplopyeeEntity);
        }
    }
} 
```  

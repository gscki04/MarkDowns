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

        // Read All Employees
        [HttpGet]
         public IActionResult GetAllEmployee() {
            var allEmployees = dbContext.employees.ToList();
            return Ok(allEmployees);
        }
    }
}
```  

## POST method  
```C#
        // Create an entry
        [HttpPost]
        public IActionResult AddEmployee() {
            return null;
        }
```  

this is our POST methods, now let give it functionality.  

1. pass the DTO as a parameter.  
2. inside Employee entity inject data using DTO
3. add & save recieved payload using dbcontext
4. return status code  

## implemented  
```C#
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
```  

## Full Snippet  
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
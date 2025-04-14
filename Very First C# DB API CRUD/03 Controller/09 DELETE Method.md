## Full snippet:  
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

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateEmployee(Guid id, UpdateEmloyeDTO updateEmloyeDTO) {

            var employee = dbContext.employees.Find(id);

            if (employee is null) {
                return NotFound();
            }

            employee.Name = updateEmloyeDTO.Name;
            employee.Email = updateEmloyeDTO.Email;
            employee.Phone = updateEmloyeDTO.Phone;
            employee.Salary = updateEmloyeDTO.Salary;

            dbContext.SaveChanges();
            return Ok(employee);

        }
    }
} 
```  

## Delete implementation:  
```C#
        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteEmployee(Guid id) {
            var employee = dbContext.employees.Find(id);

            if(employee is null) {
                return NotFound();
            }

            dbContext.employees.Remove(employee);
            dbContext.SaveChanges();
            return Ok("Employe deleted");
        }
```  
## Full Snippet:  
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

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateEmployee(Guid id, UpdateEmloyeDTO updateEmloyeDTO) {

            var employee = dbContext.employees.Find(id);

            if (employee is null) {
                return NotFound();
            }

            employee.Name = updateEmloyeDTO.Name;
            employee.Email = updateEmloyeDTO.Email;
            employee.Phone = updateEmloyeDTO.Phone;
            employee.Salary = updateEmloyeDTO.Salary;

            dbContext.SaveChanges();
            return Ok(employee);

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteEmployee(Guid id) {
            var employee = dbContext.employees.Find(id);

            if(employee is null) {
                return NotFound();
            }

            dbContext.employees.Remove(employee);
            dbContext.SaveChanges();
            return Ok("Employe deleted");
        }
    }
} 
```  
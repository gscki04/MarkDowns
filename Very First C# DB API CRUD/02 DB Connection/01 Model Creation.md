Create new folder `Model` inside main folder, we will create Enity here.
Model layer has DTO (Data Transfer Object) 

- Create `Entities` folder inside `Model` folder 
here we wil be storing all DB entities  
```C#
namespace EmployeeAdminPortal.Model.Entities {
    public class Employee {

        public Guid Id { get; set; }
        // Guid == Globally Unique Identifier (Random number generator)
        public required string Name { get; set; }
        public required string Email { get; set; }
        public string? Phone { get; set; }  // nullable prope rty
        public decimal Salary { get; set; }
    }
}
```
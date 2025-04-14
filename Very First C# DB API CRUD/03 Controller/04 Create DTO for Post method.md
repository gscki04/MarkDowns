we finished Get Method, but for Post method we need a `DTO`: Data Transfer Object.  
so lets create that  
`Model` ----> create a DTO class here  
```C#
namespace EmployeeAdminPortal.Model {
    public class AddEmployeeDTO {
    }
}
```  
& inside this we need all Employee properties except GUID.  
just copy all those from entity.  
```C#
namespace EmployeeAdminPortal.Model {
    public class AddEmployeeDTO {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public string? Phone { get; set; }  // nullable prope rty
        public decimal Salary { get; set; }
    }
}
```  
now this is complete we can use this as a parameter in our controller's POST method  

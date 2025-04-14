`Model` ----> `UpdateEmloyeDTO.cs`  

```C#
namespace EmployeeAdminPortal.Model {
    public class UpdateEmloyeDTO {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public string? Phone { get; set; }  // nullable prope rty
        public decimal Salary { get; set; }
    }
}
```  
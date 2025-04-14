new folder `Data`  
`ApplicationDbContext.cs`:  
This file is heart of connection between code & database.
```C#
using EmployeeAdminPortal.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAdminPortal.Data {
    public class ApplicationDbContext : DbContext {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {
            
        }

        public DbSet<Employee> employees { get; set; }
    }
}
```
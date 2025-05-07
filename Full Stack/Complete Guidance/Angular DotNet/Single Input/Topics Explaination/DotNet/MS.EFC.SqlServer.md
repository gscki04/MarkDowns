`Microsoft.EntityFrameworkCore.SqlServer` is the **official NuGet package** that lets **Entity Framework Core** work with a **SQL Server** database.

---

### What it does:
It provides the **SQL Server provider** for EF Core, meaning it knows how to:
- Translate your C# LINQ queries into **T-SQL**
- Generate SQL Server-compatible migrations
- Connect to SQL Server databases using connection strings

---

### How to install:

You install it via NuGet:

#### Using Package Manager:
```powershell
Install-Package Microsoft.EntityFrameworkCore.SqlServer
```

#### Using .NET CLI:
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

---

### Use it in your `DbContext`:

```csharp
public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Your_Connection_String_Here");
    }
}
```

Or, if you're using **dependency injection (ASP.NET Core)**:
```csharp
services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
```
`Entity FrameWork`:  
EF is a Object-Relational Mapper (ORM) by Microsoft for .Net application. it let us work with a database using .NET objects (Classes), instead of writting raw SQL queries.  

it is a bridge, middle-man, translater between our c# code & actual database.  

### Features:
- **Convert our C# class as a Table**
- **Map properties as a Column**
- **inject object instance as a Row (record/entry)**
- **Automatic database creation/migrations**
- **Track changes and persist them via `.SaveChanges()`**
- **LINQ support** for querying data
- Works with **SQL Server**, **SQLite**, **PostgreSQL**, **MySQL**, etc.

### Conceptual Mapping

| C# Concept | Database Concept | Example |
|------------|------------------|---------|
| **C# class** | **Table** | `public class Product { ... }` → `Products` table |
| **Property** | **Column** | `public string Name` → `Name` column |
| **Object instance** | **Row / Record** | `new Product { Name = "Mouse" }` → 1 row in the `Products` table |
| **Add object to DbSet** | **Insert into table** | `_context.Products.Add(product)` |
| **SaveChanges()** | **Execute SQL INSERT/UPDATE/DELETE** | `_context.SaveChanges()` actually updates the database |


---

### Common Terms:
| Term | Description |
|------|-------------|
| `DbContext` | The bridge between your C# app and the database. Manages data access. |
| `DbSet<TEntity>` | Represents a table in the database. |
| `Migrations` | Tool to create/update the database schema based on your models. |
| `SaveChanges()` | Applies changes to the database (Insert/Update/Delete). |

---

### Example:
```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
}
```

```csharp
// Adding a new product
var product = new Product { Name = "Keyboard", Price = 50 };
_context.Products.Add(product);
_context.SaveChanges(); // This saves it to the DB
```
**Data Validation** means ensuring that the data coming into your API (typically via POST or PUT requests) is **correct, complete, and follows business rules** *before* saving it to the database.

---

### 🔍 Why Validate?

Without validation:
- A product might be saved with a **blank name**, or a **negative price**, or even **missing required fields**.
- It helps avoid bugs, broken logic, or invalid data in your database.

---

### ✅ How to Add Data Validation in .NET API

You add **data annotations** to your model class using attributes like `[Required]`, `[StringLength]`, `[Range]`, etc.

#### 🔧 Example: Validating a `Product` Model

```csharp
public class Product {
    public int Id { get; set; }

    [Required(ErrorMessage = "Product name is required.")]
    [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
    public string Name { get; set; }

    [Range(0.01, 10000, ErrorMessage = "Price must be between 0.01 and 10000.")]
    public decimal Price { get; set; }
}
```

Then in your controller, add this to your POST and PUT methods:

```csharp
if (!ModelState.IsValid)
{
    return BadRequest(ModelState);
}
```

ASP.NET will automatically validate based on those attributes and return **400 Bad Request** if the data doesn't meet the criteria.

---
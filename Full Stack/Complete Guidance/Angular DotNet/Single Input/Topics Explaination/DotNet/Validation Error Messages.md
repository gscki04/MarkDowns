```C#
using System.ComponentModel.DataAnnotations;

namespace Third.Model.Entities {
    public class Third {

        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage ="Name is required.")]
        [StringLength(50, ErrorMessage ="Name can't exceed 50 characters.")]
        public required string Name { get; set; }
    }
}
```  

### Where do you see these error messages?
1. **In API responses (if this is part of an API)**:  
   If this class is part of a backend API (e.g., ASP.NET Core API), you’ll see these error messages in the API response. For instance, when a client sends invalid data (like missing the `Name` or exceeding the 50-character limit), the API will return a **400 Bad Request** with a JSON response containing the validation errors.

   Example response:
   ```json
   {
     "errors": {
       "Name": [
         "Name is required.",
         "Name can't exceed 50 characters."
       ]
     }
   }
   ```

2. **In the UI (if you're using this in a web app)**:  
   If you’re binding this model to a form (for example, in Angular or an MVC view), you’ll see the error messages when the user submits the form with invalid input. This usually happens when you use a validation framework (e.g., `ngModel` in Angular or `@Html.EditorFor` in MVC) to display these messages.

   In Angular, for example, you would have a form that binds to this model and shows these messages when the user enters invalid input:
   ```html
   <form #thirdForm="ngForm">
     <input [(ngModel)]="third.Name" name="Name" required maxlength="50" #name="ngModel">
     <div *ngIf="name.invalid && name.touched">
       <small *ngIf="name.errors?.['required']">Name is required.</small>
       <small *ngIf="name.errors?.['maxlength']">Name can't exceed 50 characters.</small>
     </div>
   </form>
   ```

3. **In the console/debug logs (if you're using it in a backend context)**:  
   When you manually validate the model in the controller (using `ModelState.IsValid` in ASP.NET Core), these error messages may be logged to the console if they are part of the model validation process and the request fails validation.

   Example:
   ```csharp
   if (!ModelState.IsValid)
   {
       var errors = ModelState.Values.SelectMany(v => v.Errors)
                                      .Select(e => e.ErrorMessage);
       Console.WriteLine(string.Join(", ", errors)); // This would log the error messages
   }
   ```

### How to trigger these error messages:
- In an **API** call, if you try to send data that violates the validation rules (for example, an empty `Name` or a `Name` that's longer than 50 characters), the validation will fail, and the messages will appear in the response.
- In a **frontend form**, when the user submits the form with invalid data, these error messages will be displayed next to the corresponding fields.

### Example of API Controller in ASP.NET Core:
```csharp
[HttpPost]
public IActionResult CreateThird([FromBody] Third model)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }
    // Proceed with saving the model if valid
}
```
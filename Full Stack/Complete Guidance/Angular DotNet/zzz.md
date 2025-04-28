01 Backend Setup\01 Create a Project.md:
```markdown
`Create a new project` ----> `ASP.Net Core Web API` ----> `(name the application)`  
`.Net 8.0 (LTS)` ----> make sure `Use controller` is checked & leave other things as default ----> `Create`  

if we double click on project it will open its XML file.  
```

01 Backend Setup\02 Folder Structure.md:
```markdown
### Root Folder Structure

```
MyApiProject/
│
├── Controllers/                # Contains API controller classes
│   ├── WeatherForecastController.cs
│   └── ProductsController.cs
│
├── Models/                     # Contains the data models or DTOs (Data Transfer Objects)
│   ├── Product.cs
│   └── WeatherForecast.cs
│
├── Services/                   # Contains business logic and services for the API
│   ├── IProductService.cs
│   ├── ProductService.cs
│   └── IWeatherService.cs
│   └── WeatherService.cs
│
├── Data/                       # Contains data-related classes like DB context or migrations
│   ├── ApplicationDbContext.cs
│   └── Migrations/
│
├── Repositories/               # Optional: For abstracting database access logic
│   ├── IProductRepository.cs
│   ├── ProductRepository.cs
│
├── Properties/                 # Contains the "launchSettings.json" for different environments
│   └── launchSettings.json
│
├── Utils/                      # Optional: Utility classes or helpers
│   ├── DateTimeHelper.cs
│   └── LoggerHelper.cs
│
├── appsettings.json            # App configuration file for settings like connection strings
├── appsettings.Development.json
├── appsettings.Production.json
├── Program.cs                  # Main entry point of the application
└── Startup.cs                  # Optional (in case you use it, mostly in older versions)
```

### Breakdown of the Folders and Files:

- **Controllers**: This is where you place the API controller classes that handle HTTP requests and responses (e.g., `ProductController.cs`, `WeatherForecastController.cs`).
- **Models**: This folder contains the data models or DTOs. It defines the structure of the data you send/receive in API requests and responses (e.g., `Product.cs`, `WeatherForecast.cs`).
- **Services**: These classes contain your business logic. They handle the operations that your API performs, such as CRUD operations (e.g., `ProductService.cs`, `WeatherService.cs`).
- **Repositories**: If you're using the Repository Pattern, this folder would contain the interfaces and concrete implementations for database access (e.g., `ProductRepository.cs`).
- **Data**: This folder typically holds your Entity Framework DbContext (e.g., `ApplicationDbContext.cs`) and migration files (if you are using EF Core to interact with a database).
- **Properties**: Contains the `launchSettings.json` file used for environment-specific settings, such as running in development, production, or other environments.
- **appsettings.json**: The main configuration file that holds settings such as connection strings, logging configurations, and any other app-wide settings.
- **Program.cs**: The entry point of the application, where you configure services and middleware (this file replaces the `Startup.cs` in newer versions of .NET).
  
### Sample `Program.cs` in .NET 8.0:

```csharp
var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<IProductService, ProductService>();

var app = builder.Build();

// Configure middleware
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
```

This structure will scale well as your project grows. You can also add more folders for features like "Authentication", "Middleware", "Validators", etc., depending on your needs.
```

01 Backend Setup\03 Add Dependancies.md:
```markdown
right click on `Dependancy` folder ----> `Manage NuGet Packages` ----> `Browse` Tab  
add these packages:  
1. Microsoft.EntityFrameworkCore.SqlServer
2. Microsoft.EntityFrameworkCore.Tools
choose similar version which version of app you created. here its 8.0.4  
& install.  
we can double click project title bar to open XML file & see installed dependancies.  

```

01 Backend Setup\04 DB Connection String.md:
```markdown
`appsetting.json`:
here we will append the connection string after AllowedHosts   
```json
// {
//   "Logging": {
//     "LogLevel": {
//       "Default": "Information",
//       "Microsoft.AspNetCore": "Warning"
//     }
//   },
//   "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=COM-36\\SQL2016;Database=FirstApp;User Id=sa;Password=skhot@2016;Trusted_connection=true;TrustServerCertificate=true;",
    // "DefaultConnection": "Server=DESKTOP-T5UQ4DF;Database=DemoDB;Trusted_Connection=True;TrustServerCertificate=True;" // for local servers

  }
// }
```  

```

01 Backend Setup\05 Add CORS.md:
```markdown
At `Program.cs`  
1. just before app build method &  
```C#
builder.Services.AddCors(options => {
    options.AddPolicy("AllowAngularApp", builder => {
        builder.WithOrigins("http://localhost:4200")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});
```
2. strictly before  
```C#
app.UseAuthorization();
app.MapControllers();
app.Run();
```  
these methods, add this method    
```C#
app.UseCors("AllowAngularApp");
```  

note: you need to configure the frontend url according to yours  
```


---

After finishing all code summary of 01 Backend Setup

02 Backend Implement\01 Reflect Model to DB\01 Model Creation.md:
```markdown
Create new folder `Model` inside main folder, we will create Enity here.
Model layer has DTO (Data Transfer Object) 

- Create `Entities` folder inside `Model` folder 
here we wil be storing all DB entities  
```C#
using System.ComponentModel.DataAnnotations;

namespace SingleInput.Model.Entities {
    public class Solo {
        [Key] // make this primary key
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public string Name { get; set; }
    }
}
```  
```

02 Backend Implement\01 Reflect Model to DB\02 Define Database Context.md:
```markdown
new folder `Data`  
`ApplicationDbContext.cs`:  
This file is heart of connection between code & database.
```C#
using Microsoft.EntityFrameworkCore;
using SingleInput.Model.Entities;

namespace SingleInput.Data {
    public class ApplicationDbContext : DbContext {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options) {
            // the constructor is automatically invoked every time you create an instance of a class
        }

        public DbSet<Solo> solos { get; set; }
    }
}
```  
```

02 Backend Implement\01 Reflect Model to DB\03 AddDbContext to main program.md:
```markdown

Add this to `Program.cs` file:
```C#
builder.Services.AddDbContext<ApplicationDbContext>(options => options
        .UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
```  
just before `builder.build()` , a variable (mostly named app)  

here we binded our Application-Database-Context, means this DbContext is bridge between code & database.  
& in this method call's arrow function we passed our connection string

### we just connected our C# app to SQL Server via ApplicationDbContext using a clean config-based setup.
```

02 Backend Implement\01 Reflect Model to DB\04 Migration.md:
```markdown
A migration in Entity Framework Core is a way to track and apply changes to your database schema as your models evolve. Think of it as a version history for your database structure.  

after  
1. creating project  
2. adding dependancies  
3. creating model  
4. defining database context
5. creating & passing connection string  
next step is migration. when we do Entity-Framework-Core migration, it creates the DB schema & table according to our code & act on it.  

#### Open Package Manager  
`Menu bar` ----> `Tools` ----> `NuGet Package Manager` ----> `Package Manager Console`  
#### staging command  
```terminal
add-migration "InitialMigration"
```  
#### push changes  
```termnal
update-database
```
#### Behind the scenes:
- Reads DbContext
- Converts C# model → SQL commands
- Executes them on 

if any case if any issue occurs when pushing changes  
either remove `Trusted_connection=True:` from connetion string  
or  
<InvariantGlobalization>true</InvariantGlobalization>  
make the value `false`  
& push again.  
```

02 Backend Implement\02 Controller\01 Create Controller.md:
```markdown
Right click on Controller Folder ----> `Add` ----> `Controller` 
`Common` ----> `API` ----> `API Contoller - Empty` & give the name to contoller (here, its `SoloController`)  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SingleInput.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase
    {
    }
}
```  
```

02 Backend Implement\02 Controller\02 Controller Constructor Injection.md:
```markdown
now we have created the controller, we need to inject the DbContext inside our controller.  
we have DbContext (Bridge between Code & Database) inside our main `Program.cs` file  
now lets use it in controller  

### 1. create constructor function inside a controller  
snippet shortcut(visual studio 2022) is ctor: constu`ctor` postfix shortcut in visual studio to create constructor.    
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase
    {

        public SoloController() {   // 🔄: this constructor
        }
    }
}
```  
pass application-database-context & variable as a parameter.  
after variable `ctrl` + `.` ----> create and `assign field` & hit enter.  
it will create private & readonly variable for you. 
this `private field` or `variable` we will be going for all API operations  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SingleInput.Data;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;  // 🔄: Create this with (CTRL + .) = assign field, or create it manually

        public SoloController(ApplicationDbContext dbContext) {   
            this.dbContext = dbContext;
        }
    }
}
```  
```

02 Backend Implement\02 Controller\03 GET Method.md:
```markdown
## Current Code
```csharp
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SingleInput.Data;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;  
        
        public SoloController(ApplicationDbContext dbContext) {   
            this.dbContext = dbContext;
        }

        // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }
    }
}
```  
this is our current controller now lets add the first method which is GET  
## GET method
```C#
               // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }
```  
we can consice the code block by removing a variable & passing the assigned value directly to return statement.
##### `with` variable:
```C#
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
```  
##### `without` variable:
```C#
            return Ok(await dbContext.solos.ToListAsync());
```  
### Breakdown:


1. **Attribute `[HttpGet]`:**
   - This tells your API that this method responds to HTTP GET requests. It's the standard for retrieving data from a server.

2. **Method Signature:**
   - `public async Task<IActionResult> GetAllSolo()`: Now asynchronous, allowing the method to run without blocking the main thread.

3. **Fetching Data:**
   - `await dbContext.solos.ToListAsync();`
     - `dbContext.solos`: Accesses the `solos` table via your Entity Framework Core DbContext.
     - `.ToListAsync()`: Asynchronously executes the query and loads all records into a list. This is non-blocking and improves scalability for high-load scenarios.

4. **Returning Response:**
   - `return Ok(...)`: Returns an HTTP 200 (OK) response with the fetched list in the response body.

`NOTE`: **IActionResult** is an interface in ASP.NET Core which has pre-build functionalities, like  
- `OkResult` and `OkObjectResult`: Return HTTP 200 responses.  
- `NotFoundResult`: Returns an HTTP 404 response.​  
- `BadRequestResult`: Returns an HTTP 400 response.  
- `JsonResult`: Returns JSON-formatted data.  
```

02 Backend Implement\02 Controller\04 Create DTO for Post method.md:
```markdown
we finished Get Method, but for Post method we need a `DTO`: Data Transfer Object.  
so lets create that  
`Model` ----> create a DTO class here  
```C#
namespace SingleInput.Model {
    public class AddSoloDTO {
    }
}
```  
& inside this we need all Employee properties except if.  
just copy all those from entity (we purposefully having single property to ease of learn).  
```C#
using System.ComponentModel.DataAnnotations;

namespace SingleInput.Model {
    public class AddSoloDTO {

        [Required(ErrorMessage = "Name is required!.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public required string Name { get; set; }
        // add other properties if added later  
    }
}
```  
now this is complete we can use this as a parameter in our controller's POST method  
```

02 Backend Implement\02 Controller\05 POST Method.md:
```markdown
## POST method  
```C#
        // Create an entry
        [HttpPost]
        public IActionResult AddSolo() {
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
        [HttpPost]
        public IActionResult AddSolo(AddSoloDTO addSoloDTO) {

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            var tempEntity = new Solo() {
                Name = addSoloDTO.Name,
                // add other properties here in future
            };

            dbContext.solos.Add(tempEntity);
            dbContext.SaveChanges();
            return Ok(tempEntity);
        }
```  

## Full Snippet  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SingleInput.Data;
using SingleInput.Model;
using SingleInput.Model.Entities;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase {
        private readonly ApplicationDbContext dbContext;  // 🔄: Create this with (CTRL + .) = assign field, create it manually

        public SoloController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }

        // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }

        // Add record
        [HttpPost]
        public IActionResult AddSolo(AddSoloDTO addSoloDTO) {

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            var tempEntity = new Solo() {
                Name = addSoloDTO.Name,
                // add other properties here in future
            };

            dbContext.solos.Add(tempEntity);
            dbContext.SaveChanges();
            return Ok(tempEntity);
        }


    
    }
}

```  
```

02 Backend Implement\02 Controller\06 GET By ID.md:
```markdown
## Get By ID implmentation  
```C#
        //Read one record by Id
       [HttpGet]
       [Route("{id:int}")]
        public IActionResult GetSoloById(int id) {

            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) { 
                return NotFound();
            }
            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            return Ok(tempEntity);
        }
```  
## Full Code:  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SingleInput.Data;
using SingleInput.Model;
using SingleInput.Model.Entities;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase {
        private readonly ApplicationDbContext dbContext;  // 🔄: Create this with (CTRL + .) = assign field, create it manually

        public SoloController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }

        // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }

        // Add record
        [HttpPost]
        public IActionResult AddSolo(AddSoloDTO addSoloDTO) {

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            var tempEntity = new Solo() {
                Name = addSoloDTO.Name,
                // add other properties here in future
            };

            dbContext.solos.Add(tempEntity);
            dbContext.SaveChanges();
            return Ok(tempEntity);
        }

        //Read one record by Id
       [HttpGet]
       [Route("{id:int}")]
        public IActionResult GetSoloById(int id) {

            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) { 
                return NotFound();
            }
            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            return Ok(tempEntity);
        }



    }
}
```  
```

02 Backend Implement\02 Controller\07 Create DTO for PUT method.md:
```markdown
`Model` ----> `UpdateEmloyeDTO.cs`  

```C#
using System.ComponentModel.DataAnnotations;

namespace SingleInput.Model {
    public class UpdateSoloDTO {

        [Required(ErrorMessage = "Name is required!.")]
        [StringLength(100, ErrorMessage = "Name can't exceed 100 characters.")]
        public required string Name { get; set; }

        // add other fields here
    }
}
```  
```

02 Backend Implement\02 Controller\08 PUT Method.md:
```markdown
## PUT implementation  
```C#
        // Update record
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateSolo(int id, UpdateSoloDTO updateSoloDTO) {
            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) {
                return NotFound();
            }

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            tempEntity.Name = updateSoloDTO.Name;
            // other fields here

            dbContext.SaveChanges();
            return Ok(tempEntity);
        }
```  
## Full snippet:  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SingleInput.Data;
using SingleInput.Model;
using SingleInput.Model.Entities;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase {
        private readonly ApplicationDbContext dbContext;  // 🔄: Create this with (CTRL + .) = assign field, create it manually

        public SoloController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }

        // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }

        // Add record
        [HttpPost]
        public IActionResult AddSolo(AddSoloDTO addSoloDTO) {

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            var tempEntity = new Solo() {
                Name = addSoloDTO.Name,
                // add other properties here in future
            };

            dbContext.solos.Add(tempEntity);
            dbContext.SaveChanges();
            return Ok(tempEntity);
        }

        //Read one record by Id
       [HttpGet]
       [Route("{id:int}")]
        public IActionResult GetSoloById(int id) {

            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) { 
                return NotFound();
            }
            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            return Ok(tempEntity);
        }

        // Update record
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateSolo(int id, UpdateSoloDTO updateSoloDTO) {
            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) {
                return NotFound();
            }

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            tempEntity.Name = updateSoloDTO.Name;
            // other fields here

            dbContext.SaveChanges();
            return Ok(tempEntity);
        }
        
    }
}
```  
```

02 Backend Implement\02 Controller\09 DELETE Method.md:
```markdown
## Delete implementation:  
```C#
        // Delet Record
        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteSolo(int id) {
            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) {
                return NotFound();
            }

            dbContext.solos.Remove(tempEntity);
            dbContext.SaveChanges();
            return Ok($"Product Deleted:\n{tempEntity}");
        }
```  
## Full Snippet:  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SingleInput.Data;
using SingleInput.Model;
using SingleInput.Model.Entities;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase {
        private readonly ApplicationDbContext dbContext;  // 🔄: Create this with (CTRL + .) = assign field, create it manually

        public SoloController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }

        // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }

        // Add record
        [HttpPost]
        public IActionResult AddSolo(AddSoloDTO addSoloDTO) {

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            var tempEntity = new Solo() {
                Name = addSoloDTO.Name,
                // add other properties here in future
            };

            dbContext.solos.Add(tempEntity);
            dbContext.SaveChanges();
            return Ok(tempEntity);
        }

        //Read one record by Id
       [HttpGet]
       [Route("{id:int}")]
        public IActionResult GetSoloById(int id) {

            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) { 
                return NotFound();
            }
            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            return Ok(tempEntity);
        }

        // Update record
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateSolo(int id, UpdateSoloDTO updateSoloDTO) {
            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) {
                return NotFound();
            }

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            tempEntity.Name = updateSoloDTO.Name;
            // other fields here

            dbContext.SaveChanges();
            return Ok(tempEntity);
        }

        // Delet Record
        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteSolo(int id) {
            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) {
                return NotFound();
            }

            dbContext.solos.Remove(tempEntity);
            dbContext.SaveChanges();
            return NoContent(); // if we add anything other than this it gives problem at front end
        }

    }
}
```  
```


---

After finishing all code summary of 02 Backend Implement

03 Frontend Project\01 Initialize Project\01 Setup frontend.md:
```markdown
## 1. create project  
```terminal
ng new projectName --style=scss --routing=true
```  

## 2. Install necessary dependancies  
```terminal
npm install bootstrap
npm install @angular/forms
npm install @angular/common
```  

## 3. Add Bootstrap to `angular.json`  
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
]
```  
```

03 Frontend Project\02 Modules & Model\01 Project Structure & Modules.md:
```markdown
## 1. Project Structure & Modules  
```terminal
ng generate module app-routing --flat --module=app
ng generate service services/solo
ng generate component components/solo-list
ng generate component components/solo-form
```  
if routing is already available then first command will give error but neglect it.  

## 2. Create Model  
create `models` folder under src/app` folder & write model    
`src/app/models/solo.model.ts`  
```typescript
export interface SoloModel {
    id: number;
    productName: string;
}
```  


```

03 Frontend Project\03 Routings\01 Routing.md:
```markdown
Add component to routes array  
```typescript
const routes: Routes = [
  { path: '', redirectTo: 'solos-list', pathMatch: 'full' },
  { path: 'solos-list', component: SoloListComponent },
  { path: 'add-solo', component: SoloFormComponent },
  { path: 'edit-solo/:id', component: SoloFormComponent },
  { path: '**', redirectTo: 'solos-list' }
];
```  
### Full snippet  
`fe-solo\src\app\app-routing.module.ts`  
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoloFormComponent } from './components/solo-form/solo-form.component';
import { SoloListComponent } from './components/solo-list/solo-list.component';

// 🔄: add routing to this array
const routes: Routes = [
  { path: '', redirectTo: 'solos-list', pathMatch: 'full' },
  { path: 'solos-list', component: SoloListComponent },
  { path: 'add-solo', component: SoloFormComponent },
  { path: 'edit-solo/:id', component: SoloFormComponent },
  { path: '**', redirectTo: 'solos-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```  
```

03 Frontend Project\04 Service Implementation\01 Grab Backend Link.md:
```markdown
create a eniviroment file & keep back end URL there  
`fe-solo\src\app\env\env.ts`  
```typescript
export const environment = {
    production: false,
    apiUrl: "https://localhost:7013/api/solo"
  };
```    

```

03 Frontend Project\04 Service Implementation\02 Cruds Implementation.md:
```markdown
`fe-solo\src\app\services\solo.service.ts`  
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoloModel } from '../models/solo.model';
import { environment } from '../env/env';

@Injectable({
  providedIn: 'root',
})
export class SoloService {
  private beUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSolos(): Observable<SoloModel[]> {
    return this.http.get<SoloModel[]>(this.beUrl);
  }

  getSoloById(id: number): Observable<SoloModel> {
    return this.http.get<SoloModel>(`${this.beUrl}/${id}`);
  }

  addSolo(solo: SoloModel): Observable<SoloModel> {
    return this.http.post<SoloModel>(this.beUrl, solo);
  }

  updateSolo(id: number, solo: SoloModel): Observable<void> {
    return this.http.put<void>(`${this.beUrl}/${id}`, solo);
  }

  deleteSolo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.beUrl}/${id}`);
  }
}
```  
```

03 Frontend Project\05 Component Implementation\01 listing Component.md:
```markdown
## Component:  
`fe-solo\src\app\components\solo-list\solo-list.component.ts`:  
```typescript
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoloService } from '../../services/solo.service';
import { SoloModel } from '../../models/solo.model';
import { ChangeDetectorRef } from '@angular/core'; // Import ChangeDetectorRef

@Component({
  selector: 'app-solo-list',
  templateUrl: './solo-list.component.html',
  styleUrls: ['./solo-list.component.scss'],
})
export class SoloListComponent implements OnInit {
  solos: SoloModel[] = [];

  constructor(
    private soloService: SoloService,
    private router: Router,
    private cdRef: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadSolos();
  }

  loadSolos(): void {
    console.log('Loading solos');
    this.soloService.getSolos().subscribe({
      next: (solos) => {
        console.log('Loaded solos:', solos);
        this.solos = solos;
      },
      error: (err) => {
        console.error('Error loading solos', err);
      },
    });
  }
  
  deleteSolo(id: number): void {
    console.log('Deleting solo with id:', id);
    if (confirm('Are you sure you want to delete this solo?')) {
      this.soloService.deleteSolo(id).subscribe({
        next: () => {
          console.log('Solo deleted, updating the list');
          this.solos = this.solos.filter(solo => solo.id !== id);
          this.cdRef.detectChanges();
        },
        error: (err) => {
          console.error('Error deleting solo', err);
        },
      });
    }
  }
  

  editSolo(id: number): void {
    this.router.navigate([`/edit-solo/${id}`]);
  }
}
```  
## Template:  
`fe-solo\src\app\components\solo-list\solo-list.component.html`  
```html
<h2>Solos List</h2>

<ul>
  <li *ngFor="let solo of solos">
    <span>{{ solo.name }}</span>
    <button (click)="editSolo(solo.id)">Edit</button>
    <button (click)="deleteSolo(solo.id)">Delete</button>
  </li>
</ul>

<button routerLink="/add-solo">Add New Solo</button>
```  
```

03 Frontend Project\05 Component Implementation\02 Form Component.md:
```markdown
## Component:  
`fe-solo\src\app\components\solo-form\solo-form.component.ts`  
```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoloService } from '../../services/solo.service';
import { SoloModel } from '../../models/solo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solo-form',
  templateUrl: './solo-form.component.html',
  styleUrls: ['./solo-form.component.scss'],
})

export class SoloFormComponent implements OnInit {
  soloForm: FormGroup;
  soloId: number | null = null;
  isEditing = false;

  constructor(
    private fb: FormBuilder,
    private soloService: SoloService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.soloForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.soloId = +id;
      this.loadSolo();
    }
  }

  loadSolo(): void {
    if (this.soloId) {
      this.soloService.getSoloById(this.soloId).subscribe({
        next: (solo) => {
          this.soloForm.patchValue({
            name: solo.name,
          });
        },
        error: () => {
          this.router.navigate(['/solos-list']);
        },
      });
    }
  }

  onSubmit(): void {
    if (this.soloForm.invalid) {
      return;
    }

    const solo: SoloModel = this.soloForm.value;

    if (this.isEditing && this.soloId) {
      this.soloService.updateSolo(this.soloId, solo).subscribe({
        next: () => this.router.navigate(['/solos-list']),
        error: (err) => console.error(err),
      });
    } else {
      this.soloService.addSolo(solo).subscribe({
        next: () => this.router.navigate(['/solos-list']),
        error: (err) => console.error(err),
      });
    }
  }
}
```  
## Template:  
`fe-solo\src\app\components\solo-form\solo-form.component.html`  
```html
<h2>{{ isEditing ? 'Edit Solo' : 'Add Solo' }}</h2>

<form [formGroup]="soloForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="name">Name</label>
    <input
      id="name"
      formControlName="name"
      type="text"
      placeholder="Enter solo name"
    />
    <div *ngIf="soloForm.get('name')?.invalid && soloForm.get('name')?.touched">
      <small *ngIf="soloForm.get('name')?.errors?.['required']">
        Name is required.
      </small>
      <small *ngIf="soloForm.get('name')?.errors?.['maxlength']">
        Name can't exceed 100 characters.
      </small>
    </div>
  </div>

  <button type="submit" [disabled]="soloForm.invalid">
    {{ isEditing ? 'Update' : 'Add' }} Solo
  </button>
</form>
```  
```


---

After finishing all code summary of 03 Frontend Project

Index.md:
```markdown
Divide full stack in parts  
# 1. Setup backend & connect it to database via connection string.  
- ## 1.a: Create backend project  
- ## 1.b: Add Dependencies   
- ## 1.c: Database connection string   
- ## 1.d: Add CORS (Cross-Origin Resource Sharing)     

# 2. Implenent Backend & test with tools like postman/Swagger.  
- ## 2.a: Reflect Model to Database  
    - ### 2.a.1: Model creation  
    - ### 2.a.2: Define Database context  
    - ### 2.a.3: AddDbContext to main program file  
    - ### 2.a.4: Migration  
- ## 2.b: Controller (CRUD)
    - ### 2.b.1: Create Controller  
    - ### 2.b.2: Controller Constructore Injection  
    - ### 2.b.3: GET method  
    - ### 2.b.4: create DTO for POST method  
    - ### 2.b.5: POST method  
    - ### 2.b.6: GET By ID method  
    - ### 2.b.7: Create DTO for PUT method  
    - ### 2.b.8: PUT method  
    - ### 2.b.9: DELETE method  

# 3. Setup frontend.  
- ## 3.a: Setup frontend project    
    - ### 3.a.1: Create project
    - ### 3.a.2: Add dependacies like bootstrap, common, form
    - ### 3.a.3: Add bootstrap to angular.json

 - ## 3.b: Structure the project  
    - ### 3.b.1: generate router file in not, generate service file & component  
    - ### 3.b.2: create model    

- ## 3.c: Routing  
    - ### 3.c.1: import all components & add it to route array as object with path & component keys 

- ## 3.d: Impletemt service layer / crud  
    - ### 3.d.1: create enviroment file & place backend string there  
    - ### 3.d.2: access that url string into service file & using that string implememt all frontend request methods there   


- ## 3.e: Apply Component  
    - ### 3.e.1: list component
    - ### 3.e.2: form component

```


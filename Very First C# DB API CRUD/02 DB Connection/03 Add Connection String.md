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
    "DefaultConnection": "Server=COM-36\\SQL2016;Database=FirstApp;User Id=sa;Password=skhot@2016;Trusted_connection=true;TrustServerCertificate=true;"
  }
// }
```  

Add this to `Program.cs` file:
```C#
builder.Services.AddDbContext<ApplicationDbContext>(options => options
        .UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
```  
just before `builder.build()` is  variable (mostly named app)  

here we binded our Application-Database-Context, means this DbContext is bridge between code & database.  
& in this method call's arrow function we passed our connection string

### we just connected your C# app to SQL Server via ApplicationDbContext using a clean config-based setup.

Add this to `Program.cs` file:
```C#
builder.Services.AddDbContext<ApplicationDbContext>(options => options
        .UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
```  
just before `builder.build()` , a variable (mostly named app)  

here we binded our Application-Database-Context, means this DbContext is bridge between code & database.  
& in this method call's arrow function we passed our connection string

### we just connected our C# app to SQL Server via ApplicationDbContext using a clean config-based setup.
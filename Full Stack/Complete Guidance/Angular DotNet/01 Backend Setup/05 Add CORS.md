At `Program.cs`  
```C#
builder.Services.AddCors(options => {
    options.AddPolicy("AllowAngularApp", builder => {
        builder.WithOrigins("http://localhost:4200")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});
```

just before app build method &  
```C#
app.UseCors("AllowAngularApp");
```  
strictly before  
```C#
app.UseAuthorization();
app.MapControllers();
app.Run();
```  
these methods  

note: you need to configure the frontend url according to yours  
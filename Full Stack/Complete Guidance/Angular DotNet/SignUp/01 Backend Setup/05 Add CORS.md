At `Program.cs`  
1. just before app build method &  
```C#
builder.Services.AddCors(options => {
    options.AddPolicy("AllowedAngular", policy => {
        policy.WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
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
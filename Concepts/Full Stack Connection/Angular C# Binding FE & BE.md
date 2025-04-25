## Connect Backend & Frontend 
1. `Database` ----> `Backend`  
At backend we store connection string in `appsettings.json`  
example:  
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  // 🔄 : in this object we can store connection strings.  
  "ConnectionStrings": {
    //"DefaultConnection": "Server=COM-36\\SQL2016;Database=FirstApp;User Id=sa;Password=skhot@2016;Trusted_connection=true;TrustServerCertificate=true;"
    "DefaultConnection": "Server=DESKTOP-T5UQ4DF;Database=ProductDemo;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```  

2. Grabbing the Intitial Mutual Part of URL:  
at backend we have a URL for http requests, withing that URL we only snip the initial mutual part, which is common in every request.    
example: `https://localhost:7020/api/product`, we grab this URL  

3. `Backend` ----> `FrontEnd`  
we store that url in enviroment file like `.env` or `enviroment.ts`, as a variable or object.  
Examples:  
`Variable`  
```typescript
  let apiUrl = "https://localhost:7020/api/product";
```  
OR  
`Object`  
```typescript
export const environment = {
    production: false,
    apiUrl: "https://localhost:7020/api/product"
  };
```  

4. Using URL for CRUDs:  
we use that URL value to perform the CRUD operations in service layer  
```typescript
  private beURL = environment.apiUrl;
```  
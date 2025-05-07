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

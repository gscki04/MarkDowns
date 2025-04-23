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
🔗 Behind the scenes:
- Reads DbContext
- Converts C# model → SQL commands
- Executes them on 

if any case if any issue occurs when pushing changes  
either remove `Trusted_connection=True:` from connetion string  
or  
<InvariantGlobalization>true</InvariantGlobalization>  
make the value `false`  
& push again.  
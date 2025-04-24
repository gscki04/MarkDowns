
### 📦 NuGet Package Management Commands

| **Action**                 | **Command**                                                                 | **Description**                                |
|---------------------------|------------------------------------------------------------------------------|------------------------------------------------|
| Install package           | `Install-Package <PackageName>`                                             | Installs latest version of a NuGet package     |
| Install specific version  | `Install-Package <PackageName> -Version <x.y.z>`                            | Installs a specific version                    |
| Update package            | `Update-Package <PackageName>`                                              | Updates a specific package to latest version   |
| Update all packages       | `Update-Package`                                                             | Updates all NuGet packages                     |
| Uninstall package         | `Uninstall-Package <PackageName>`                                           | Removes a NuGet package from the project       |
| List installed packages   | `Get-Package`                                                                | Lists all installed packages                   |
| List available updates    | `Get-Package -Updates`                                                       | Lists packages with updates available          |
| Find package              | `Find-Package <SearchTerm>`                                                 | Searches for a package on NuGet.org            |
| Install from source       | `Install-Package <PackageName> -Source <Path or URL>`                       | Installs from a custom source                  |
| Specify project           | `Install-Package <PackageName> -ProjectName <Project>`                      | Installs to a specific project                 |

---

### 🧱 Entity Framework Core Commands (Code-First)

| **Action**                 | **Command**                                                                 | **Description**                                |
|---------------------------|------------------------------------------------------------------------------|------------------------------------------------|
| Add migration             | `Add-Migration <MigrationName>`                                             | Adds a new migration                           |
| Specify DbContext         | `Add-Migration <Name> -Context <DbContextName>`                             | Adds migration using specific DbContext        |
| Update database           | `Update-Database`                                                            | Applies all pending migrations to DB           |
| Target specific migration | `Update-Database -Migration <MigrationName>`                                | Applies up to a specific migration             |
| Remove last migration     | `Remove-Migration`                                                           | Removes the last migration (if not applied)    |
| Remove with force         | `Remove-Migration -Force`                                                    | Removes migration even if it has changes       |
| Script migration          | `Script-Migration`                                                           | Generates SQL for all migrations               |
| Script between migrations | `Script-Migration -From <Old> -To <New>`                                    | SQL between specific migrations                |
| Drop database             | `Drop-Database`                                                              | Drops the database                             |
| Drop with force           | `Drop-Database -Force`                                                       | Drops DB without confirmation                  |

---

### 🔧 Common Optional Parameters

| **Parameter**             | **Usage**                                        | **Description**                                      |
|---------------------------|--------------------------------------------------|------------------------------------------------------|
| `-ProjectName`            | `-ProjectName YourProjectName`                  | Target a specific project                           |
| `-StartupProjectName`     | `-StartupProjectName YourStartupProject`        | Specify the startup project                         |
| `-Context`                | `-Context YourDbContext`                        | Use a specific `DbContext`                          |
| `-Force`                  | `-Force`                                        | Force the command to execute even with warnings     |
| `-Source`                 | `-Source C:\LocalNuGet`                         | Install from a specific source location             |

---
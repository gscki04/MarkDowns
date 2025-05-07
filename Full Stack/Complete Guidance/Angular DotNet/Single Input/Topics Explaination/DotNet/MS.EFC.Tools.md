`Microsoft.EntityFrameworkCore.Tools` is a **NuGet package** that provides the **command-line tools**:

---

### EF Core Migrations and Database Management:

| Feature | What it does |
|--------|---------------|
| `Add-Migration` | Creates a migration file based on model changes |
| `Update-Database` | Applies migrations to update your database schema |
| `Remove-Migration` | Reverts the last migration if not applied |
| `Script-Migration` | Generates SQL script for migrations |
| `Scaffold-DbContext` | Reverse-engineers models from an existing database |

---

### Install it (for design-time support):

#### Using Package Manager:
```powershell
Install-Package Microsoft.EntityFrameworkCore.Tools
```

#### Using .NET CLI:
```bash
dotnet add package Microsoft.EntityFrameworkCore.Tools
```

> It’s typically only required in your **project file (csproj)** where you run migrations—usually your ASP.NET Core backend or a class library.

---

### Example Usage in Package Manager Console:

```powershell
Add-Migration InitialCreate
Update-Database
```

---

### Required when you run EF Core commands like:
- In **Visual Studio**: via the **Package Manager Console**
- In **Terminal**: with `dotnet ef` CLI commands

---
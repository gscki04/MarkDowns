## 1. **Setup Backend & Connect to Database via Connection String**
### 1.a: **Create Backend Project**
- Create a new ASP.NET Core Web API project.

### 1.b: **Add Dependencies**
- Install necessary NuGet packages (e.g., `Microsoft.EntityFrameworkCore`, `Microsoft.EntityFrameworkCore.SqlServer`, `Microsoft.EntityFrameworkCore.Tools`).

### 1.c: **Database Connection String**
- Define the connection string in `appsettings.json`:
    ```json
    {
      "ConnectionStrings": {
        "DefaultConnection": "YourDatabaseConnectionStringHere"
      }
    }
    ```
  
### 1.d: **Add CORS (Cross-Origin Resource Sharing)**
- In `Startup.cs` or `Program.cs`, add CORS policy:
    ```csharp
    services.AddCors(options =>
    {
        options.AddPolicy("AllowAll", builder =>
            builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
    });
    ```
- In `Configure` method, enable CORS:
    ```csharp
    app.UseCors("AllowAll");
    ```

---

## 2. **Implement Backend & Test with Tools like Postman/Swagger**

### 2.a: **Reflect Model to Database**
#### 2.a.1: **Model Creation**
- Define a model class (e.g., `Product`) in `Models` folder.

#### 2.a.2: **Define Database Context**
- Create a `DbContext` class in the `Data` folder:
    ```csharp
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }
    ```

#### 2.a.3: **Add DbContext to Main Program File**
- In `Program.cs`, add the DbContext:
    ```csharp
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
    ```

#### 2.a.4: **Migration**
- Run the following commands in the terminal to add migrations and update the database:
    ```bash
    dotnet ef migrations add InitialCreate
    dotnet ef database update
    ```

---

### 2.b: **Controller (CRUD)**

#### 2.b.1: **Create Controller**
- Generate a controller (e.g., `ProductsController`) in `Controllers` folder.

#### 2.b.2: **Controller Constructor Injection**
- Inject the `ApplicationDbContext` into the controller’s constructor.

#### 2.b.3: **GET Method**
- Create a `GET` method to retrieve all records:
    ```csharp
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        return await _context.Products.ToListAsync();
    }
    ```

#### 2.b.4: **Create DTO for POST Method**
- Create a DTO (e.g., `ProductCreateDto`) to validate the incoming data for `POST`.

#### 2.b.5: **POST Method**
- Create the `POST` method to create a new product:
    ```csharp
    [HttpPost]
    public async Task<ActionResult<Product>> PostProduct(ProductCreateDto productDto)
    {
        var product = new Product { ProductName = productDto.ProductName, ProductPrice = productDto.ProductPrice };
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
    }
    ```

#### 2.b.6: **GET By ID Method**
- Create a `GET` method to retrieve a product by ID:
    ```csharp
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null) return NotFound();
        return product;
    }
    ```

#### 2.b.7: **Create DTO for PUT Method**
- Create a DTO (e.g., `ProductUpdateDto`) for updating the product.

#### 2.b.8: **PUT Method**
- Create the `PUT` method to update a product:
    ```csharp
    [HttpPut("{id}")]
    public async Task<IActionResult> PutProduct(int id, ProductUpdateDto productDto)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null) return NotFound();

        product.ProductName = productDto.ProductName;
        product.ProductPrice = productDto.ProductPrice;
        await _context.SaveChangesAsync();
        return NoContent();
    }
    ```

#### 2.b.9: **DELETE Method**
- Create the `DELETE` method to delete a product:
    ```csharp
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null) return NotFound();

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
        return NoContent();
    }
    ```

---

## 3. **Setup Frontend**

### 3.a: **Setup Frontend Project**
#### 3.a.1: **Create Project**
```bash
ng new fe-solo --style=scss --routing
```

#### 3.a.2: **Add Dependencies**
```bash
npm install bootstrap @angular/forms
```

#### 3.a.3: **Add Bootstrap to angular.json**
- Add Bootstrap in `angular.json`:
    ```json
    "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.scss"
    ]
    ```

---

### 3.b: **Structure the Project**

#### 3.b.1: **Generate Router, Service, and Component Files**
```bash
ng generate module app-routing
ng generate service services/product
ng generate component components/product-list
ng generate component components/product-form
```

#### 3.b.2: **Create Model**
Define the `Product` interface in `models/product.model.ts`:
```ts
export interface Product {
  id: number;
  productName: string;
  productPrice: number;
}
```

---

### 3.c: **Routing**

#### 3.c.1: **Import Components & Add to Routing**
- In `app-routing.module.ts`:
    ```ts
    const routes: Routes = [
      { path: '', component: ProductListComponent },
      { path: 'create', component: ProductFormComponent },
      { path: 'edit/:id', component: ProductFormComponent },
    ];
    ```

---

### 3.d: **Implement Service Layer/CRUD**

#### 3.d.1: **Create Environment File & Place Backend URL**
In `src/environments/environment.ts`, add the API URL:
```ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api/products'
};
```

#### 3.d.2: **Access API URL in Service**
In `product.service.ts`, use the environment file to make HTTP requests:
```ts
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

---

### 3.e: **Apply Components**

#### 3.e.1: **Product List Component**
In `product-list.component.ts`, use `ProductService` to fetch and display products.

#### 3.e.2: **Product Form Component**
In `product-form.component.ts`, use reactive forms to handle form submission for create/update.

---

This structure should guide you through building both the backend and frontend for a full-stack CRUD application. Let me know if you'd like help on specific sections!
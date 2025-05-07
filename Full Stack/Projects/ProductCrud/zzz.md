product-fe\src\app\app-routing.module.ts:
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: "products", pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'add-product', component: ProductFormComponent},
  { path: 'edit-product/:id', component: ProductFormComponent }, // 🔄: here
  {path: '**', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

product-fe\src\app\app.component.html:
```html
<h3>Product Cruds FrontEnd</h3>
<nav>
    <a routerLink="/products" routerLinkActive="active">Show Products</a>
    <span style="margin-right: 50px;"></span>
    <a routerLink="/add-product" routerLinkActive="active">Add Product</a>
</nav>
<router-outlet></router-outlet>
```

product-fe\src\app\app.component.spec.ts:
```typescript
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'product-fe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('product-fe');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('product-fe app is running!');
  });
});

```

product-fe\src\app\app.component.ts:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-fe';
}

```

product-fe\src\app\app.module.ts:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

product-fe\src\app\components\product-form\product-form.component.html:
```html
<h2>Add Product</h2>
<form [formGroup]="productForm" (ngSubmit)="onSubmit()">
    <label>
        Name: <input formControlName="name">
    </label>
    <div *ngIf="productForm.get('name')?.invalid && productForm.get('name')?.touched">
        <small *ngIf="productForm.get('name')?.errors?.['required']" >Product name is required.</small>
        <small *ngIf="productForm.get('name')?.errors?.['maxlength']" >Max 100 character</small>
    </div>

    <label>
        Price: <input type="number" formControlName="price" >
    </label>
    <div *ngIf="productForm.get('price')?.invalid && productForm.get('price')?.touched">
        <small *ngIf="productForm.get('price')?.errors?.['required']" >Product value is required.</small>
        <small *ngIf="productForm.get('price')?.errors?.['min']" >Min value is 0.01</small>
    </div>

    <button type="submit" [disabled]="productForm.invalid">Add Product</button>
</form>
```

product-fe\src\app\components\product-form\product-form.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormComponent]
    });
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

product-fe\src\app\components\product-form\product-form.component.ts:
```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  productId: number | null = null;
  isEditedMode = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router  
  ) {
    this.productForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      price: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {

    const idParam = this.route.snapshot.paramMap.get('id');

    this.productId = idParam ? +idParam : null;
    if(this.productId){
      this.isEditedMode = true;
      this.productService.GetProductById(this.productId).subscribe(product => {
        this.productForm.patchValue({
          name: product.name,
          price: product.price
        });
      });
    }
  }

  onSubmit(): void{
    if(this.productForm.valid){
      if(this.isEditedMode && this.productId){
        this.productService.updateProduct(this.productId, {id: this.productId, ...this.productForm.value})
        .subscribe( ()=> {
          alert("Product updated successfully!");
          this.router.navigate(['/products']);
        } );
      } else {
        this.productService.createProduct(this.productForm.value).subscribe( ()=> {
          alert('Product created successfully!');
          this.productForm.reset();
          this.router.navigate(['/products']);
        } )
      }
    
  }

}
}
```

product-fe\src\app\components\product-list\product-list.component.html:
```html
<h2>Product List</h2>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let i of products">
            <td>{{i.name}}</td>
            <td>{{i.price}}</td>
            <td>
                <button (click)="deleteProduct(i.id)">Delete</button>
                <button [routerLink]="['/edit-product', i.id]">Edit</button> <!-- 🔄 added button here -->
            </td>
        </tr>
    </tbody>
</table>


```

product-fe\src\app\components\product-list\product-list.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

product-fe\src\app\components\product-list\product-list.component.ts:
```typescript
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void{
    this.productService.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (error) => console.error("Error Fetching Products:", error)      
    })
  }

  deleteProduct(id: number): void{
    if(confirm("Are you sure you want to delete this product?")){
      this.productService.deleteProduct(id).subscribe( ()=> {
        this.getAllProducts();
      });
    }
  }  

}

```

product-fe\src\app\models\Product.ts:
```typescript
export interface Product{
    id: number;
    name: string;
    price: number; 
}
```

product-fe\src\app\services\product.service.spec.ts:
```typescript
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```

product-fe\src\app\services\product.service.ts:
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/Product'
import { environment } from '../../env/env'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private beURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Create Product
  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    const body = {
      productName: product.name,
      productPrice: product.price
    };
    return this.http.post<Product>(this.beURL, body);
  }

  // Get All Products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.beURL).pipe(
      map(data =>
        data.map(item => ({
          id: item.id,
          name: item.productName,
          price: item.productPrice
        }))
      )
    );
  }

  // Get Product by id
  GetProductById(id: number): Observable<Product> {
    return this.http.get<any>(`${this.beURL}/${id}`).pipe(
      map(item => ({
        id: item.id,
        name: item.productName,
        price: item.productPrice
      }))
    );
  }
  

  // Update existing product by id
  updateProduct(id: number, product: Product): Observable<Product> {
    const body = {
      id: product.id,
      productName: product.name,
      productPrice: product.price
    };
    return this.http.put<Product>(`${this.beURL}/${id}`, body);
  }
  // Delete Product by Id
  deleteProduct(id: number): Observable<void>{
    return this.http.delete<void>(`${this.beURL}/${id}`)
  }

}

```

product-fe\src\env\env.ts:
```typescript
export const environment = {
    production: false,
    apiUrl: "https://localhost:7020/api/product"
    // backend url + api/product
  };
  
```

product-fe\src\index.html:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ProductFe</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

product-fe\src\main.ts:
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```


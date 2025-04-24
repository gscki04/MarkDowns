
Done:
1. Project Setup  
```terminal
ng new product-fe --routing --style=scss
```  

2. Create Model Interfaces  
`app` ----> `models`----> `Product.ts`
```typescript
export interface Product{
    id: string;
    name: string;
    price: number; 
}
```  

3. Configure Core Modules  
importing HttpClientModule & ReactiveFormsModule to to the main module  
`app.module.cs`  
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
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
Not Complete:

4. Generate CRUD Service  
`product-fe\src\env\env.ts`  
```typescript
export const environment = {
    production: false,
    apiUrl: "https://localhost:7020/api/product"
    // backend url + api/product
  };
```  
`product-fe\src\app\services\product.service.ts`  
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product'
import { environment } from '../../env/env'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private beURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Create Product
  createProduct(product: Omit<Product, 'id'>): Observable<Product>{
    return this.http.post<Product>(this.beURL, product);
  }

  // Get All Products
  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.beURL);
  }

  // Get Product by id
  GetProductById(id:string): Observable<Product>{
    return this.http.get<Product>(`${this.beURL}/${id}`)
  }

  // Update existing product by id
  updateProduct(id:string, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.beURL}/${id}`, product);
  }

  // Delete Product by Id
  deleteProduct(id: string): Observable<void>{
    return this.http.delete<void>(`${this.beURL}/${id}`)
  }

}
```  
5. Generate Components  
```terminal
ng generate component components/product-list
ng generate component components/product-form
```  
`product-fe\src\app\components\product-form\product-form.component.ts`  
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      price: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit(): void{
    if(this.productForm.valid){
      this.productService.createProduct(this.productForm.value).subscribe( ()=> {
        alert('Product Created Successfully!');
        this.productForm.reset();
      })
    }
  }

}
```  
`product-fe\src\app\components\product-form\product-form.component.html`  
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
        <small *ngIf="productForm.get('price')?.errors?.['required']" >Product is required.</small>
        <small *ngIf="productForm.get('price')?.errors?.['min']" >Min value is 0.01</small>
    </div>

    <button type="submit" [disabled]="productForm.invalid">Add Product</button>
</form>
```  
`product-fe\src\app\components\product-list\product-list.component.spec.ts`  
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

  deleteProduct(id: string): void{
    if(confirm("Are you sure you want to delete this product?")){
      this.productService.deleteProduct(id).subscribe( ()=> {
        this.getAllProducts();
      });
    }
  }

}
```  
`product-fe\src\app\components\product-list\product-list.component.html`  
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
            <td><button (click)="deleteProduct(i.id)">Delete</button></td>
        </tr>
    </tbody>
</table>
```  
6. Set Up Routing  
`product-fe\src\app\app-routing.module.ts`  
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: "products", pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'add-product', component: ProductFormComponent},
  { path: 'edit-product/:id', component: ProductFormComponent },
  {path: '**', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```  
`product-fe\src\app\app.component.html`  
```html
<h3>Product Cruds FrontEnd</h3>
<nav>
    <a routerLink="/products" routerLinkActive="active"></a>
    <a routerLink="/add-product" routerLinkActive="active"></a>
</nav>
<router-outlet></router-outlet>
```  
7. Implement Forms & Validation  
`product-fe\src\app\components\product-form\product-form.component.scss`  
```scss
input.ng-invalid.ng-touched {
    border: 1px solid red;
  }
  
  small {
    color: red;
  }
```  
`product-fe\src\app\components\product-form\product-form.component.ts`  
updated:  
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
  productId: string | null = null;
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
    this.productId = this.route.snapshot.paramMap.get('id');
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
`product-fe\src\app\components\product-list\product-list.component.html`  
updated:  
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
8. Testing the Frontend  
9. Optional: State Management  
10. Optional: HTTP Interceptors
## 1. import & add `HttpClientModule` to main module  
`app.module.ts`  
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { ListRestoComponent } from './list-resto/list-resto.component';

import { HttpClientModule } from '@angular/common/http';  // 🔄: import the httpclientmodule into main module  

@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    LoginComponent,
    ResgisterComponent,
    ListRestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // 🔄: add it to imports array  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```  
## 2. Ideal step is to create interface of object first  
`src\app\models\restaurants.ts`  
```typescript
export interface restaurant {
    id: number;
    name: string;
    address: string;
    email: string;    
}
```  
## 3. creating service to handle APIs.  
```sh
ng g s resto-service
```  
this will create a service file  
`resto-service.service.ts`  
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestoServiceService {

  constructor() { }
}
```  
Add getList method to it  
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 🔄: import http to handle request
import { restaurant } from './models/restaurants'; // 🔄: import interface

@Injectable({
  providedIn: 'root'
})
export class RestoServiceService {

  url = "http://localhost:3000/restaurants"; // 🔄: accessed endpoint 

  constructor(private http: HttpClient){ }   // 🔄: create constuctor & pass a instance of http we created

  // 🔄: add list method here
  getList() {
    return this.http.get<restaurant[]>(this.url);
  }

}
```  
## 4. implement Logic in component file 
`src\app\list-resto\list-resto.component.ts`  
```typescript
import { Component } from '@angular/core';
import { RestoServiceService } from '../resto-service.service'; // 🔄: import service here
import { restaurant } from "../models/Restaurants"  // 🔄: import interface here
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent {

  constructor(private restoSerive: RestoServiceService){ }   // 🔄: create constuctor & pass a instance of service we created

  collection: restaurant[] = []  // 🔄: create a blank object to store result 
  
  // 🔄: access the get method from here
  ngOnInit(): void{
    this.restoSerive.getList().subscribe((result: restaurant[])=>{
      console.log(result)
      this.collection = result;
    });
  }

}
```  

## 5. Apply HTML according to it  
`src\app\list-resto\list-resto.component.html`  
```html
<h2>All Restaurants List</h2>
<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let i of collection">
        <th scope="row">{{i.id}}</th>
        <td>{{i.name}}</td>
        <td>{{i.email}}</td>
        <td>{{i.address}}</td>
      </tr>
    </tbody>
  </table>
```  
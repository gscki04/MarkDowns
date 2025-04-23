## 1. import & add `ReactiveFormModule` to imports array in `app.module.ts`  
`src\app\app.module.ts`  
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

import { HttpClientModule } from '@angular/common/http';  // 🔄: import the Reactive form module  
import { ReactiveFormsModule } from '@angular/forms';

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
    HttpClientModule,   
    ReactiveFormsModule  // 🔄: add it to imports array 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```  

## 2. use bootstrap 4 form to fetch inputs  
`src\app\add-resto\add-resto.component.html`  
```html
<h2>Add new Restaurant</h2>
    <form [formGroup]="addResto" class="col-sm-4" (ngSubmit)="collectResto()" >
        <div class="form-group">
            <label>Restaurant Name</label>
            <input  type="text" class="form-control" name="name" formControlName="name">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input  type="email" class="form-control" name="email" formControlName="email">
        </div>
        <div class="form-group">
            <label>Address</label>
            <input  type="text" class="form-control" name="address" formControlName="address">
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <!-- [formGroup]="addResto": binded this form with addResto from component -->
    <!-- (ngSubmit)="collectResto()": grabs all input values & do function call -->
    <!-- formControlName="" attribute link input with FormControll method -->
```  

## 3. add logic to
`src\app\add-resto\add-resto.component.ts`  
```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; // 🔄: here


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent {

  constructor(){}

  // 🔄: one way binding from here to HTML
  addResto = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    address: new FormControl("")
  })

  ngOnInit(): void{

  }
  // 🔄: accessing form data
  collectResto(){
    console.warn(this.addResto.value)
  }
}
```  
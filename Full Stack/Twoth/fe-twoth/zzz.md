src\app\app-routing.module.ts:
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwothListComponent } from './components/twoth-list/twoth-list.component';
import { TwothFormComponent } from './components/twoth-form/twoth-form.component';

const routes: Routes = [
  { path: "", redirectTo: "twoths-list", pathMatch: 'full' },
  { path: 'twoths-list', component: TwothListComponent },
  { path: 'add-twoth', component: TwothFormComponent },
  { path: 'edit-twoth/:id', component: TwothFormComponent },
  { path: '**', redirectTo: 'twoths-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

src\app\app.component.html:
```html
<h1>Test</h1>
<router-outlet></router-outlet>
```

src\app\app.component.spec.ts:
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

  it(`should have as title 'fe-twoth'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fe-twoth');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('fe-twoth app is running!');
  });
});

```

src\app\app.component.ts:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe-twoth';
}

```

src\app\app.module.ts:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwothListComponent } from './components/twoth-list/twoth-list.component';
import { TwothFormComponent } from './components/twoth-form/twoth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TwothListComponent,
    TwothFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  //   🔄
    HttpClientModule,     //   🔄
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

src\app\components\twoth-form\twoth-form.component.html:
```html
<h2>twoth-form</h2>
<h2>{{ isEditing ? 'Edit' : 'Add' }}</h2>

<form [formGroup]="twothForm" (ngSumbit)="onSubmit()">
    <div>
        <label for="name">Name</label>
        <input 
        formControlName="name"
        id="name"
        type="text"
        placeholder="Enter the name">
        
        <div *ngIf="twothForm.get('name')?.invalid && twothForm.get('name')?.touched">
            <small *ngIf="twothForm.get('name')?.errors?.['required']" >Name is require</small>
            <small *ngIf="twothForm.get('name')?.errors?.['maxlength']" >Name cannot exceed 50 characters</small>
        </div>
        <button type="submit" [disabled]="twothForm.invalid">{{ isEditing ? 'update' : 'add' }} Entry</button>
    </div>
</form>

```

src\app\components\twoth-form\twoth-form.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwothFormComponent } from './twoth-form.component';

describe('TwothFormComponent', () => {
  let component: TwothFormComponent;
  let fixture: ComponentFixture<TwothFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwothFormComponent]
    });
    fixture = TestBed.createComponent(TwothFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

src\app\components\twoth-form\twoth-form.component.ts:
```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TwothModel } from 'src/app/model/TwothModel';
import { TwothService } from 'src/app/services/twoth.service';

@Component({
  selector: 'app-twoth-form',
  templateUrl: './twoth-form.component.html',
  styleUrls: ['./twoth-form.component.scss']
})
export class TwothFormComponent implements OnInit {
  twothForm: FormGroup;
  twothId: number| null = null;
  isEditing: false | boolean = false;

  constructor(
    private fb: FormBuilder,
    private twothService: TwothService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.twothForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isEditing = true;
      this.twothId = +id;
      this.loadTwoth();
    }
  }

  loadTwoth(): void{
    if(this.twothId){
      this.twothService.getTwothById(this.twothId).subscribe({
        next: (twoth) => {
          this.twothForm.patchValue({
            name: twoth.name,
          })
        },
        error: () => {
          this.router.navigate(['/twoths-list']);
        },
      });
    }
  };

  onSubmit(): void{
    if(this.twothForm.invalid) return;

    const twoth: TwothModel = this.twothForm.value;

    if(this.isEditing && this.twothId){
      this.twothService.updateTwoth(this.twothId, twoth).subscribe({
        next: () => this.router.navigate([`/twoths-list`]),
        error: (err) => console.error(err),        
      });
    }else{
      this.twothService.addTwoth(twoth).subscribe({
        next:() => this.router.navigate(['/twoths-list']),
        error: (err) => console.error(err),        
      })
    }
  };

}

```

src\app\components\twoth-list\twoth-list.component.html:
```html
<h2>twoth-list</h2>
<ul>
    <li *ngFor="let twoth of twoths">
        <span>{{ twoth.name }}</span>
        <button (click)="editTwoth(twoth.id)">Edit</button>
        <button (click)="deleteTwoth(twoth.id)">Delete</button>
    </li>
</ul>
<button routerLink="/add-twoth" >Add New Solo</button>
```

src\app\components\twoth-list\twoth-list.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwothListComponent } from './twoth-list.component';

describe('TwothListComponent', () => {
  let component: TwothListComponent;
  let fixture: ComponentFixture<TwothListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwothListComponent]
    });
    fixture = TestBed.createComponent(TwothListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

src\app\components\twoth-list\twoth-list.component.ts:
```typescript
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwothModel } from 'src/app/model/TwothModel';
import { TwothService } from 'src/app/services/twoth.service';

@Component({
  selector: 'app-twoth-list',
  templateUrl: './twoth-list.component.html',
  styleUrls: ['./twoth-list.component.scss']
})
export class TwothListComponent implements OnInit{

  twoths: TwothModel[] = [];

  constructor(
    private twothService: TwothService,
    private router: Router,
    private cdRef: ChangeDetectorRef 
  ){};

  ngOnInit(): void{
    this.loadTwoths();
  };

  loadTwoths(): void{
    console.log('Loading Twoths');
    this.twothService.getTwoths().subscribe({
      next: (twoths) => {
        this.twoths = this.twoths;        
        console.log(`Loaded twoths`, this.twoths);
      },
      error: (err) => {
        console.error("Error loading twoths", err);
        
      },
    });
  };

  deleteTwoth(id: number): void{
    console.log("Deleting twoth with id: ", id);
    if(confirm('Are you sure you want to delete?')){
      this.twothService.deleteTwoth(id).subscribe({
        next: () => {
          console.log('Record deleted, updating the list');
          this.twoths = this.twoths.filter(x => x.id !== id);
          this.cdRef.detectChanges();          
        },
        error: (err) => {
          console.log("Error deleting twoth", err);
        }
      });
    }    
  };

  editTwoth(id: number): void{
    this.router.navigate([`/edit-twoth/${id}`]);
  };

}
```

src\app\model\TwothModel.ts:
```typescript
export interface TwothModel{
    id: number;
    name: string;
}
```

src\app\services\twoth.service.spec.ts:
```typescript
import { TestBed } from '@angular/core/testing';

import { TwothService } from './twoth.service';

describe('TwothService', () => {
  let service: TwothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```

src\app\services\twoth.service.ts:
```typescript
import { Injectable } from '@angular/core';
import { enviroment } from 'src/Enviroment/env';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { TwothModel } from '../model/TwothModel';

@Injectable({
  providedIn: 'root'
})
export class TwothService {

  private BE_URL = enviroment.APIURL;

  constructor(private http: HttpClient) {}

  getTwoths(): Observable<TwothModel[]>{
    return this.http.get<TwothModel[]>(this.BE_URL);
  }

  getTwothById(id: number): Observable<TwothModel>{
    return this.http.get<TwothModel>(`${this.BE_URL}/${id}`);
  }

  addTwoth(twoth: TwothModel): Observable<TwothModel>{
    return this.http.post<TwothModel>(this.BE_URL, twoth);
  }

  updateTwoth(id: number, twoth: TwothModel): Observable<void>{
    return this.http.put<void>(`${this.BE_URL}/${id}`, twoth);
  }

  deleteTwoth(id: number): Observable<void>{
    return this.http.delete<void>(`${this.BE_URL}/${id}`);
  }

}

```

src\Enviroment\env.ts:
```typescript
export const enviroment = {
    production: false,
    APIURL: "https://localhost:7082/api/Twoth"
}
```

src\index.html:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>FeTwoth</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

src\main.ts:
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```


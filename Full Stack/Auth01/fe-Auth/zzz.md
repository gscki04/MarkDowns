src\app\app.component.html:
```html
<h1>Auth Page</h1>
<router-outlet></router-outlet>

```

src\app\app.component.spec.ts:
```typescript
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'fe-Auth' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fe-Auth');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Auth Page');
  });
});

```

src\app\app.component.ts:
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe-Auth';
}

```

src\app\app.config.ts:
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), // 🔄: here
    ReactiveFormsModule
  ]
};

```

src\app\app.routes.ts:
```typescript
import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: '**', redirectTo: 'login' },
];
```

src\app\components\auth\login\login.component.html:
```html
<div class="login-container">
    <h2>Sign In</h2>
    <form (ngSubmit)="onSubmit()" [formGroup]="loginForm">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" formControlName="password" />
      </div>
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>
  </div>
  
```

src\app\components\auth\login\login.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

src\app\components\auth\login\login.component.ts:
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginDto = this.loginForm.value as {
        email: string;
        password: string;
      };

      this.authService.login(loginDto).subscribe(
        () => {
          alert('Login Successful!');
          this.router.navigate(['/']);
        },
        () => {
          alert('Invalid credentials');
        }
      );
    }
  }
}

```

src\app\components\auth\register\register.component.html:
```html
<div class="register-container">
    <h2>Sign Up</h2>
    <form (ngSubmit)="onSubmit()" [formGroup]="registerForm">
      <div>
        <label for="fullName">Full Name</label>
        <input id="fullName" type="text" formControlName="fullName" />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" formControlName="password" />
      </div>
      <button type="submit" [disabled]="registerForm.invalid">Register</button>
    </form>
  </div>
  
```

src\app\components\auth\register\register.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

src\app\components\auth\register\register.component.ts:
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router    
  ) {
    this.registerForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { fullName, email, password } = this.registerForm.value;
  
      this.authService.register({ fullName, email, password }).subscribe(
        () => {
          alert('Registration Successful!');
          this.router.navigate(['/login']);
        },
        () => {
          alert('Registration Failed!');
        }
      );
    }
  };
  

}

```

src\app\core\models\login-dto.ts:
```typescript
export interface LoginDto {
    email: string;
    password: string;
  }
  
```

src\app\core\models\registration-dto.ts:
```typescript
export interface RegisterDto {
    fullName: string;
    email: string;
    password: string;
  }
  
```

src\app\core\services\auth.service.spec.ts:
```typescript
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

```

src\app\core\services\auth.service.ts:
```typescript
import { Injectable } from '@angular/core';
import { environment } from '../../../env/env';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../models/registration-dto';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/login-dto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(dto: LoginDto): Observable<any> {
    console.log('Attempting login with DTO:', dto);
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, dto).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        console.log('Login successful. Token stored:', response.token);
      })
    );
  }

  register(dto: RegisterDto): Observable<any> {
    console.log('Attempting registration with DTO:', dto);
    return this.http.post<{ token: string }>(`${this.baseUrl}/register`, dto).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        console.log('Registration successful. Token stored:', response.token);
      })
    );
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log('Retrieved token:', token);
    return token;
  }

  logout(): void {
    localStorage.removeItem('token');
    console.log('User logged out. Token removed.');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const isAuth = !!token;
    console.log('User isAuthenticated check:', isAuth);
    return isAuth;
  }
}

```

src\env\env.ts:
```typescript
export const environment = {
    production: false,
    apiBaseUrl: 'https://localhost:7074/api/auth'
  };
```

src\index.html:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>FeAuth</title>
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
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

```


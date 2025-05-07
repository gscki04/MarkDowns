`fe-Auth\src\app\components\auth\login\login.component.ts`:  
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
          this.router.navigate(['/dashboard']);
        },
        () => {
          alert('Invalid credentials');
        }
      );
    }
  }
}
```  
`fe-Auth\src\app\components\auth\login\login.component.html`:  
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
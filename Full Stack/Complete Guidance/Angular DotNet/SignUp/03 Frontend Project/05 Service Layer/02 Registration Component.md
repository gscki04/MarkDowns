`fe-Auth\src\app\components\auth\register\register.component.ts`:  
```typescript
import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() switchToLogin = new EventEmitter<void>();
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
          this.switchToLogin.emit();
        },
        () => {
          alert('Registration Failed!');
        }
      );
    }
  };

}
```  
`fe-Auth\src\app\components\auth\register\register.component.html`:  
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
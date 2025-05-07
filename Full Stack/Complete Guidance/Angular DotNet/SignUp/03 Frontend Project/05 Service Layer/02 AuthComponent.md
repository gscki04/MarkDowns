`fe-auth\src\app\components\auth\auth.component.ts`:  
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  isLogin = true;

  toggleForm(){
    this.isLogin = !this.isLogin;
  }

  onSwitchToLogin() {
    this.isLogin = true;
  }

}
```  
`fe-auth\src\app\components\auth\auth.component.html`:  
```html
<div class="auth-wrapper" >
    <h1>{{ isLogin ? 'Sing In' : 'Sign Up' }}</h1>

    <ng-container *ngIf="isLogin; else registerTemplate">
        <app-login></app-login>
    </ng-container>

    <ng-template #registerTemplate>
        <app-register (switchToLogin)="onSwitchToLogin()"></app-register>
    </ng-template>

    <button (click)="toggleForm()" class="toggle-btn">
        {{ isLogin ? 'Need an acoount? Register' : 'Already have an account? Login' }}
    </button>

</div>
```  

`fe-auth\src\app\components\auth\auth.component.scss`:  
```scss
.auth-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 1rem;
  }

  .toggle-btn {
    margin-top: 1.5rem;
    background: none;
    color: blue;
    border: none;
    cursor: pointer;
    text-decoration: underline;
  }
}
```  
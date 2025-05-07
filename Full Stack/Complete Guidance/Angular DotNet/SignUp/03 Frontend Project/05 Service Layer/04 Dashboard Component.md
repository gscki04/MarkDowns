`src\app\components\dashboard\dashboard.component.ts`:  
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  fullName: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.fullName = this.authService.getUserFullName();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
```  
`src\app\components\dashboard\dashboard.component.html`:  
```html
<div class="dashboard-container">
    <h2>Welcome, {{ fullName }}</h2>
    <button (click)="logout()">Logout</button>
</div>
```  
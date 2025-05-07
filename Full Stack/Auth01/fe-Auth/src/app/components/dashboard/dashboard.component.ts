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
    console.log('Dashboard fullName:', this.fullName);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

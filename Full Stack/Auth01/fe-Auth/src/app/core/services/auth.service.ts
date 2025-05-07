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
    return this.http.post<{ token: string, fullName: string }>(`${this.baseUrl}/login`, dto).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('fullName', response.fullName); 
        console.log('Username:', response.fullName);
        console.log('Login successful. Token stored:', response.token);
      })
    );
  }

  register(dto: RegisterDto): Observable<any> {
    console.log('Attempting registration with DTO:', dto);
    return this.http.post<{ token: string, fullName: string }>(`${this.baseUrl}/register`, dto).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('fullName', response.fullName); 
        console.log('Username:', response.fullName);
        console.log('Registration successful. Token stored:', response.token);
      })
    );
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log('Retrieved token:', token);
    return token;
  }

  getUserFullName(): string | null {
    return localStorage.getItem('fullName');
  }
  

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName'); 
    console.log('User logged out. Token removed.');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const isAuth = !!token;
    console.log('User isAuthenticated check:', isAuth);
    return isAuth;
  }
}

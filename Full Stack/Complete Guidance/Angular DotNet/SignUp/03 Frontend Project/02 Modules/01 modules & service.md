## 1. create components & service via CLI  
```sh
ng generate component components/auth/register
ng generate component components/auth/login
ng generate component components/dashboard
ng generate component components/Auth
ng generate service core/services/auth
```  

## 2. create 2 interfaces  
`src/app/core/models/LoginDto.ts`  
```typescript
export interface LoginDto {
    email: string;
    password: string;
  }
```  
`src/app/core/models/RegisterDto.ts`  
```typescript
export interface RegisterDto {
    fullName: string;
    email: string;
    password: string;
  }
```  
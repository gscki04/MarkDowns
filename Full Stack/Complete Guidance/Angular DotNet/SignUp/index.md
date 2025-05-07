# 1. Setup Backend & Connect to Database

 ## 1.a: Create backend project (if not already created)
 ## 1.b: Add dependencies for authentication
   Microsoft.AspNetCore.Authentication.JwtBearer
   Microsoft.AspNetCore.Identity.EntityFrameworkCore
   Microsoft.EntityFrameworkCore.SqlServer
   Microsoft.EntityFrameworkCore.Tools
   Microsoft.AspNetCore.Identity

 ## 1.c: Configure connection string in `appsettings.json`
 ## 1.d: Enable CORS

---

# 2. Implement Authentication Backend

- ## 2.a: Reflect Model to Database  
    - ### 2.a.1: Model creation  
    - ### 2.a.2: Define Database context  
    - ### 2.a.3: AddDbContext to main program file  
    - ### 2.a.4: Migration  

 ## 2.b: Add Authentication Logic
   ### 2.b.1: AddIdentity Method    
   ### 2.b.2: Add JWT   
   ### 2.b.3: Generate JWT token   
   ### 2.b.4: Create AuthController   
   ### 2.b.5: migrate, update & test on swagger/postman   

---

# 3. Setup Frontend (Angular)

 ## 3.a: Create frontend project  
   ### 3.a.1: Install Angular JWT dependency: `npm install @auth0/angular-jwt`
   ### 3.a.2: Add Bootstrap (if not already): `npm install bootstrap` and configure in `angular.json`

 ## 3.b: Structure the project

   ### 3.b.1: Create `auth.service.ts`
   ### 3.b.2: Create `signup` and `signin` components
   ### 3.b.3: Create `user.model.ts`

 ## 3.c: Setup Routing

   ### 3.c.1: Add routes for `signup` and `signin`
   ### 3.c.2: Add route guards (optional - for protected areas)

 ## 3.d: Implement Service Layer

   ### 3.d.1: Add base API URL to `environment.ts`
   ### 3.d.2: Implement `register` and `login` methods in `auth.service.ts`
   ### 3.d.3: Store JWT token in `localStorage`
   ### 3.d.4: Implement auto-login, token expiration, and logout logic

 ## 3.e: Apply Component Logic

   ### 3.e.1: Implement `signup.component.ts` logic and form
   ### 3.e.2: Implement `signin.component.ts` logic and form
   ### 3.e.3: Show success/error messages
   ### 3.e.4: Redirect to dashboard/home on successful login

 ## 3.f: Protect Routes (Optional)

   ### 3.f.1: Create `auth.guard.ts`
   ### 3.f.2: Protect routes using `canActivate`

---
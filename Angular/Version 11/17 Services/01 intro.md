**Services** are **central to Angular's architecture**, especially for **code sharing**, **business logic**, and **data communication (like APIs)**. no UI but pure logic.  

---

## 🧠 What is a Service?

> A **Service** in Angular is a class with a specific purpose: to **encapsulate logic**, **data**, or **functionality** that you want to **reuse across components**.

They are **not tied to any UI** like components — pure logic!

---

## 🧪 Real-World Examples of What Services Do:

- Fetch data from an API (via `HttpClient`)
- Share data between components
- Encapsulate business logic
- Manage state (small-scale)
- Logging, authentication, etc.

---

## 🔧 How to Create a Service

```sh
ng generate service service-name
# or shorthand
ng g s service-name
```

It generates 2 files:

- `my-service.service.ts` ✅
- `my-service.service.spec.ts` (test file)

---

## ✅ Example: Simple Logging Service

### Step 1: Create the service

```sh
ng g s logger
```

This creates `logger.service.ts`.

### Step 2: Add logic

```ts
// src/app/logger.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // auto-registers in root module
})
export class LoggerService {

  log(message: string) {
    console.log('Log:', message);
  }

}
```

### Step 3: Use in any component

```ts
// src/app/app.component.ts
import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('AppComponent Loaded!');
  }
}
```

---

## 📦 Injectable Scope Options

When you generate a service, it’s:

```ts
@Injectable({ providedIn: 'root' })
```

Which means:
- It’s available **globally** across the app.
- Angular handles the lifecycle for you.

You can also provide it manually in a specific module/component if needed.

---

## 💬 Summary

| Feature | Explanation |
|--------|-------------|
| Purpose | Share logic/data across app |
| CLI | `ng g s service-name` |
| Registered | Automatically via `providedIn: 'root'` |
| Use | Inject in constructor |
| Common Uses | API calls, data sharing, business logic |

---
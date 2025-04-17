Here's a comprehensive list of **Angular CLI commands** (as of Angular 17), categorized for easier reference:

---

### 📦 **Installation & Setup**

```bash
npm install -g @angular/cli         # Install Angular CLI globally
npm uninstall -g @angular/cli       # Uninstall Angular CLI globally
npm install -g @angular/cli@12      # Install angular with specific version: here 12
ng new my-app                       # Create a new Angular application
cd my-app                           # Navigate into the app directory
ng serve                            # Start the development server (localhost:4200)
```

---

### 🚀 **Serve & Build**

```bash
ng serve                            # Serve app with live-reload
ng serve --port 4300                # Serve on a specific port
ng build                            # Build app for production (dist/ folder)
ng build --watch                    # Watch and rebuild on changes
ng build --configuration=production # Build with production optimizations
```

---

### 🧱 **Generate (Scaffold Code)**

```bash
ng generate component my-comp       # Generate a component
ng g c my-comp                      # Shortcut for component
ng generate module my-module        # Generate a module
ng g m my-module                    # Shortcut for module
ng generate service my-service      # Generate a service
ng g s my-service                   # Shortcut for service
ng generate directive my-directive  # Generate a directive
ng generate pipe my-pipe            # Generate a pipe
ng generate class my-class          # Generate a class
ng generate guard my-guard          # Generate a route guard
ng generate interface my-interface  # Generate an interface
ng generate enum my-enum            # Generate an enum
```

---

### 🧪 **Testing**

```bash
ng test                             # Run unit tests
ng test --code-coverage             # Generate code coverage report
ng e2e                              # Run end-to-end tests
```

---

### 📁 **Linting & Formatting**

```bash
ng lint                             # Lint the entire project
```

---

### 📦 **Add Features/Dependencies**

```bash
ng add @angular/material            # Add Angular Material
ng add @nguniversal/express-engine # Add SSR (Server-Side Rendering)
ng add @angular/pwa                 # Add PWA support
```

---

### 🗺️ **Routing & Modules**

```bash
ng g module my-module --routing     # Generate a module with routing
ng g c my-comp --module=app         # Add a component to a specific module
```

---

### 📄 **Environment & Config**

```bash
ng config                           # View or change configuration
ng config cli.defaultCollection @angular/material
ng analytics off                    # Disable Angular CLI analytics
```

---

### 🧰 **Advanced/Utilities**

```bash
ng update                           # Update Angular and dependencies
ng version                          # Show current Angular/CLI version
ng help                             # Show help for Angular CLI
ng doc <keyword>                    # Open Angular documentation
```

---

### 📦 **Deploy**

```bash
ng deploy                           # Deploy your app (e.g., via Firebase Hosting)
```

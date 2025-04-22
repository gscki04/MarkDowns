### 🔥 What is Hot Module Replacement (HMR) in Angular?

**Hot Module Replacement (HMR)** is a powerful feature used during development that **updates modules in the browser at runtime without a full page reload**.  

It keeps the **application state** (like form inputs, scroll positions, etc.) **intact**, while injecting updated code.

---

### ✅ Benefits of HMR

| Feature                | Description                                                  |
|------------------------|--------------------------------------------------------------|
| ⚡ **Faster Development** | No full reload → faster feedback loop                       |
| 🔄 **Preserves State**     | Keeps your app’s current state (e.g. form values)           |
| 💻 **Better DX**          | Developer Experience improves significantly                 |

---

### 🔧 How to Enable HMR in Angular

1. **Add HMR support**:
```bash
ng add @angular-devkit/build-angular
```

2. **Enable HMR in `angular.json`**:
Find your project config under `architect > serve > options`, and set:
```json
"hmr": true
```

3. **Run with HMR**:
```bash
ng serve --hmr
```

---

### 📌 Without HMR:
- Every change reloads the whole app
- You lose state, scroll, inputs, etc.

### 📌 With HMR:
- Only changed parts are replaced
- State stays intact unless changed in code

---

### 💡 Example Use Case:
You’re designing a multi-step form and want to tweak styles or logic in one step. With HMR:
- You change the code
- It updates instantly in the browser
- The form doesn't reset — you stay on the same step

---

Latest Angular application (Angular 11 & above) do not need to add HMR explicitly.  


### 🔧 How to use HMR in Angular project

You just need to run this command:

```bash
ng serve --hmr
```

> 🧠 This will automatically activate HMR in dev mode.

---

### ✅ Optional: Add a script for easier use

You can simplify it by adding this to your `package.json` scripts section:

```json
"start:hmr": "ng serve --hmr"
```

Then just run:

```bash
npm run start:hmr
```
**Module routing** means defining routes **inside a feature module**, rather than in the main `AppRoutingModule`.

This allows each module (like `UserModule`, `AdminModule`, etc.) to **handle its own routes**. It helps organize large applications and enables **lazy loading** (loading a module only when needed).

---

## Why Use Module Routing?

- ✅ Clean separation of concerns
- ✅ Scales better in large apps
- ✅ Enables **lazy loading** for performance
- ✅ Easier to maintain and read

---

syntax:  
```sh
ng g m module-name --routing
```  
without `--routing` flag, we need to create routing file for module exlicitly  

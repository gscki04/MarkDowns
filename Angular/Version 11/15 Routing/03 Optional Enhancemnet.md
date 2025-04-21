## Optional Enhancements:

### 1. **Default route (optional)**  
You might want to add a default path (like redirecting `/` to `/user`):

```ts
{ path: '', redirectTo: 'user', pathMatch: 'full' }
```

### 2. **Navigation highlight (UX improvement)**  
For active links, you can enhance it with:

```html
<a routerLink="admin" routerLinkActive="active">Admin Page</a>
```

And in your CSS:

```css
.active {
  font-weight: bold;
  color: blue;
}
```

### 3. **Lazy Loading (future-ready tip)**  
In larger apps, you can split features into modules and load them only when needed:

```ts
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
```

Not needed for small apps but worth knowing.

---
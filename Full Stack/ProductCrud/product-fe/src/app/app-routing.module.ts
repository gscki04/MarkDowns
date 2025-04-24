import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: "products", pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'add-product', component: ProductFormComponent},
  { path: 'edit-product/:id', component: ProductFormComponent }, // 🔄: here
  {path: '**', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

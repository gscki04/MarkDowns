import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdListComponent } from './components/third-list/third-list.component';
import { ThirdFormComponent } from './components/third-form/third-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'third-list', pathMatch: 'full' },
  { path: 'third-list', component: ThirdListComponent },
  { path: 'add-third', component: ThirdFormComponent },
  { path: 'edit-third/:id', component: ThirdFormComponent },
  { path: '**', redirectTo: 'third-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

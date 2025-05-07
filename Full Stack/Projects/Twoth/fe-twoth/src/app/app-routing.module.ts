import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwothListComponent } from './components/twoth-list/twoth-list.component';
import { TwothFormComponent } from './components/twoth-form/twoth-form.component';

const routes: Routes = [
  { path: "", redirectTo: "twoths-list", pathMatch: 'full' },
  { path: 'twoths-list', component: TwothListComponent },
  { path: 'add-twoth', component: TwothFormComponent },
  { path: 'edit-twoth/:id', component: TwothFormComponent },
  { path: '**', redirectTo: 'twoths-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

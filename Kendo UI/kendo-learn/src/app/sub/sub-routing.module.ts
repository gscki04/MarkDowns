import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DateInputComponent } from './date-input/date-input.component';
import { BarcodeComponent } from './barcode/barcode.component';


const routes: Routes = [
  { path: 'dateinput', component: DateInputComponent },
  { path: 'grid', component: GridComponent },
  { path: 'barcode', component: BarcodeComponent },
  { path: 'buttons', component: ButtonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRoutingModule { }
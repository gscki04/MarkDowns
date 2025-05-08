import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DateInputComponent } from './date-input/date-input.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { ChartWizComponent } from './chart-wiz/chart-wiz.component';
import { ChartComponent } from './chart/chart.component';
import { EditorComponent } from './editor/editor.component';
import { DialogComponent } from './dialog/dialog.component';


const routes: Routes = [
  { path: 'dateinput', component: DateInputComponent },
  { path: 'grid', component: GridComponent },
  { path: 'barcode', component: BarcodeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'chartwiz', component: ChartWizComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'dialog', component: DialogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRoutingModule { }
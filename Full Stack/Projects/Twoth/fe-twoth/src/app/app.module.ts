import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwothListComponent } from './components/twoth-list/twoth-list.component';
import { TwothFormComponent } from './components/twoth-form/twoth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TwothListComponent,
    TwothFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  //   🔄
    HttpClientModule,     //   🔄
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

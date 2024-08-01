import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayFormComponent } from './form-array-form/form-array-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynmicFormComponent } from './dynmic-form/dynmic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormArrayFormComponent,
    DynmicFormComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

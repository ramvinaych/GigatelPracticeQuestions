import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayFormComponent } from './form-array-form/form-array-form.component';

const routes: Routes = [
  {
    path:"",component:FormArrayFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

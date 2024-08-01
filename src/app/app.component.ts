import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormArray';
  selectedForm:string='';

  formConfigs = {
    formA: [
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'email', label: 'Email', type: 'email' }
    ],
    formB: [
      { key: 'age', label: 'Age', type: 'number' },
      { key: 'address', label: 'Address', type: 'text' }
    ],
    formC: [
      { key: 'hobbies', label: 'Hobbies', type: 'array' }
    ]
  };

  // get selectedFormConfig() {
  //   return this.formConfigs[this.selectedForm];
  // }
}

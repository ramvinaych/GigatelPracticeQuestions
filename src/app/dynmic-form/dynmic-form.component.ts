import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynmic-form',
  templateUrl: './dynmic-form.component.html',
  styleUrls: ['./dynmic-form.component.css']
})
export class DynmicFormComponent {
  @Input() formConfig: any[] = []; // Receive form configuration from parent
  dynamicForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const group = this.fb.group({});
    this.formConfig.forEach(field => {
      if (field.type === 'array') {
        group.addControl(field.key, this.fb.array([]));
      } else {
        group.addControl(field.key, this.fb.control(''));
      }
    });
    this.dynamicForm = group;
  }

  get formArray(): FormArray {
    return this.dynamicForm.get('arrayField') as FormArray;
  }

  addFormControl(field: any) {
    const control = this.fb.control('');
    this.formArray.push(control);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}

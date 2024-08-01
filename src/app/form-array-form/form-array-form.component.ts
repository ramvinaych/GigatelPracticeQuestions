import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-form',
  templateUrl: './form-array-form.component.html',
  styleUrls: ['./form-array-form.component.css']
})
export class FormArrayFormComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      // Example with a FormArray containing FormControl items
      items: this.fb.array([
        this.fb.control('', Validators.required),
        this.fb.control('')
      ])
    });
  }

  // Convenience getter for easy access to form array
  get itemsFormArray() {
    return this.myForm.get('items') as FormArray;
  }

  // Method to add a new item to the FormArray
  addItem() {
    this.itemsFormArray.push(this.fb.control(''));
  }

  // Method to remove an item from the FormArray
  removeItem(index: number) {
    this.itemsFormArray.removeAt(index);
  }
  onSubmit(){
   console.log(this.myForm.value) 
  }
}

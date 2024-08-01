import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynmicFormComponent } from './dynmic-form.component';

describe('DynmicFormComponent', () => {
  let component: DynmicFormComponent;
  let fixture: ComponentFixture<DynmicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynmicFormComponent]
    });
    fixture = TestBed.createComponent(DynmicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

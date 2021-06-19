import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: []
})
export class CheckBoxComponent {
  @Input() field:any = {};
  @Input()  form!: FormGroup;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
}

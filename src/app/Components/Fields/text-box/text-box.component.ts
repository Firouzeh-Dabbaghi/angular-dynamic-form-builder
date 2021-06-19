import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent {
    @Input() field:any = {};
    @Input() form!:FormControl;
    get isValid() { return this.form.valid; }
    get isDirty() { return this.form.dirty; }
  
    constructor() {

    }
}

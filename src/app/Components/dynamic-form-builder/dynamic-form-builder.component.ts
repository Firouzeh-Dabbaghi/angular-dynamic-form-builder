import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  @Input() formGroup!: FormGroup;
  @Output() getItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    let fieldsCtrls :{[index: string]:any} = {}
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
      } else {
        let opts:{[index: string]:any} = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    console.log('this.formGroup',this.formGroup?.value)

  }
  /**برگرداندن اطلاعات فیلدها */
  onSaveFields(){
    this.getItem.emit(this.formGroup?.value);
  }
}

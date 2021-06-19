import { Component, Input, OnInit } from '@angular/core';
import { KeepFormDataService } from 'src/app/Services/keep-form-data.service';
import { CreateFieldsFormComponent } from '../create-fields-form/create-fields-form.component';
import { Fields } from '../Fields/fields';

@Component({
  selector: 'app-frm-dynamic',
  templateUrl: './frm-dynamic.component.html',
  styleUrls: ['./frm-dynamic.component.css']
})
export class FrmDynamicComponent extends CreateFieldsFormComponent implements OnInit {
  @Input()  tmpfields!: Fields[];
  constructor(
    public KeepFormDataService: KeepFormDataService
  ) {
    
    super(KeepFormDataService);
    
  }
  ngOnInit() {
    super.fields = this.tmpfields;
    super.generateFieldsForm();
  }
}
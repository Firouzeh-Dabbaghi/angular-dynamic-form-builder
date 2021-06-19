import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { KeepFormDataService } from 'src/app/Services/keep-form-data.service';
import { Fields } from '../Fields/fields';

@Component({
  selector: 'app-create-fields-form',
  templateUrl: './create-fields-form.component.html',
  styleUrls: ['./create-fields-form.component.css']
})
export class CreateFieldsFormComponent implements OnInit  , OnDestroy {
  unsubcribe: any
  subscription: Subscription[] = [];
  @Output() getItem = new EventEmitter<any>();

  public form!: FormGroup;
  public fields: Fields[] = [
    {
      name: 'name',
      label: 'عنوان فیلد',
      required: true,
      order: 1,
      type: 'text',
      description: '',
      options: []
    },
    {
      name: 'label',
      label: 'عنوان نمایشی',
      required: true,
      order: 2,
      type: 'text',
      description: '',
      options: []
    },
    {
      name: 'type',
      label: 'نوع فیلد',
      required: true,
      order: 3,
      type: 'dropdown',
      description: '',
      options: [
        { key: 'text', value: 'عدد' },
        { key: 'text', value: 'رشته' },
        { key: 'text', value: 'توضیحات متنی و html' },
        { key: 'date', value: 'تاریخ' },
        { key: 'date', value: 'بازه تاریخی' },
        { key: 'dropdown', value: 'انتخاب از لیست' },
        { key: 'file', value: 'انتخاب فایل' },
        { key: 'radio', value: 'رادیویی' },
        { key: 'checkbox', value: 'چک باکس' }
      ]
    },
    {
      name: 'description',
      label: 'توضیحات فیلد',
      required: true,
      order: 4,
      type: 'text',
      description: '',
      options: []
    },
    {
      name: 'required',
      label: 'وضعیت ',
      required: true,
      order: 5,
      type: 'radio',
      description: '',
      options: [
        { key: '1', value: 'اجباری' },
        { key: '2', value: 'اختیاری' }
      ]
    }
  ];


  labelFields: string[] = [];
  constructor(
    public KeepFormDataService: KeepFormDataService
  ) {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      this.fields = JSON.parse(update.fields);
    });
  }
  ngOnDestroy(): void {
    this.getItem.emit( this.KeepFormDataService.fields);
  }

  ngOnInit(): void {
    this.generateFieldsForm();
  }

   generateFieldsForm() {
    this.form = new FormGroup({});
    this.fields.forEach(x => {
      if (x.type == 'checkbox') {
        this.form.addControl(x.name, new FormGroup({}));
        x.options.forEach((o: { key: string; }) => {
          (this.form.get(x.name) as FormGroup).addControl(o.key, new FormControl(false));
        });
      }
      else {
        this.form.addControl(x.name,
          new FormControl(x.name || '', x.required ? Validators.required : null));
      }
    });
  }

  getFields() {
    return this.fields;
  }

  pushCurrentFieldToFormDataServise(items: any) {
    this.KeepFormDataService.fields.push(items);
    this.labelFields.push(this.form?.value.label);
    
  }

  arrangeFields() {
    let arrangeList: any[] = []
    this.labelFields.forEach(l => {
      let field = this.KeepFormDataService.fields.filter((k: Fields) => k.label == l)[0];
      arrangeList.push(field);
    });
    this.KeepFormDataService.fields = arrangeList;
  }
}

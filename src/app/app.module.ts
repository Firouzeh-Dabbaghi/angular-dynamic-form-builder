import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckBoxComponent } from './Components/Fields/check-box/check-box.component';
import { DropDownComponent } from './Components/Fields/drop-down/drop-down.component';
import { FileComponent } from './Components/Fields/file/file.component';
import { RadioComponent } from './Components/Fields/radio/radio.component';
import { TextBoxComponent } from './Components/Fields/text-box/text-box.component';
import { FieldBuilderComponent } from './Components/field-builder/field-builder.component';
import { DynamicFormBuilderComponent } from './Components/dynamic-form-builder/dynamic-form-builder.component';
import { CreateFieldsFormComponent } from './Components/create-fields-form/create-fields-form.component';
import { FrmDynamicComponent } from './Components/frm-dynamic/frm-dynamic.component';
import { PresentationComponent } from './Components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    DropDownComponent,
    FileComponent,
    RadioComponent,
    TextBoxComponent,
    FieldBuilderComponent,
    DynamicFormBuilderComponent,
    CreateFieldsFormComponent,
    FrmDynamicComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

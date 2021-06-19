import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckBoxComponent } from './Components/Fields/check-box/check-box.component';
import { DropDownComponent } from './Components/Fields/drop-down/drop-down.component';
import { FileComponent } from './Components/Fields/file/file.component';
import { RadioComponent } from './Components/Fields/radio/radio.component';
import { TextBoxComponent } from './Components/Fields/text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    DropDownComponent,
    FileComponent,
    RadioComponent,
    TextBoxComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

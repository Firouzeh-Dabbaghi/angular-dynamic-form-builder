import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeepFormDataService {
  ObserFormData = new Subject<any>();
  fields: any[] = []

  constructor() { }

  updataDataDynamicForm() {
    this.ObserFormData.next(this.fields);
  }
}

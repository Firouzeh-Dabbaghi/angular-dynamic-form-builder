import { Component, OnInit } from '@angular/core';
import { Fields } from '../Fields/fields';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  tab=1;
  getfields: Fields[]=[];
}

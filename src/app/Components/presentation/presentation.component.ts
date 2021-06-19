import { Component, OnInit } from '@angular/core';
import { Fields } from '../Fields/fields';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  tab=1;
  getfields: Fields[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}

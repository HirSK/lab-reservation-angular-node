import { Component, OnInit,  Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Output() dateSelected: EventEmitter<any> = new EventEmitter<any>();
  model;
  constructor() { }

  ngOnInit() {
  }
  onChange() {
    this.dateSelected.emit( this.model );
  }

}

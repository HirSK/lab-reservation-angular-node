import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-reservation-form',
  templateUrl: './new-reservation-form.component.html',
  styleUrls: ['./new-reservation-form.component.css']
})
export class NewReservationFormComponent implements OnInit {

  dateSelected: any;
  startTimeSelected: any;
  endTimeSelected: any;
  constructor() { }

  ngOnInit() {
  }

  OnDateSelected( dateSelected: any ) {
    console.log(dateSelected);
    this.dateSelected = dateSelected;
  }

  OnStartTimeSelected(startTimeSelected: any) {
    console.log(startTimeSelected);
    this.startTimeSelected = startTimeSelected;
  }

  OnEndTimeSelected(endTimeSelected: any) {
    console.log(endTimeSelected);
    this.endTimeSelected = endTimeSelected;
  }

}

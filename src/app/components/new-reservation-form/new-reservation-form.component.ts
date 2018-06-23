import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/ReservationService';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reservation-form',
  templateUrl: './new-reservation-form.component.html',
  styleUrls: ['./new-reservation-form.component.css']
})
export class NewReservationFormComponent implements OnInit {

  regNo: String;
  applier: String;
  reservePurpose: String;
  dateSelected: any;
  startTimeSelected: any;
  endTimeSelected: any;

  constructor(
    private reservationService: ReservationService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  OnDateSelected( dateSelected: any ) {
    // console.log(dateSelected);
    this.dateSelected = dateSelected;
  }

  OnStartTimeSelected(startTimeSelected: any) {
    // console.log(startTimeSelected);
    this.startTimeSelected = startTimeSelected;
  }

  OnEndTimeSelected(endTimeSelected: any) {
    // console.log(endTimeSelected);
    this.endTimeSelected = endTimeSelected;
  }

  onNewReservationSubmit() {

    if (!this.reservationService.validateDate(this.dateSelected)) {
        this.flashMessage.show('Please fill the date', {cssClass: 'alert-danger' , timeout: 3000});
        return false;
    }
    if (!this.reservationService.validateTime(this.startTimeSelected, this.endTimeSelected)) {
      this.flashMessage.show('Please select start and end time', {cssClass: 'alert-danger' , timeout: 3000});
      return false;
    }
    if (!this.reservationService.validateOtherDetails(this.regNo, this.applier, this.reservePurpose)) {
      this.flashMessage.show('Please fill the required fields', {cssClass: 'alert-danger' , timeout: 3000});
      return false;
    }
    const reservation = {
      regNo: this.regNo,
      applier: this.applier,
      reservePurpose: this.reservePurpose,
      reserveDate: this.dateSelected.year + '-' + this.dateSelected.month + '-' + this.dateSelected.day,
      startHour: this.startTimeSelected.hour,
      startMinute: this.startTimeSelected.minute,
      endHour: this.startTimeSelected.hour,
      endMinute: this.startTimeSelected.minute,

    };
     console.log(reservation);

    this.reservationService.addNewReservation(reservation).subscribe(
      data => {
        if (data.success) {
          this.flashMessage.show('Your reservation submitted.Approval is pending..', {cssClass: 'alert-success' , timeout: 3000});
          this.router.navigate(['/']);
        } else {
          this.flashMessage.show('Failed to submit your reservation', {cssClass: 'alert-danger' , timeout: 3000});
        }
       }
    );
  }



}

import { Component, OnInit , Input} from '@angular/core';
import { ReservationService } from '../services/ReservationService';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reservation-form',
  templateUrl: './new-reservation-form.component.html',
  styleUrls: ['./new-reservation-form.component.css']
})
export class NewReservationFormComponent implements OnInit {
  @Input() labCode: string ;
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

  refresh() {
      this.router.navigate(['/']);
      this.ngOnInit();
  }

  ngOnInit() {
    // console.log(this.labCode);
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
      labCode: this.labCode,
      regNo: this.regNo,
      applier: this.applier,
      reservePurpose: this.reservePurpose,
      reserveDate: this.dateSelected.year + '-' + this.dateSelected.month + '-' + this.dateSelected.day,
      startHour: this.startTimeSelected.hour,
      startMinute: this.startTimeSelected.minute,
      endHour: this.endTimeSelected.hour,
      endMinute: this.endTimeSelected.minute
    };
    // console.log(reservation);

    const result = this.reservationService.validateAvailability(reservation).subscribe();
    // console.log(result);
    if (result == null) {
      console.log('null mattoo');
    }

    this.reservationService.validateAvailability(reservation).subscribe(
      data => {
        if (data.success) {
            this.reservationService.addNewReservation(reservation).subscribe(
              submitdata => {
                if (submitdata.success) {
                  this.flashMessage.show('Your reservation submitted.Approval is pending..', {cssClass: 'alert-success' , timeout: 3000});
                  this.refresh();
                } else {
                  this.flashMessage.show('Failed to submit your reservation', {cssClass: 'alert-danger' , timeout: 3000});
                  this.refresh();
                }
              }
          );
            // return true;
          } else {
            this.flashMessage.show('Cannot reserve the time slot.Try another time period', {cssClass: 'alert-danger' , timeout: 3000});
            return false;
          }
       }
    );



  }



}

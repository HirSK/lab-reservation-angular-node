import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/ReservationService';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  pendingReservations: ReservationService[] = [];

  constructor(
    private reservationService: ReservationService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  refresh() {
    this.router.navigate(['/admin']);
    this.ngOnInit();   }


  ngOnInit() {
    this.reservationService.getAllRequests().subscribe(
      reservations => {
        console.log(reservations);
        this.pendingReservations = reservations;
      },
      err => {
        console.log(err);
      }
    );
  }

  // UPDATE THE APPROVAL TO TRUE
  approveRequest(pending) {
    const id = {
      id: pending._id
    };
    this.reservationService.approveRequest(id).subscribe(
      data => {
        if (data.success) {
          this.flashMessage.show('The request was approved successfully', {cssClass: 'alert-success' , timeout: 3000});
          this.refresh();
        } else {
          this.flashMessage.show('Failed to approve the request', {cssClass: 'alert-danger' , timeout: 3000});
        }
       }
    );
  }

  // UPDATE THE APPROVAL TO FALSE
  rejectRequest(pending) {
    const id = {
      id: pending._id
    };
    this.reservationService.rejectRequest(id).subscribe(
      data => {
        if (data.success) {
          this.flashMessage.show('You cancelled the approval.', {cssClass: 'alert-success' , timeout: 3000});
          this.refresh();
        } else {
          this.flashMessage.show('Failed to cancel the approval', {cssClass: 'alert-danger' , timeout: 3000});
        }
       }
    );
  }

}

import { Component , OnInit} from '@angular/core';
import { LabService } from '../services/LabService';
import {MatDialog} from '@angular/material';
import { NewReservationDialogComponent } from '../new-reservation-dialog/new-reservation-dialog.component';
import { ReservationService} from '../services/ReservationService';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  labs: LabService[] = [];
  searchedReservations: ReservationService[] = [];
  selectedLab: LabService;
  dateSelected: any;
  dialogResult = '';

  constructor(
    private labService: LabService,
    public dialog: MatDialog,
    private reservationService: ReservationService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.labService.getLabs().subscribe(
      labs => {
        console.log(labs);
        this.labs = labs;
      },
      err => {
        console.log(err);
      }
    );
  }

  onSelect(lab: LabService): void {
    this.selectedLab = lab;
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(NewReservationDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.dialogResult = result;
  //   });
  // }

  OnDateSelected(dateSelected: any) {
    console.log(dateSelected);
    this.dateSelected = dateSelected;
  }

  searchByDate() {
    // console.log('search method called');
    // console.log(this.selectedLab.labCode);
    if (!this.reservationService.validateDate(this.dateSelected)) {
      this.flashMessage.show('Please select a date to view reservations on the day', {cssClass: 'alert-danger' , timeout: 3000});
      return false;
    }

    const data = {
      reserveDate: this.dateSelected.year + '-' + this.dateSelected.month + '-' + this.dateSelected.day,
      labCode: this.selectedLab.labCode
    };

    this.reservationService.searchReservationsByDate(data).subscribe(
      resultSet => {
        console.log(resultSet);
        this.searchedReservations = resultSet;
      },
      err => {
        console.log(err);
      }
    );

  }


}

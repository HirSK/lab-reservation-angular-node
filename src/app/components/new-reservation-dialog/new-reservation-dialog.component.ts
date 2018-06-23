import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-reservation-dialog',
  templateUrl: './new-reservation-dialog.component.html',
  styleUrls: ['./new-reservation-dialog.component.css']
})
export class NewReservationDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<NewReservationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}

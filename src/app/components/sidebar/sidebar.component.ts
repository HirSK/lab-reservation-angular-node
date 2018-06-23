import { Component , OnInit, Inject} from '@angular/core';
import { LabService } from '../services/LabService';
import {MatDialog} from '@angular/material';
import { NewReservationDialogComponent } from '../new-reservation-dialog/new-reservation-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  labs: LabService[] = [];
  selectedLab: LabService;
  dialogResult = '';

  constructor(
    private labService: LabService,
    public dialog: MatDialog) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(NewReservationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResult = result;
    });
  }


}

import { Component, OnInit, Input} from '@angular/core';
import { ReservationService } from '../services/ReservationService';

@Component({
  selector: 'app-lab-info',
  templateUrl: './lab-info.component.html',
  styleUrls: ['./lab-info.component.css']
})
export class LabInfoComponent implements OnInit {

  @Input() labCode: string ;
  @Input() searchResults: ReservationService[] = [];
  panelOpenState: true;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

}

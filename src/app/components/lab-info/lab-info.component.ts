import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lab-info',
  templateUrl: './lab-info.component.html',
  styleUrls: ['./lab-info.component.css']
})
export class LabInfoComponent implements OnInit {

  @Input() labId: string ;
  panelOpenState: true;

  constructor() { }

  ngOnInit() {
  }

}

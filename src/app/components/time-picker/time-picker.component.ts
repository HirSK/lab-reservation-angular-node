import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent {

  @Output() timeSelected: EventEmitter<any> = new EventEmitter<any>();

  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
  onChange() {
    // console.log(this.time);
    this.timeSelected.emit( this.time );
 }


}

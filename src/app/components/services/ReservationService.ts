import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({providedIn: 'root'})
export class ReservationService {
    regNo: String;
    applier: String;
    reservePurpose: String;
    reservation: any;
    dateSelected: any;
    startTimeSelected: any;
    endTimeSelected: any;
    constructor(private http: Http) { }

    addNewReservation(reservation) {
      // console.log('navigating');
      return this.http.post('http://localhost:3000/api/apply', reservation).map(res => res.json());
    }

    validateDate(dateSelected) {
      if (dateSelected === undefined) {
          return false;
        } else {
          return true;
        }
    }

    validateTime(startTimeSelected, endTimeSelected) {
      if (startTimeSelected === undefined || endTimeSelected === undefined) {
          return false;
        } else {
          return true;
        }
    }

    validateOtherDetails(regNo, applier, reservePurpose) {
      if (regNo === undefined || applier === undefined || reservePurpose === undefined) {
        return false;
      } else {
        return true;
      }
    }
}

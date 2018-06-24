import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({providedIn: 'root'})
export class ReservationService {
    _id: any;
    labCode: String;
    regNo: String;
    applier: String;
    reservePurpose: String;
    reserveDate: String;
    startHour: Number;
    startMinute: Number;
    endHour: Number;
    endMinute: Number;
    approval: Boolean;
    // reservation: any;
    // dateSelected: any;
    // startTimeSelected: any;
    // endTimeSelected: any;

    constructor(private http: Http) { }

    addNewReservation(reservation) {
      // console.log('navigating');
      return this.http.post('http://localhost:3000/api/apply', reservation).map(res => res.json());
    }

    // VALIDATE WHETHER A DATE IS SELECTED
    validateDate(dateSelected) {
      if (dateSelected === undefined) {
          return false;
        } else {
          return true;
        }
    }

    // VALIDATE WHETHER START & END TIMES ARE SELECTED
    validateTime(startTimeSelected, endTimeSelected) {
      if (startTimeSelected === undefined || endTimeSelected === undefined) {
          return false;
        } else {
          return true;
        }
    }

    // VALIDATIONS FOR INPUT FIELDS
    validateOtherDetails(regNo, applier, reservePurpose) {
      if (regNo === undefined || applier === undefined || reservePurpose === undefined) {
        return false;
      } else {
        return true;
      }
    }

    // VALIDATE WHETHER THE SUBMIT TIME IS AVAILABLE
    validateAvailability(data) {
      if (this.http.get('http://localhost:3000/api/checkAvailability', data).map(res => res.json())) {
          return false;
      } else {
        return true;
      }
      // return this.http.get('http://localhost:3000/api/checkAvailability', data).map(res => res.json());
    }

    //  GET ALL PENDING REQUESTS FROM 'reservations' COLLECTION
    getAllRequests() {
      return this.http.get('http://localhost:3000/api/getAllPendingRequests').map(res => res.json());
    }

    // UPDATE THE APPROVAL TO TRUE
    approveRequest(id) {
      return this.http.put('http://localhost:3000/api/approveRequest', id).map(res => res.json());
    }
}

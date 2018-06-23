import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable({providedIn: 'root'})
export class LabService {
   labName: any;
   labCode: any;
    constructor(private http: Http) { }

    getLabs() {
     // let headers = new Headers();
      // headers.append('Content-Type', 'application/json');
     // return this.http.get('http://localhost:3000/labs'), { headers: headers }).map(res => res.json());
      return this.http.get('http://localhost:3000/api/labs').map(res => res.json());
    }
}

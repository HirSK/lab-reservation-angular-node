import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({providedIn: 'root'})
export class UserService {

  inputEmail: String;
  inputPassword: String;
  username: String;
  confirmPassword: String;

  constructor(private http: Http) { }

  validateUserFields(user) {
    if (user.username === undefined || user.inputEmail === undefined) {
         return false;
    } else {
      return true;
    }
  }

  validatePasswordLength (password) {
    if (password.length < 7) {
      return false;
    } else {
      return true;
    }
  }

  validatePasswordFileds(user) {
    if (user.inputPassword === undefined || user.confirmPassword === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateUserEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePasswords (password, confirmPassword) {
    if (password === confirmPassword ) {
      return true;
    } else {
      return false;
    }
  }

  registerNewUser(user) {
    return this.http.post('http://localhost:3000/admin/register', user).map(res => res.json());
  }

}

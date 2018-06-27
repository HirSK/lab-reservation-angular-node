import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/UserService';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  inputEmail: String;
  username: String;
  inputPassword: String;
  confirmPassword: String;
  constructor(
    private userService: UserService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  refresh() {
    this.router.navigate(['/login']);
    this.ngOnInit();
  }

  ngOnInit() {
  }

  registerUser() {
    const user = {
      inputEmail: this.inputEmail,
      inputPassword: this.inputPassword,
      confirmPassword: this.confirmPassword,
      username: this.username
    };

    console.log(user);

    if (! this.userService.validateUserFields(user)) {
      this.flashMessage.show('Please fill the required fields', {cssClass: 'alert-danger' , timeout: 3000});
      return false;
    }

    if (! this.userService.validatePasswordFileds(user)) {
      this.flashMessage.show('Please fill the required fields', {cssClass: 'alert-danger' , timeout: 3000});
      return false;
    }

    if (!this.userService.validateUserEmail(this.inputEmail)) {
      this.flashMessage.show('Please enter a valid email', {cssClass: 'alert-danger' , timeout: 3000});
      return false;
    }

    if (!this.userService.validatePasswordLength(this.inputPassword)) {
      this.flashMessage.show('Please enter a password of length above 6 characters', {cssClass: 'alert-danger' , timeout: 3000});
      return false;
    }

    if (!this.userService.validatePasswords(this.inputPassword, this.confirmPassword)) {
      this.flashMessage.show('Passwords do not match', {cssClass: 'alert-danger' , timeout: 3000});
      return false;
    }

    this.userService.registerNewUser(user).subscribe(
      userDate => {
        if (userDate.success) {
          this.flashMessage.show('User Registered Successfully.Please Login', {cssClass: 'alert-success' , timeout: 3000});
          this.router.navigate(['/login']);
        } else {
          this.flashMessage.show('Sorry.User registration failed', {cssClass: 'alert-danger' , timeout: 3000});
        }
      }
    );
  }

}

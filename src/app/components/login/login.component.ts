import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/UserService';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: String;

  constructor(
    private userService: UserService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  onRefresh() {
    this.router.navigate(['/login']);
    this.ngOnInit();
  }

  ngOnInit() {
  }

  logUser() {
    const user = {
      username: this.username,
      password: this.password
    };
    console.log(user);
    this.userService.logInUser(user).subscribe(
      data => {
        if (data.success) {
          this.router.navigate(['/admin']);
        } else {
          this.flashMessage.show('cannot find user', {cssClass: 'alert-danger' , timeout: 3000});
          this.router.navigate(['/login']);
        }
      }
    );
  }

}

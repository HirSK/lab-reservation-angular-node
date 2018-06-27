import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/UserService';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.flashMessage.show('You are now logged out', {cssClass: 'alert-success' , timeout: 2000});
    this.router.navigate(['/login']);
    return false;
  }

}

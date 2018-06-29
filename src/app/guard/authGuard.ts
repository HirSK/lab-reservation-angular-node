import { Injectable } from '@angular/core';
import { UserService } from '../components/services/UserService';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate() {
    if (this.userService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "./auth/user-service.service";
import {Observable} from "rxjs";
import {UserDetails} from "./auth/user-details";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  $userDetails : Observable<UserDetails|null>;
  constructor(private userService :UserServiceService, private authService :AuthService) {
    this.title = 'MENU WIZARD';
  }

  ngOnInit(): void {
    this.$userDetails = this.userService.getUserDetails()
  }

  signout() {
    this.authService.signout()

  }
}

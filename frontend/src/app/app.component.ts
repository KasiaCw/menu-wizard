import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "./auth/user-service.service";
import {Observable} from "rxjs";
import {Role, UserDetails} from "./auth/user-details";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  $userDetails : Observable<UserDetails|null>;
  showAddRecipe: boolean = false;
  showUsersList: boolean = false;
  constructor(private userService :UserServiceService, private authService :AuthService) {
    this.title = 'MENU WIZARD';
  }

  ngOnInit(): void {
    this.$userDetails = this.userService.getUserDetails()
    this.userService.getUserDetails().subscribe(userDetails => this.handleUserDetailsChange(userDetails))
  }

  signout() {
    this.authService.signout()
  }

  private handleUserDetailsChange(userDetails: UserDetails | null) {
    if(userDetails!=null){
      this.showAddRecipe = userDetails.roles.includes(Role.USER);
      this.showUsersList = userDetails.roles.includes(Role.ADMIN);
    } else {
      this.showAddRecipe = false;
      this.showUsersList = false;
    }
  }

}

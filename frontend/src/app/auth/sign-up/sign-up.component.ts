import {Component} from '@angular/core';

import {SignUpRequest} from "../sign-up-request";
import {AuthService} from "../auth.service";
import {Status, StatusResponse} from "../status-response";

@Component({
  selector: 'app-sign-up', templateUrl: './sign-up.component.html', styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpDto: SignUpRequest = new SignUpRequest();
  signUpSuccessful: boolean = false;
  signUpMessage: string | null = null;

  constructor(private authService: AuthService) {
  }

  onSubmit() {
    this.authService.signup(this.signUpDto).subscribe(response => this.handleResponse(response));
  }

  private handleResponse(response: StatusResponse) {
    console.log("SignUp component received status" + JSON.stringify(response));
    if (response.status === Status.SUCCESS) {
      this.signUpSuccessful = true;
    }
    this.signUpMessage = response.message;
  }
}

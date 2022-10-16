import {Component, OnInit} from '@angular/core';
import {SignUpRequest} from "../sign-up-request";
import {AuthService} from "../auth.service";
import {Status, StatusResponse} from "../status-response";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInDto: SignUpRequest = new SignUpRequest();
  signInSuccessful: boolean = false;
  signInMessage: string | null = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.signin(this.signInDto).subscribe(response => this.handleResponse(response));
  }

  private handleResponse(response: StatusResponse) {
    console.log("SignIn component received status" + JSON.stringify(response));
    if (response.status === Status.SUCCESS) {
      this.signInSuccessful = true;
    }
    this.signInMessage = response.message;
  }
}

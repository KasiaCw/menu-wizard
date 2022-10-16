import { Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{

  isSignInMode = true;

  onSwitchMode(){
    this.isSignInMode = !this.isSignInMode;
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
  }

  constructor() { }


}

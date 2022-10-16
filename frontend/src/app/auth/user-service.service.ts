import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {UserDetails} from "./user-details";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userDetails:BehaviorSubject<UserDetails|null> = new BehaviorSubject<UserDetails | null>(null);
  private userUrl: string = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {

  }

  public refreshUserDetails(){
    console.log("refreshing user details")
    this.http.get<UserDetails>(this.userUrl+'/current-user').subscribe(respnse => this.userDetails.next(respnse));
  }

  public clearUserDetails(){
    this.userDetails.next(null);
  }

  public getUserDetails():Observable<UserDetails|null>{
    return this.userDetails;
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {SignUpRequest} from "./sign-up-request";
import {catchError, map, Observable, of} from "rxjs";
import {Status, StatusResponse} from "./status-response";
import {JwtAuthResponse} from "./jwt-auth-response";
import {UserServiceService} from "./user-service.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl: string
  private userToken: string|null = null;

  constructor(private http: HttpClient, private userService:UserServiceService) {
    this.authUrl = 'http://localhost:8080/api/auth/'
  }


  signin(signInDto: SignUpRequest): Observable<StatusResponse>  {
    return this.http.post<JwtAuthResponse>(this.authUrl + 'signin', signInDto).pipe(
      map(resp => {
        this.handleJwtTokenResponse(resp);
        this.userService.refreshUserDetails();
        return new StatusResponse("successfully signed in", Status.SUCCESS)
      }),
      catchError(this.handleError))
  }

  private handleJwtTokenResponse(resp: JwtAuthResponse) {
    this.userToken = resp.accessToken;
  }

  public getUserToken():string|null{
    return this.userToken;
  }

  signup(signUpDto: SignUpRequest): Observable<StatusResponse> {
    return this.http.post<StatusResponse>(this.authUrl + 'signup', signUpDto).pipe(catchError(this.handleError))
  }

  //https://angular.io/guide/http#handling-request-errors
  private handleError(error: HttpErrorResponse): Observable<StatusResponse> {
    console.log("Handling error: " + JSON.stringify(error))
    if (error.status === 200) {
      return of(new StatusResponse(error.message, Status.SUCCESS));
    }
    let errorMessage = 'unknown error';
    if (error.status === 400) {
      errorMessage = error.error.message
    }
    if (error.status === 401) {
      errorMessage = 'Authentication error'
    }
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = 'Unknown error ' + error.message;
    }
    return of(new StatusResponse(errorMessage, Status.FAILURE));
  }


  signout() {
    this.userToken = null;
    this.userService.clearUserDetails();
  }
}


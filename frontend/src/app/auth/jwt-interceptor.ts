import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

//https://jasonwatmore.com/post/2021/09/24/angular-http-interceptor-to-set-auth-header-for-api-requests-if-user-logged-in
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getUserToken()!=null) {
      request = request.clone({
        setHeaders: { Authorization: "Bearer " + this.authService.getUserToken() }
      });
    }
    return next.handle(request);
  }
}

import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '@core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanMatch {
  constructor(private userService: UserService) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.userLoggedIn$.asObservable();
  }
}

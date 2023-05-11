import { Injectable } from '@angular/core';
import { BaseDataService } from '@core/services/base.data.service';
import {
  catchError,
  firstValueFrom,
  Observable,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import { StorageService } from '@core/utils/storage.service';
import {
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { APP_CONSTANTS } from '../../../constants/app-constants';

interface ITokenResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseDataService {
  public createPassword(data: {
    code: string;
    password: string;
  }): Observable<{ email: string }> {
    return this.post('/authentication/reset-password', data);
  }

  public login(formAuthData: {
    email: string;
    password: string;
  }): Observable<boolean> {
    return this.post('/auth/signin', formAuthData, null).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }),
      switchMap((response: ITokenResponse) => {
        StorageService.set(APP_CONSTANTS.AUTH_TOKEN_KEY, response.accessToken);
        return of(true);
      })
    );
  }

  public logout(): Observable<boolean> {
    StorageService.clear('AUTH_TOKEN');
    return this.get('/token/verify').pipe(
      catchError(() => {
        return of(true);
      })
    );
  }

  public resetPassword(email: string): Observable<void> {
    const data = {
      baseUrl: this.configService.appBaseUrl + '/auth/reset/',
      email,
    };
    return this.post('/authentication/request-password-reset', data);
  }

  public restoreSession(): Promise<void> {
    return firstValueFrom(this.get('/user'));
  }

  public verify(): Promise<void> {
    return firstValueFrom(this.get('/authentication/verify'));
  }

  public verifyEmail(email: string): Observable<boolean> {
    const queryParams = { email };
    return this.get('/authentication/verify-email', queryParams).pipe(
      switchMap((response: { status: string }) => {
        if (response.status === 'Ok') {
          return of(true);
        } else {
          return throwError('Not verified');
        }
      })
    );
  }

  public verifyReset(code: string): Observable<void> {
    return this.get('/authentication/verify-reset', { code });
  }

  public setAuthKey(key: string): void {
    StorageService.set(APP_CONSTANTS.AUTH_TOKEN_KEY, key);
  }

  public getAuthKey() {
    return StorageService.get(APP_CONSTANTS.AUTH_TOKEN_KEY);
  }
}

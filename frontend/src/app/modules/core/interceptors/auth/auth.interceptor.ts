import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from '@angular/common/http';
import { StorageService } from '@core/utils/storage.service';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../../../../constants/app-constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const key = StorageService.get(APP_CONSTANTS.AUTH_TOKEN_KEY);
    if (key) {
      const headers = request.headers.append('authorization', `Bearer ${key}`);
      const req = request.clone({
        headers,
      });
      return next.handle(req);
    } else {
      return next.handle(request);
    }
  }
}

import { APP_INITIALIZER } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { UserDataService } from '@core/services/user.data.service';
import { UserService } from '@core/services/user.service';
import { IUser } from '@schemas/user';
import { firstValueFrom } from 'rxjs';

const initializeAuthData =
  (
    authService: AuthService,
    userDataService: UserDataService,
    userService: UserService,
    router: Router
  ) =>
  () => {
    if (router.url === '/auth/reset') {
      return true;
    }
    return authService.restoreSession().then(
      () => {
        return firstValueFrom(userDataService.getLoggedInUserInfo()).then(
          (userResponse: IUser | undefined) => {
            if (userResponse) {
              userService.setUser(userResponse);
            }
          },
          () => {
            return router.navigate(['/auth']);
          }
        );
      },
      () => {
        return router.navigate(['/auth']);
      }
    );
  };

export const INITIALIZATION_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeAuthData,
    deps: [AuthService, UserDataService, UserService, Router],
    multi: true,
  },
];

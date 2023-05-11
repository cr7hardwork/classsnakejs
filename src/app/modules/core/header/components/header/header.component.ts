import {Component} from '@angular/core';
import {AuthService} from '@core/services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '@core/services/user.service';
import {BehaviorSubject} from "rxjs";
import {IUser} from "@schemas/user";

@Component({
  selector: 'si-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public user$: BehaviorSubject<IUser | null>

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.user$ = this.userService.user$
  }

  public onLogout(): void {
    this.authService.logout().subscribe(() => {
      this.userService.clearUserData();
      this.router.navigate(['/auth']);
    });
  }

  public onLoginButtonClicked(): void {
    this.router.navigate(['/auth'])
  }

  public onNavigateToHomePage(): void {
    this.router.navigate(['/projects'])
  }
}

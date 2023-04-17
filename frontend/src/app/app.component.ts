import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IUser} from "./modules/core/schemas/user";
import {UserService} from "./modules/core/services/user.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private userData$: BehaviorSubject<IUser | null> =
    new BehaviorSubject<IUser | null>(null);

  constructor(private userService: UserService, private translateService:TranslateService) {
    this.userData$ = this.userService.user$;
    translateService.setDefaultLang('en');
    translateService.use('en')
  }

  get user$(): Observable<IUser | null> {
    return this.userService.user$.asObservable();
  }
}

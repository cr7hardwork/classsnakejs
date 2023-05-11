import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'si-header-user-login-actions',
  templateUrl: './header-user-login-actions.component.html',
  styleUrls: ['./header-user-login-actions.component.scss']
})
export class HeaderUserLoginActionsComponent {

  @Output() login: EventEmitter<void> = new EventEmitter();

  public onLoginButtonClicked(): void {
    this.login.emit();
  }
}

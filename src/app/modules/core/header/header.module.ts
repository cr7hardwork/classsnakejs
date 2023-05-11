import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "@core/header/components/header/header.component";
import {HeaderActionsComponent} from "@core/header/components/header-actions/header-actions.component";
import {HeaderUserActionsComponent} from './components/header-user-actions/header-user-actions.component';
import {
  HeaderUserLoginActionsComponent
} from './components/header-user-login-actions/header-user-login-actions.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import { HeaderLoginActionsComponent } from './components/header-login-actions/header-login-actions.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderActionsComponent,
    HeaderUserActionsComponent,
    HeaderUserLoginActionsComponent,
    HeaderLoginActionsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent
  ]

})
export class HeaderModule {
}

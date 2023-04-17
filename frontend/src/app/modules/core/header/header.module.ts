import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "@core/header/components/header/header.component";
import {HeaderActionsComponent} from "@core/header/components/header-actions/header-actions.component";
import {HeaderUserActionsComponent} from './components/header-user-actions/header-user-actions.component';
import {
  HeaderUserLoginActionsComponent
} from './components/header-user-login-actions/header-user-login-actions.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderActionsComponent,
    HeaderUserActionsComponent,
    HeaderUserLoginActionsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent
  ]

})
export class HeaderModule {
}

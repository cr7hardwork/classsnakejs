import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {HeaderModule} from './header/header.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [RouterModule, CommonModule, HeaderModule],
  exports: [SidebarComponent, HeaderModule],
})
export class CoreModule {
}

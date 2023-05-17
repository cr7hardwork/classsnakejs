import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocationDropdownComponent} from './location-dropdown/location-dropdown.component';
import {EquityRangeInputComponent} from './equity-range-input/equity-range-input.component';
import {RoleDropdownComponent} from './profession-dropdown/role-dropdown.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IndustryDropDownComponent} from "@shared/industry-drowpdown/industry-drowpdown.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {TranslateModule} from "@ngx-translate/core";
import { ProjectMemberComponent } from './project-member/project-member.component';


@NgModule({
  declarations: [
    IndustryDropDownComponent,
    LocationDropdownComponent,
    EquityRangeInputComponent,
    RoleDropdownComponent,
    ProjectMemberComponent
  ],
  imports: [
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    IndustryDropDownComponent,
    LocationDropdownComponent,
    EquityRangeInputComponent,
    RoleDropdownComponent,
    ProjectMemberComponent,
    TranslateModule
  ]

})
export class SharedModule {
}

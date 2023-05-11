import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocationDropdownComponent} from './location-dropdown/location-dropdown.component';
import {EquityRangeInputComponent} from './equity-range-input/equity-range-input.component';
import {RoleDropdownComponent} from './profession-dropdown/role-dropdown.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IndustryDropDownComponent} from "@shared/industry-drowpdown/industry-drowpdown.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    IndustryDropDownComponent,
    LocationDropdownComponent,
    EquityRangeInputComponent,
    RoleDropdownComponent
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
    TranslateModule
  ]

})
export class SharedModule {
}

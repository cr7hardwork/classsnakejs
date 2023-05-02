import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Observable, of} from "rxjs";
import {CoreDataService} from "@core/services/core-data.service";
import {IRole} from "@schemas/core-data/role";

@Component({
  selector: 'si-role-dropdown',
  templateUrl: './role-dropdown.component.html',
  styleUrls: ['./role-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RoleDropdownComponent),
      multi: true
    }
  ]
})
export class RoleDropdownComponent implements ControlValueAccessor, OnInit {
  @Input() roles: Observable<IRole[]> = of([]);
  value: number | null = null;

  ngOnInit() {
    this.roles = this.coreDataService.getRoles();
  }

  constructor(private coreDataService: CoreDataService) {
  }

  onChange: (value: string | null) => void = () => {
  };
  onTouched: () => void = () => {
  };

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = (value: string | null) => {
      fn(value);
    };
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }
}

import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ILocation} from "@schemas/core-data/location";
import {Observable, of} from "rxjs";
import {CoreDataService} from "@core/services/core-data.service";

@Component({
  selector: 'si-location-dropdown',
  templateUrl: './location-dropdown.component.html',
  styleUrls: ['./location-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LocationDropdownComponent),
      multi: true
    }
  ],
})
export class LocationDropdownComponent implements ControlValueAccessor, OnInit {
  @Input() locations:Observable<ILocation[]> = of([])
  value: number | null = null;

  constructor(private coreDataService:CoreDataService) {
  }

  public ngOnInit() {
    this.locations = this.coreDataService.getLocations();
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

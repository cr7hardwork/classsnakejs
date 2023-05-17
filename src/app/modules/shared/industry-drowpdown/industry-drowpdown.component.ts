import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CoreDataService} from "@core/services/core-data.service";
import {Observable, of} from "rxjs";
import {IIndustry} from "@schemas/core-data/industry";

@Component({
  selector: 'si-industry-drowpdown',
  templateUrl: './industry-drowpdown.component.html',
  styleUrls: ['./industry-drowpdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IndustryDropDownComponent),
    multi: true
  }]
})
export class IndustryDropDownComponent implements OnInit, ControlValueAccessor {
  @Input() industries: Observable<IIndustry[]> = of([]);
  value: number | null = null;

  constructor(private coreDataService: CoreDataService) {
  }

  ngOnInit() {
    this.industries = this.coreDataService.getIndustries();
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

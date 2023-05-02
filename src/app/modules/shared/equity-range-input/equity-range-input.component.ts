import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'si-equity-range-input',
  templateUrl: './equity-range-input.component.html',
  styleUrls: ['./equity-range-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EquityRangeInputComponent),
      multi: true
    }
  ],
})
export class EquityRangeInputComponent implements ControlValueAccessor {
  minValue: number | null = null;
  maxValue: number | null = null;

  onChange: (value: { min: number | null; max: number | null }) => void = () => {
  };
  onTouched: () => void = () => {
  };

  constructor() {

  }

  writeValue(value: { min: number; max: number }): void {
    if (value) {
      this.minValue = value.min;
      this.maxValue = value.max;
    }
  }

  registerOnChange(fn: (value: { min: number | null; max: number | null }) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onValueChange(): void {
    this.onChange({min: this.minValue, max: this.maxValue});
    this.onTouched();
  }
}

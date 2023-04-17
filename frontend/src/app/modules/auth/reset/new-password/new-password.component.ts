import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'si-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent {
  @Output() passwordConfirmed: EventEmitter<string> =
    new EventEmitter<string>();

  public resetPasswordForm: FormGroup;

  constructor() {
    this.resetPasswordForm = this.createAndReturnFromGroup();
  }

  private createAndReturnFromGroup() {
    return new FormGroup(
      {
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: [this.passwordConfirming()] }
    );
  }

  public passwordConfirming(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlPassword = control.get('password');
      const controlConfirmPassword = control.get('confirmPassword');
      if (controlPassword?.value !== controlConfirmPassword?.value) {
        return { notEquivalent: true };
      }
      return null;
    };
  }

  public onFormSubmit(): void {
    const formData = this.resetPasswordForm.getRawValue();
    const { password } = formData;
    this.passwordConfirmed.emit(password);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '@schemas/user';
import { UserDataService } from '@core/services/user.data.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'sireset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent {
  public resetPasswordForm: FormGroup;
  public resetPasswordRequestSent = false;
  public resetCodeVerification = false;
  public resetCode = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userDataService: UserDataService,
    private userService: UserService
  ) {
    this.checkAndResetCodeAndVerify();
    this.resetPasswordForm = this.createAndReturnFromGroup();
  }

  public onPasswordChange(password: string) {
    const data = { code: this.resetCode, password };
    this.authService
      .createPassword(data)
      .subscribe((response: { email: string }) => {
        const authData = { password: password, username: response.email };
        this.authService.loadAndStoreToken(authData).subscribe(() => {
          this.userDataService.getUserInfo().subscribe((data: IUser) => {
            this.userService.setUser(data);
            this.router.navigate(['/dashboard/tardies']);
          });
        });
      });
  }

  public onFormSubmit(): void {
    const formData = this.resetPasswordForm.getRawValue();
    const { email } = formData;
    this.authService.resetPassword(email).subscribe(
      () => {
        this.resetPasswordRequestSent = true;
      },
      () => {
        this.resetPasswordForm.get('email')?.setErrors({ emailInvalid: true });
      }
    );
  }

  private checkAndResetCodeAndVerify(): void {
    const resetCode = this.route.snapshot.paramMap.get('code');
    if (resetCode) {
      this.resetCode = resetCode;
      this.verifyResetCode();
    }
  }

  private createAndReturnFromGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  private verifyResetCode(): void {
    this.authService.verifyReset(this.resetCode).subscribe(() => {
      this.resetCodeVerification = true;
    });
  }
}

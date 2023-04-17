import {Component} from '@angular/core';
import {AuthService} from '@core/services/auth.service';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from '@core/services/user.service';
import {UserDataService} from '@core/services/user.data.service';
import {IUser} from '@schemas/user';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'si-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public verified = false;
  public loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private userDataService: UserDataService
  ) {
    this.loginForm = this.createAndReturnFromGroup();
  }

  get email() {
    return this.loginForm.get('email');
  }

  private createAndReturnFromGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public onFormSubmit(): void {
    if (this.verified) {
      this.getToken();
    } else {
      this.verify();
    }
  }

  private addPasswordControlToTheLoginFormGroup(): void {
    this.loginForm.addControl(
      'password',
      new FormControl('', [Validators.required])
    );
  }

  private verify(): void {
    const formData = this.loginForm.getRawValue();
    const {email} = formData;
    this.authService.verifyEmail(email).subscribe(
      () => {
        this.verified = true;
        this.addPasswordControlToTheLoginFormGroup();
      },
      () => {
        this.loginForm.get('email')?.setErrors({notFound: true});
        this.verified = false;
      }
    )
  }

  private getToken(): void {
    const formData = this.loginForm.getRawValue();
    const {email, password} = formData;
    firstValueFrom(
      this.authService.loadAndStoreToken({username: email, password})
    ).then(
      () => {
        this.userDataService.getUserInfo().subscribe((data: IUser) => {
          this.userService.setUser(data);
          this.router.navigate(['/dashboard/tardies']);
        });
      },
      (error: HttpErrorResponse) => {
        this.loginForm.get('password')?.setErrors({badPassword: error.error});
      }
    );
  }
}

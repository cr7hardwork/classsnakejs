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
      password: new FormControl('', [Validators.required]),
    });
  }

  public onFormSubmit(): void {
    this.login();
  }

  private login(): void {
    const formData = this.loginForm.getRawValue();
    const {email, password} = formData;
    firstValueFrom(
      this.authService.login({email, password})
    ).then(
      () => {
        firstValueFrom(this.userDataService.getLoggedInUserInfo()).then((data: IUser) => {
          this.userService.setUser(data);
          this.router.navigate(['/project']);
        });
      },
      (error: HttpErrorResponse) => {
        this.loginForm.get('password')?.setErrors({badPassword: error.error});
      }
    );
  }
}

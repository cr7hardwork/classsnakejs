import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetRoutingModule } from './reset-routing.module';
import { ResetComponent } from './reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPasswordComponent } from './new-password/new-password.component';

@NgModule({
  declarations: [ResetComponent, NewPasswordComponent],
  imports: [CommonModule, ResetRoutingModule, ReactiveFormsModule],
})
export class ResetModule {}

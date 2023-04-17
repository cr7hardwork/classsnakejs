import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'reset',
        loadChildren: () =>
          import('./reset/reset.module').then((m) => m.ResetModule),
      },
      {
        path: 'reset/:code',
        loadChildren: () =>
          import('./reset/reset.module').then((m) => m.ResetModule),
      },
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

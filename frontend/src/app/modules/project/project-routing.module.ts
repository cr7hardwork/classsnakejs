import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
        pathMatch: "full"
      },
      {
        path: ':id',
        loadChildren: () => import('./project-view/project-view.module').then(m => m.ProjectViewModule),
        pathMatch: "full"
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: '**',
        redirectTo: 'search'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}

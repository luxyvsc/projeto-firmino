import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { NewTeamComponent } from './new-team/new-team.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detail/:id', component: TeamDetailComponent},
  {path: 'new', component: NewTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

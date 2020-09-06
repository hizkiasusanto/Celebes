import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileDashboardComponent} from "./profile-dashboard/profile-dashboard.component";
import {DisplayProfileComponent} from "./tab-contents/display-profile/display-profile.component";

const routes: Routes = [
  {
    path: '', component: ProfileDashboardComponent, children: [
      {path: 'index', component: DisplayProfileComponent},
      {path: '', pathMatch: 'full', redirectTo: 'index'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}

import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import {SharedModule} from "../../shared/shared.module";
import { DisplayProfileComponent } from './tab-contents/display-profile/display-profile.component';


@NgModule({
  declarations: [ProfileDashboardComponent, DisplayProfileComponent],
  imports: [SharedModule.forRoot(), ProfileRoutingModule]
})
export class ProfileModule {
  static forRoot() {
    return {
      ngModule: ProfileModule
    }
  }
}

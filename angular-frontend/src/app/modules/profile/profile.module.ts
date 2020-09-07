import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import {SharedModule} from "../../shared/shared.module";
import { DisplayProfileComponent } from './tab-contents/display-profile/display-profile.component';
import { EditProfileComponent } from './tab-contents/edit-profile/edit-profile.component';
import { EditProfilePictureComponent } from './tab-contents/edit-profile-picture/edit-profile-picture.component';


@NgModule({
  declarations: [ProfileDashboardComponent, DisplayProfileComponent, EditProfileComponent, EditProfilePictureComponent],
  imports: [SharedModule.forRoot(), ProfileRoutingModule]
})
export class ProfileModule {
  static forRoot() {
    return {
      ngModule: ProfileModule
    }
  }
}

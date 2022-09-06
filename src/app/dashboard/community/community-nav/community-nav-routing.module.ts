import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityNavPage } from './community-nav.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityNavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityNavPageRoutingModule {}

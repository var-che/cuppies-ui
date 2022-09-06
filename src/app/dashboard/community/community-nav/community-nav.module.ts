import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityNavPageRoutingModule } from './community-nav-routing.module';

import { CommunityNavPage } from './community-nav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityNavPageRoutingModule
  ],
  declarations: [CommunityNavPage],
  exports: [CommunityNavPage]
})
export class CommunityNavPageModule {}

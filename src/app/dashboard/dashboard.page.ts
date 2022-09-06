import { Component, OnInit } from '@angular/core';
import {CommunityPage} from './community/community.page';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public communityComponent;
  
  constructor() {
    this.communityComponent = CommunityPage

   }
  ngOnInit() {
  }

}

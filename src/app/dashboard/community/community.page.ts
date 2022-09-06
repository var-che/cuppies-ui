import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCommunity, loadCommunities, removeCommunity } from 'src/app/store/communities/community.actions';
import { selectAllTodos } from 'src/app/store/todos/todo.selectors';
import { CommunityNavPage } from './community-nav/community-nav.page';
import { Community } from './community.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  public communityNavComponent;

  public communityName = '';
  // Get a stream of current Communities state
  public allCommunities$ = this.store.select(selectAllTodos);

  constructor( private store: Store) {
    this.communityNavComponent = CommunityNavPage;
  }

  ngOnInit() {
    this.store.dispatch(loadCommunities());
  }
  addCommunity() {
    this.store.dispatch(addCommunity({ name: this.communityName }))
  }

  removeCommunity(community: Community) {
    this.store.dispatch(removeCommunity({ id: community.id }))
  }
}

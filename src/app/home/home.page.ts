import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { HolochainServiceService } from '../holochain-service/holochain-service.service';
import { loadTodos, addTodo, removeTodo } from '../store/todos/todo.actions';
import { Todo } from '../store/todos/todo.model';
import { selectAllTodos } from '../store/todos/todo.selectors';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public allTodos$ = this.store.select(selectAllTodos);
  public todo = '';
  
  constructor(private store: Store, private holo: HolochainServiceService) {}

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  addTodo() {
    this.store.dispatch(addTodo({ content: this.todo }))
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }))
  }
}

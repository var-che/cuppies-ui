import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { AppState } from "../app.store";
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { addTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo } from "./todo.actions";
import { selectAllTodos } from "./todo.selectors";
import { TodoService } from "src/app/home/todo.services";
import { Injectable } from "@angular/core";

@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private todoService: TodoService,
    ) {}
    // Run tih code when a loadTodos action is dispatched
    
  // Run this code when a loadTodos action is dispatched
  loadTodos$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadTodos),
    switchMap(() =>
      // Call the getTodos method, convert it to an observable
      from(this.todoService.getTodos()).pipe(
        // Take the returned value and return a new success action containing the todos
        map((todos) => loadTodosSuccess({ todos: todos })),
        // Or... if it errors return a new failure action containing the error
        catchError((error) => of(loadTodosFailure({ error })))
      )
    )
  )
  );
    // Run this code when the addTodo or removeTodo action is dispatched
  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTodo, removeTodo),
        withLatestFrom(this.store.select(selectAllTodos)),
        switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
      ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );
    
}
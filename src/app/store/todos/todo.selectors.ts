import { createSelector } from "@ngrx/store";
import { AppState } from "../app.store";
import { TodoState } from "./todo.reducer";

export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
    selectTodos,
    (state: TodoState) => state.todos
)
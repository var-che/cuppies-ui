import { createReducer, on } from "@ngrx/store";
import { addTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo } from "./todo.actions";
import {Todo} from './todo.model';

export interface TodoState {
    todos: Todo[],
    error: string,
    status: 'pending' | 'loading' | 'error' | 'success';
};

export const initialState: TodoState = {
    todos: [],
    error: null,
    status: 'pending',
};

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { content }) => ({
        ... state,
        todos: [...state.todos, {id: Date.now().toString(), content: content}]
    })),
    on(removeTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id)
    })),
    on(loadTodos, (state) => ({ ...state, status: 'loading' })),
    on(loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos: todos,
        error: null,
        status: 'success',
    })),
    on(loadTodosFailure, (state, {error}) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    
)
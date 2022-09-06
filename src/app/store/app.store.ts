import { CommunityState } from "./communities/community.reducer";
import { TodoState } from "./todos/todo.reducer";

export interface AppState {
    todos: TodoState,
    communities: CommunityState,
}
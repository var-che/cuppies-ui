import { Todo } from "../store/todos/todo.model";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class TodoService {
    private storageInitalised = false;

    constructor(private storage: Storage) {}

    async getTodos(): Promise<Todo[]> {
        if(!this.storageInitalised) await this.storage.create();

        return (await this.storage.get('todos')) || [];
    }

    async saveTodos(todos: Todo[]) {
        if(!this.storageInitalised) await this.storage.create();

        return this.storage.set('todos', todos);
    }
}
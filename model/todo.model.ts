export interface ITodo {
    title: string;
    id?: string;
    completed?: boolean;
}

export class Todo implements ITodo {
    constructor(public title: string, public id?: string, public completed?: boolean) {
        this.id = id == null || id.length === 0 ?
            Date.now().toString(36) + Math.random().toString(36).substring(2)
            : id;
        this.completed = completed == null ? false : completed;
    }
}
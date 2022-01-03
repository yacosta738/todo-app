import {acceptHMRUpdate, defineStore} from 'pinia';
import {ITodo} from "~/model/todo.model";


type IStore = {
    todos: ITodo[];
}
export const useTodoStore = defineStore({
    id: 'todoStore',
    state: (): IStore => ({
        todos: [],
    }),
    actions: {
        addTodo(todo: ITodo) {
            this.todos.push(todo);
            // save todos to localStorage
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        removeTodo(todo: ITodo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            // save todos to localStorage
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        removeAllTodos() {
            this.todos = [];
            // save todos to localStorage
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        toggleTodo(todo: ITodo) {
            todo.completed = !todo.completed;
            // save todos to localStorage
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        readTodos() {
            // read todos from localStorage
            const todos = localStorage.getItem('todos');
            if (todos) {
                this.todos = JSON.parse(todos);
            }
        },
    },

    getters: {
        getAllTodos: (state: IStore) =>{
            return state.todos.sort((a, b) => {
                if (a.completed && !b.completed) {
                    return 1;
                }
                if (!a.completed && b.completed) {
                    return -1;
                }
                return 0;
            });
        },
        getCompletedTodos: (state: IStore) => state.todos.filter(todo => todo.completed),
        getUncompletedTodos: (state: IStore) => state.todos.filter(todo => !todo.completed),
        getTodoById: (state: IStore) => (id: string) => state.todos.find(todo => todo.id === id),
        getTodoCount: (state: IStore) => state.todos.length,
        getCompletedTodoCount: (state: IStore) => state.todos.filter(todo => todo.completed).length,
        getUncompletedTodoCount: (state: IStore) => state.todos.filter(todo => !todo.completed).length

    }
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}
let todoList = [];
let selectedTodo = null;

function addTodo(todo) {
    todoList.push(todo);
    document.dispatchEvent(new CustomEvent('todoAdded', { detail: todo }));
}

function editTodo(todo) {
    const index = todoList.findIndex(t => t.id === todo.id);
    if (index !== -1) {
        todoList[index] = todo;
        document.dispatchEvent(new CustomEvent('todoUpdated', { detail: todo }));
    }
}

function deleteTodo(id) {
    const index = todoList.findIndex(t => t.id === id);
    if (index !== -1) {
        const deletedTodo = todoList.splice(index, 1)[0];
        document.dispatchEvent(new CustomEvent('todoDeleted', { detail: deletedTodo }));
    }
}

function toggleTodo(id) {
    const todo = todoList.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        document.dispatchEvent(new CustomEvent('todoUpdated', { detail: todo }));
    }
}

function getTodos() {
    return todoList;
}

function getTodoById(id) {
    return todoList.find(t => t.id === id);
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = {
        todos: todoList,
        newTodo: {},
        currentTodo: selectedTodo,
        addTodo,
        editTodo,
        deleteTodo,
        toggleTodo,
        getTodos,
        getTodoById
    };
});
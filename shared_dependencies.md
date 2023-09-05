1. Shared Variables:
   - `todoList`: An array that stores the list of todos.
   - `selectedTodo`: An object that stores the currently selected todo for editing or deleting.

2. Data Schemas:
   - `Todo`: An object schema that includes properties like `id`, `title`, `description`, and `completed`.

3. ID Names of DOM Elements:
   - `todo-list`: The main container for the todo list.
   - `add-todo-form`: The form for adding new todos.
   - `edit-todo-form`: The form for editing existing todos.
   - `delete-todo-modal`: The modal for confirming todo deletion.

4. Message Names:
   - `todoAdded`: Emitted when a new todo is added.
   - `todoUpdated`: Emitted when an existing todo is updated.
   - `todoDeleted`: Emitted when a todo is deleted.

5. Function Names:
   - `addTodo()`: Function to add a new todo.
   - `editTodo()`: Function to edit an existing todo.
   - `deleteTodo()`: Function to delete a todo.
   - `toggleTodo()`: Function to toggle the completed status of a todo.
   - `getTodos()`: Function to fetch all todos.
   - `getTodoById()`: Function to fetch a todo by its id.

6. Shared CSS Classes:
   - `.todo-item`: Class for each todo item.
   - `.completed`: Class for completed todos.
   - `.edit-mode`: Class for when the app is in edit mode.
   - `.delete-mode`: Class for when the app is in delete mode.

7. Shared Alpine.js x-data:
   - `todos`: The list of todos.
   - `newTodo`: The new todo to be added.
   - `currentTodo`: The todo currently being edited or deleted.

8. Shared HTMX attributes:
   - `hx-post`: For sending POST requests when adding, updating, or deleting todos.
   - `hx-get`: For sending GET requests when fetching todos.
   - `hx-swap`: For updating the DOM after a successful request.
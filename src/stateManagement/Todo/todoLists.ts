import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Todo interface
interface Todo {
    id: string;
    text: string;
}

// Define the TodoState interface
interface TodoState {
    todos: Todo[];
}

// Define the initial state
const initialState: TodoState = {
    todos: [],
};

// Create the todoSlice using createSlice function
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Add a new todo to the state
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        // Update an existing todo in the state
        updateTodo: (state, action: PayloadAction<Todo>) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
        // Delete a todo from the state
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },
    },
});

// Export the action creators
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;

import uuidv4 from 'uuid/v4'

export default function reducer(state, action) {
    switch (action.type) {
        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload
            };

        case "TOGGLE_TODO":
            const toggleTodos = state.todos.map(t =>
                t.id === action.payload.id ? action.payload : t);
            /*const toggleTodos = state.todos.map(t => t.id === action.payload.id ? {
                ...action.payload,
                complete: !action.payload.complete
            } : t);*/
            return {
                ...state, todos: toggleTodos
            };
        case "UPDATE_TODO":
            /*if (!action.payload) {
                return state;
            }
            if (state.todos.findIndex(t => t.text === action.payload) > -1) {
                return state;
            }*/
            // const updatedTodo = {...state.currentTodo, text: action.payload};
            const updatedTodo = {...action.payload};
            const updateTodoIndex = state.todos.findIndex(t => t.id === state.currentTodo.id);
            const updatedTodos = [
                ...state.todos.slice(0, updateTodoIndex),
                updatedTodo,
                ...state.todos.slice(updateTodoIndex + 1)
            ];
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            };
        case "REMOVE_TODO":
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
            return {
                ...state,
                currentTodo: isRemovedTodo,
                todos: filteredTodos
            };
        case "ADD_TODO":
            /*let data = action.payload.trim();
            if (!(data)) {
                return state;
            }
            if (state.todos.findIndex(t => t.text === action.payload) > -1) {
                return state;
            }*/
            /*const newTodo = {
                id: uuidv4(),
                text: action.payload,
                complete: false
            };*/
            const addedTodos = [...state.todos, action.payload];
            return {...state, todos: addedTodos};
        case "SET_CURRENT_TODO":
            return {
                ...state,
                currentTodo: action.payload
            };
        default:
            return state;
    }
}
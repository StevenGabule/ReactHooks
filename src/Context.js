import React, {createContext} from "react";

const TodoContext = createContext({
    todos: [
        {id: 1, text: "Eat Breakfast", complete: false},
        {id: 2, text: "Read books", complete: false},
        {id: 3, text: "Finish some projects", complete: true},
    ],
    currentTodo: {}
});

export default TodoContext;
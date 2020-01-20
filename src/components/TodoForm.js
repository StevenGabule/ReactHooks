import React, {useContext, useEffect, useState} from "react";
import TodoContext from "../Context";

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const {state: {currentTodo = {}}, dispatch} = useContext(TodoContext);

    useEffect(() => {
        if (currentTodo.text) {
            setTodo(currentTodo.text)
        } else {
            setTodo("");
        }
    }, [currentTodo.id]);

    const handleSubmit = event => {
        event.preventDefault();
        if (currentTodo.text) {
            dispatch({type: "UPDATE_TODO", payload: todo})
        } else {
            dispatch({type: "ADD_TODO", payload: todo});
        }
        setTodo("")
    };

    return (
        <form onSubmit={handleSubmit} className={"flex justify-center p-5"}>
            <input type="text" onChange={event => setTodo(event.target.value)}
                   className={"border-black border-solid border-2"} value={todo}/>
        </form>
    )
}
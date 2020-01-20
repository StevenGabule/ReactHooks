import React, {useContext, useEffect, useReducer, useState} from 'react';
import ReactDOM from 'react-dom';
// import App from "./AppFunction";
// import App from './AppClass';
// import App from "./AppCalculator";
// import App from "./AppCalculatorV2";
// import App from "./AppCalculatorV3";
// import App from "./Login";
// import App from "./Register";
// import App from "./AppFetching";
// import AppCRUD from "./AppCRUD";
import * as serviceWorker from './serviceWorker';
import TodoContext from "./Context";
import TodoReducer from "./Reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import axios from "axios";

const useAPI = endpoint => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await axios.get(endpoint);
        setData(response.data);
    }
    return data;
};

const App = () => {
    const initialState = useContext(TodoContext);
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    const savedTodos = useAPI("https://hooks-api-glx465q80.now.sh/todos");
    useEffect(() => {
        dispatch({
            type: "GET_TODOS",
            payload: savedTodos
        })
    }, [savedTodos]);
    return (
        <TodoContext.Provider value={{state, dispatch}}>
            <TodoForm/>
            <TodoList/>
        </TodoContext.Provider>
    )
};


/*
export const UserContext = createContext();
const username = "dave";
<UserContext.Provider value={username}>
</UserContext.Provider>
*/

ReactDOM.render(<App/>, document.getElementById('root'));
if (module.hot) {
    module.hot.accept();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

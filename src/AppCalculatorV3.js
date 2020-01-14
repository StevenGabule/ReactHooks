import React, { useReducer, useEffect } from "react";
const initialState = {
    stage: "left",
    left: "",
    operator: "",
    right: ""
};

function calc(leftStr, operator, rightStr) {
    const left = parseInt(leftStr, 10);
    const right = parseInt(rightStr, 10);
    switch (operator) {
        case "+":
            return left + right;
        case "-":
            return left - right;
        case "×":
            return left * right;
        case "÷":
            return left / right;
        default:
            return 0;
    }
}

function reducer(state, action) {
    switch (action.type) {
        case "number":
            return {
                ...state,
                [state.stage]: state[state.stage] + action.payload
            };
        case "operator":
            return {
                ...state,
                left:
                    state.stage === "right"
                        ? calc(state.left, state.operator, state.right)
                        : state.left,
                right: "",
                stage: "right",
                operator: action.payload
            };
        case "calculate":
            return {
                stage: "left",
                left: calc(state.left, state.operator, state.right),
                operator: "",
                right: ""
            };
        case "clear":
            return initialState;
        default:
            return state;
    }
}

const operators = ["+", "-", "*", "/"];

function AppCalculatorV3() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleKeyDown(event) {
        const type = /[0-9]/.test(event.key)
            ? "number" : operators.includes(event.key)
                ? "operator" : ["=", "Enter"].includes(event.key)
                    ? "calculate" : event.key === "c" ? "clear" : false;
        if (!type) return;
        return dispatch({ type, payload: event.key });
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button onClick={({ target }) => dispatch({ type: "number", payload: target.textContent })}>
                    {num}
                </button>
            ))}
            {operators.map(op => (
                <button onClick={({ target }) => dispatch({ type: "operator", payload: target.textContent })}>
                    {op}
                </button>
            ))}
            <button onClick={() => dispatch({ type: "calculate" })}>=</button>
            <button onClick={() => dispatch({ type: "clear" })}>C</button>
            <div
                style={{
                    width: "100%",
                    height: "2rem",
                    marginTop: "1rem",
                    padding: "0.5rem",
                    backgroundColor: "hsl(170, 15%, 80%)",
                    fontFamily: "monospace"
                }}
            >
                {state.left + state.operator + state.right}
            </div>
        </div>
    );
}

export default AppCalculatorV3;


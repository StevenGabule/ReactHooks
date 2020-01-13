import React, {useEffect, useState} from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        document.title = `You have clicked ${count} times`;
    });

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    };

    const toggleLight = () => {
        setIsOn(prevIsOn => !prevIsOn)
    };

    return (
        <>
            <h2>Counter</h2>
            <button onClick={incrementCount}>I was clicked by {count}</button>
            <h2>Toggle Light</h2>
            <div onClick={toggleLight} style={{height: '50px', width: '50px', background: isOn ? "yellow" : "grey"}}/>
            <h2>Toggle Image</h2>
            <img src={isOn ? "https://icon.now.sh/highlight/fd0" : "https://icon.now.sh/highlight/aaa"}
                 style={{height: '50px', width: '50px'}} alt="flashlight" onClick={toggleLight} />
        </>
    )
};

export default App;
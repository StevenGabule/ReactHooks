import React, {useState} from 'react'
import "./bootstrap.min.css"

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        const userData = {
            username,
            password
        };
        
        setUser(userData);
        setUsername('');
        setPassword('');
    };

    return (
        <div style={{textAlign: 'center'}} className={"container w-25"}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={{display: "grid", alignItems: "center", justifyItems: "center"}}>
                <div className="form-group">
                    <input type="text"
                           className={"form-control"}
                           placeholder={"Enter username"}
                           value={username}
                           onChange={event => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        className={"form-control"}
                        onChange={event => setPassword(event.target.value)}
                        placeholder={"Enter password"}/>
                </div>
                <button type="submit" className={"btn btn-sm btn-info"}>Submit</button>
            </form>
            {user && JSON.stringify(user, null, 2)}
        </div>
    )
}


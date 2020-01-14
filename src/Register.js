import React, {useState} from "react";
import "./bootstrap.min.css"

const initialFormState = {
    username: "",
    password: "",
    email: "",
};

export default function Register() {
    const [form, setForm] = useState(initialFormState);
    const [user, setUser] = useState(null);

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        setUser(form);
        setForm(initialFormState)
    };

    return (
        <div style={{textAlign: 'center'}} className={"container w-25"}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} style={{display: "grid", alignItems: "center", justifyItems: "center"}}>
                <div className="form-group">
                    <input type="text"
                           name="username"
                           onChange={handleChange}
                           value={form.username}
                           className={"form-control"}
                           placeholder={"Enter username"}
                    />
                </div>
                <div className="form-group">
                    <input type="email" name={"email"}
                           onChange={handleChange}
                           value={form.email}
                           className={"form-control"}
                           placeholder={"Enter email"}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name={"password"}
                        value={form.password}
                        onChange={handleChange}
                        className={"form-control"}
                        placeholder={"Enter password"}/>
                </div>
                <button type="submit" className={"btn btn-sm btn-info"}>Submit</button>
            </form>
            {user && JSON.stringify(user, null, 2)}
        </div>
    )
}
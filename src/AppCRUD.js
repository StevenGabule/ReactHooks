import React, {useContext} from "react";
import {UserContext} from "./index";

export default function AppCRUD() {
    const value = useContext(UserContext);
    return <div>hello, {value}</div>
}
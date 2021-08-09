import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    let history = useHistory();

    const handleSubmit = () => {
        history.push("/dashboard")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}
export default Login;
import React, {useState,} from 'react';
import {useForm} from 'react-hook-form';
import {useStepContext} from "@mui/material";

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            email,
            password,
            name
        });
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    return (
        <div className="App">
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" value={email} onChange={handleChangeEmail}/>
                </div>
                <div>
                    <label htmlFor="password">パスワード</label>
                    <input
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChangePassword}
                        type="password"
                    />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={name} onChange={handleChangeName}/>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}
export default Form;




import React, {useState,} from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("")
    const [error,setError] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(
            email,
            name
        )
        try {
          await  axios.post("http://localhost:3003/Form", {
              name: name,
              email: email,
              password: password
          })
            console.log('suc')
        } catch (err) {
            console.log(err);
            setError(true)
        }
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
        <div className="">
            <h1 style={{display: "inline-block", margin: "5% 16%"}}>Form</h1>
            <form onSubmit={handleSubmit} style={{ marginLeft: "28%"}}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={name} onChange={handleChangeName}/>
                    {error && "here wrong"}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" value={email} onChange={handleChangeEmail}/>
                    {error && "here wrong"}
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
                    {error && "here wrong"}
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}
export default Form;

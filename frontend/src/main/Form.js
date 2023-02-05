import React, {Fragment, useState} from "react";
import {useForm} from "react-hook-form";

const error_message = {
    color:"red",
    fontSize:"15px",
}

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { register, formState: {errors} } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            email,
            password,
            name,
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
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" value={email}
                           onChange={handleChangeEmail} {...register('email', {required: true})}/>
                    {errors.email && <div>入力が必須の項目です</div>}
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={name} onChange={handleChangeName}/>
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
                    <button type="submit">ログイン</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
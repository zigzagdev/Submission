import React, {useState,} from 'react';
import axios from "axios";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {sha256} from 'crypto-hash';

const form = {
    margin: " 5% ",
    display: "flex",
}

const inputs = {
    margin: "0 50%",
    width: "180%",
    height: "30px"
}

const errorInputs = {
    margin: "0 50%",
    width: "180%",
    height: "30px",
    color: "red"
}

const opinions = {
    width: "180%",
    margin: "0 50%",
    height: "100px"
}

const Form = () => {
    const [email, setEmail] = useState("");
    const [correctEmail, setCorrectEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [correctPass, setCorrectPass] = useState(false);
    const [name, setName] = useState("");
    const [correctName, setCorrectName] = useState(false);
    const [opinion, setOpinion] = useState("");
    const [correctOpinion, setCorrectOpinion] = useState(false);
    const inputHandler = (e) => {
        setOpinion(e.target.value);
    };
    const [error, setError] = useState(false);
    const UseNav = useNavigate();
    const hashedPassword = sha256(password);
    console.log(password)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.length < 5 || name.length > 100) {
            setCorrectName(true);
            return;
        }
        if (!/^[a-zA-Z]+$/.test(name)) {
            setCorrectName(true);
            return;
        }
        if (opinion.length < 5 || opinion.length > 1000) {
            setCorrectOpinion(true);
            return;
        }
        if (password.length < 8 || password.length >30) {
            setCorrectPass(true)
            return;
        }
        try {
            await axios.post("http://localhost:3003/Form", {
                    name: name,
                    email: email,
                    password: hashedPassword,
                    opinion: opinion
                }
            )
        } catch (error) {
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
    const handleChangeOpinion = (e) => {
        setOpinion(e.target.value);
    };
    return (
        <div className="Form">
            <h1 style={{display: "inline-block", margin: "5% 20% 2% 25%"}}>Submission</h1>
            <div style={{border: "3px solid #000000", margin: "0 30%", borderRadius: "5%"}}>
                <div style={form}>
                    <form onSubmit={handleSubmit}>
                        <div style={{margin: "5% 0", display: "flex"}}>
                            <div style={{width: "30%"}}>
                                <label htmlFor="name">Name:</label>
                            </div>
                            <div style={{flex: 1}}>
                                <input
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={handleChangeName}
                                    style={inputs}
                                    required={error}
                                />
                                <div style={errorInputs}>{correctName && "here wrong"}</div>
                            </div>
                        </div>
                        <div style={{margin: "5% 0", display: "flex"}}>
                            <div style={{width: "30%"}}>
                                <label htmlFor="email">Email:</label>
                            </div>
                            <div style={{flex: 1}}>
                                <input id="email"
                                       name="email"
                                       value={email}
                                       onChange={handleChangeEmail}
                                       style={inputs}
                                       required={true}
                                />
                                <div style={errorInputs}>{correctEmail && "here wrong"}</div>
                            </div>
                        </div>
                        <div style={{margin: "5% 0", display: "flex"}}>
                            <div style={{width: "30%"}}>
                                <label htmlFor="password">Password:</label>
                            </div>
                            <div style={{flex: 1}}>
                                <input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handleChangePassword}
                                    type="password"
                                    style={inputs}
                                    required={true}
                                />
                                <div style={errorInputs}>{correctPass && "here wrong"}</div>
                            </div>
                        </div>
                        <div style={{margin: "5% 0", display: "flex"}}>
                            <div style={{width: "30%"}}>
                                <label htmlFor="opinion">Opinion:</label>
                            </div>
                            <div style={{flex: 1}}>
                            <textarea id="opinion"
                                      name="opinion"
                                      value={opinion}
                                      onChange={inputHandler}
                                      style={opinions}
                                      required={true}
                            />
                                <div style={errorInputs}>{correctOpinion && "here wrong"}</div>
                            </div>
                        </div>
                        <div style={{display: "inline-block", margin: "5% 100%"}}>
                            <Button onClick={handleSubmit} variant="contained" sx={"background-color: lightblue;"}>
                                <strong style={{color: "black"}}>Send</strong>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form;
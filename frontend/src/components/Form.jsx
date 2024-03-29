import React from 'react';
import axios from "axios";
import {Button} from "@mui/material";
import bcrypt from 'bcryptjs';
import {useFormik} from "formik";

const form = {
    margin: " 5% ", display: "flex",
}

const inputs = {
    margin: "0 20px", width: "300px", height: "30px"
}

const errorInputs = {
    color: "red", flex: 1, margin: "0 20px",
}

const opinions = {
    width: "300px", margin: "0 20px", height: "100px"
}

const initialValues = {
    name: '', email: '', password: '', opinion: ''
}


const onSubmit = (values) => {
    const hashedPassword = bcrypt.hashSync(values.password);
    console.log(hashedPassword)
    try {
        axios({
            url: "http://localhost:3003/Form", method: "post", data: {
                name: values.name, email: values.email, password: hashedPassword, opinion: values.opinion
            }
        })
    } catch (error) {
        console.log('errors');
    }
}

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name must be required !!'
    } else if (!/^[a-zA-Z]+$/.test(values.name)) {
        errors.name = 'Name must be in alphabet !!'
    } else if (values.name.length < 4 || values.name.length > 100) {
        errors.name = 'Name must be filled in 4 to 100 characters. !'
    }

    if (!values.email) {
        errors.email = 'Your email must be required !!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email format is invalid';
    }

    if (!values.password) {
        errors.password = 'Password must be required !!'
    } else if (values.password.length < 8 || values.password.length > 1000) {
        errors.password = 'Password must be filled in 8 to 1000 characters .'
    } else if (!/^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/.test(values.password)) {
        errors.password = 'Password format is only allowed to use alphabet, number and symbol .';
    }

    if (!values.opinion) {
        errors.opinion = 'Your opinion  must be required !!'
    } else if (values.opinion.length < 5 || values.opinion.length > 10000) {
        errors.opinion = 'Opinion must be filled in 5 to 10000 characters .'
    }
    return errors;
}

const Form = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
    return (
        <div className="Form">
            <h1 style={{display: "inline-block", margin: "5% 20% 2% 25%"}}>Submission</h1>
            <div style={{border: "3px solid #000000", margin: "0 300px", borderRadius: "5%"}}>
                <div style={form}>
                    <form onSubmit={formik.handleSubmit}>
                        <div style={{margin: "5% 0", display: "flex"}}>
                            <div style={{width: "90px"}}>
                                <label htmlFor="name">Name:</label>
                            </div>
                            <div style={{flex: 1}}>
                                <input
                                    id="name"
                                    name="name"
                                    style={inputs}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div style={errorInputs}>{formik.errors.name}</div>) : null}
                            </div>
                        </div>
                        <div style={{margin: "5% 0", display: "flex"}}>
                            <div style={{width: "90px"}}>
                                <label htmlFor="email">Email:</label>
                            </div>
                            <div style={{flex: 1}}>
                                <input id="email"
                                       name="email"
                                       style={inputs}
                                       onChange={formik.handleChange}
                                       value={formik.values.email}
                                       onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div style={errorInputs}>{formik.errors.email}</div>) : null}
                            </div>
                        </div>
                        <div style={{margin: "5% 0", display: "flex"}}>
                            <div style={{width: "90px"}}>
                                <label htmlFor="password">Password:</label>
                            </div>
                            <div style={{flex: 1}}>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    style={inputs}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div style={errorInputs}>{formik.errors.password}</div>) : null}
                            </div>
                        </div>
                        <div style={{margin: "5% 0", display: "flex"}}>
                            <div style={{width: "90px"}}>
                                <label htmlFor="opinion">Opinion:</label>
                            </div>
                            <div style={{flex: 1}}>
                            <textarea id="opinion"
                                      name="opinion"
                                      style={opinions}
                                      onChange={formik.handleChange}
                                      value={formik.values.opinion}
                                      onBlur={formik.handleBlur}
                            />
                                {formik.touched.opinion && formik.errors.opinion ? (
                                    <div style={errorInputs}>{formik.errors.opinion}</div>) : null}
                            </div>
                        </div>
                        <div style={{marginLeft: "210px"}}>
                            <Button variant="contained" sx={"background-color: lightblue;"} type="submit">
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
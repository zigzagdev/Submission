import React, {useEffect, useState, Fragment} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";

const opinions = {
    width: "180%",
    height: "100px"
}

const Update = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false)
    const {id} = useParams();
    const navGate = useNavigate();

    const handleChange = (e, index) => {
      const newUser =[...users]
      newUser[index][e.target.name] = e.target.value
      setUsers(newUser);
    };

    const handleSubmit = async (e, index) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3003/Update/${id}`, users[index]);
            navGate(`/${id}`);
        } catch (err) {
            setError(true)
        }
    };

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get(`http://localhost:3003/${id}`);
            setUsers(res.data)
        }
        getUsers()
    }, [])
    return (
        <div>
            {users.map((eachData, i) => (
            <Fragment>
                <div style={{margin: "5% 8%", display: "flex"}}>
                    <div style={{width: "30%"}}>
                        <label htmlFor="name" style={{fontSize: "25px"}}>Name:</label>
                    </div>
                    <div style={{margin: "0 6%"}}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={users[i].name}
                            onChange={(e) =>handleChange(e, i)}
                        />
                    </div>
                </div>
                <div style={{margin: "5% 8%", display: "flex"}}>
                    <div style={{width: "30%"}}>
                        <label htmlFor="name" style={{fontSize: "25px"}}>Email:</label>
                    </div>
                    <div style={{margin: "0 6%"}}>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={users[i].email}
                            onChange={(e) =>handleChange(e, i)}
                        />
                    </div>
                </div>
                <div style={{margin: "5% 8%", display: "flex"}}>
                    <div style={{width: "30%"}}>
                        <label htmlFor="name" style={{fontSize: "25px"}}>Opinion:</label>
                    </div>
                    <div style={{margin: "0 6%"}}>
                        <textarea
                            id="opinion"
                            name="opinion"
                            value={users[i].opinion}
                            onChange={(e) =>handleChange(e, i)}
                            style={opinions}
                        />
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{marginLeft: "45%"}}
                        onClick={(e)=>handleSubmit(e, i)}>
                        Send
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        style={{marginLeft: "2%"}}
                        onClick={() => {navGate(`/${id}`)}}>
                        Back
                    </Button>
                </div>
            </Fragment>
            ))}
        </div>
    );
};

export default Update;















































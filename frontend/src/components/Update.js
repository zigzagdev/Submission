import React, {useEffect, useState, Fragment} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


const opinions = {
    width: "180%",
    height: "100px"
}

const Update = () => {
    const [user, setUser] = useState([]);
    const [data, setData] = useState({
        name: "",
        email: "",
        opinion: ""
    })
    const [error, setError] = useState(false)
    const {id} = useParams();
    const navGate = useNavigate();

    const handleChange = (e) => {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        try {
            await axios.put(`http://localhost:3003/update/${id}`, data);
            navGate(`/${id}`);
        } catch (err) {
            setError(true)
        }
    };

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get(`http://localhost:3003/${id}`);
            setUser(res.data)
        }
        getUser()
    }, [])
    return (
        <div>
            {user.map((eachData) => (
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
                            value={data.name}
                            onChange={handleChange}
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
                            value={data.email}
                            onChange={handleChange}
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
                            defaultValue={eachData.opinion}
                            onChange={handleChange}
                            style={opinions}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>Send</button>
                </div>
            </Fragment>
            ))}
        </div>
    );
};

export default Update;
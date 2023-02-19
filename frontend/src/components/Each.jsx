import React, {Fragment, useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";

const outFrame = {
    margin: "7% 34%",
    backgroundColor: "snow",
    padding: "1% 2%",

}

const suc = {
    margin: "3% 1%",
}

const err = {}

const Each = () => {
    const [user, setUser] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get(`http://localhost:3003/${id}`);
            setUser(res.data)
        }
        getUser()
    }, [])
    return (
        <div style={outFrame}>
            {
                (() => {
                    if (user.length !== 0) {
                        return (
                            <div style={suc}>
                                {user.map((eachUser) => (
                                    <Fragment>
                                        <div style={{margin: "5% 8%", display: "flex"}}>
                                            <div style={{width: "30%"}}>
                                                <label htmlFor="name" style={{fontSize: "25px"}}>Name:</label>
                                            </div>
                                            <div style={{margin: "0 6%"}}>
                                                <span style={{fontSize: "25px"}}>{eachUser.name}</span>
                                            </div>
                                        </div>
                                        <div style={{margin: "5% 8%", display: "flex"}}>
                                            <div style={{width: "30%"}}>
                                                <label htmlFor="name" style={{fontSize: "25px"}}>Email:</label>
                                            </div>
                                            <div style={{margin: "0 6%"}}>
                                                <span style={{fontSize: "25px"}}>{eachUser.email}</span>
                                            </div>
                                        </div>
                                        <div style={{margin: "5% 8%", display: "flex"}}>
                                            <div style={{width: "30%"}}>
                                                <label htmlFor="name" style={{fontSize: "25px"}}>Opinion:</label>
                                            </div>
                                            <div style={{margin: "0 6%"}}>
                                                <span style={{fontSize: "25px", wordBreak: "break-word"}}>
                                                    {eachUser.opinion}
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{margin: "5% 15%", display: "flex"}}>
                                            <div style={{width: "40%", margin: "0 5%"}}>
                                                <Button variant="contained" color="secondary">
                                                    Delete
                                                </Button>
                                            </div>
                                            <div style={{margin: "0 20%"}}>
                                                <Link to={`/update/${eachUser.id}`}>
                                                    <Button variant="contained" color="primary">
                                                        Update
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                        )
                    } else {
                        return (
                            <div style={{margin: "5% 8%", display: "flex"}}>
                                <span style={{fontSize: "25px"}}>No records are here ...</span>
                            </div>
                        )
                    }
                })()
            }
        </div>
    )

}
export default Each;

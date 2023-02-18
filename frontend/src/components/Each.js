import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

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
    console.log(user)
    return (
        <div>
            {user.map(eachUser =>
                <div>
                    {eachUser.password}
                </div>
            )}
        </div>
    )

}
export default Each;
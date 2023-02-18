import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const Each = () => {
    const [user, setUser] = useState();
    const {id} = useParams();
console.log(id);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3003/${id}`);
                setUser(res.data);
                console.log(res)
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser()
    }, [id]);
    return (
        <div>
            {user[0].email}
        </div>
    );
};

export default Each;
import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';
import axios from "axios";
import each from "./Each";

const Chart = () => {
    const [apiData, setApiData] = useState([]);
    let apiFetch = [];
    let eachMonth = [];
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await axios.get(`http://localhost:3003`);
            res.data.map(function (value) {
                let date = new Date(value.updated_at)
                apiFetch.push(date.getMonth() + 1)
            });
            let eachMonth = apiFetch.reduce(function (prev, current) {
                prev[current] = (prev[current] || 0) + 1;
                return prev;
            }, []);

            setApiData({
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Registered Records here.',
                            labelColors: 'black',
                            data: [eachMonth[1], eachMonth[2], eachMonth[3], eachMonth[4], eachMonth[5], eachMonth[6]
                                , eachMonth[7], eachMonth[8], eachMonth[9], eachMonth[10], eachMonth[11], eachMonth[12]
                            ],
                            backgroundColor: ['Red', 'Blue', 'Purple', 'Yellow', 'Green', 'Pink', 'Black',
                                'Gray', 'Orange', 'Brown', 'DarkBlue', 'LightGreen'],
                        }
                    ]
                },
            );
        };
        fetchAPI()
    }, []);
    console.log(apiData)
    return (
        <div>
            <Bar data={apiData}/>
        </div>
    );
};

export default Chart;

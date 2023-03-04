import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai'],
        datasets: [
            {
                label: 'Registered Records here.',
                data: [4, 5, 1, 23, 55]
            }
        ]
    }
    console.log(data)
    return (
        <div>
            <Bar data={data}></Bar>
        </div>
    );
};

export default Chart;
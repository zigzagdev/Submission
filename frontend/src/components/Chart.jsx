import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Registered Records here.',
                data: [4, 25, 1, 23, 55, 33, 10, 23, 19, 55, 44, 8],
                backgroundColor: ['Red', 'Blue', 'Purple', 'Yellow', 'Green', 'Pink', 'Black',
                    'Gray', 'Orange', 'Brown', 'DarkBlue', 'LightGreen'
                ],
            }
        ]
    }
    return (
        <div>
            <Bar data={data} style={{margin: '7% 20% 5% 20%'}}></Bar>
        </div>
    );
};

export default Chart;
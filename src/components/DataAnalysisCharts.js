import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const DataAnalysisCharts = () => {
    // Random data for charts
    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const lineData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
            {
                label: 'Visitors',
                data: [10, 30, 50, 20, 40],
                fill: false,
                borderColor: 'rgba(54, 162, 235, 0.5)',
            },
        ],
    };

    const pieData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'Colors',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="data-analysis-charts">
            <div className="chart">
                <h4>Sales Data</h4>
                <Bar data={barData} />
            </div>
            <div className="chart">
                <h4>Visitor Trends</h4>
                <Line data={lineData} />
            </div>
            <div className="chart">
                <h4>Color Preferences</h4>
                <Pie data={pieData} />
            </div>
        </div>
    );
};

export default DataAnalysisCharts;

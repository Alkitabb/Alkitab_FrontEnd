import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js'

// import { spacing } from '@mui/system';

function BarChart() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend,
        BarElement,
    )

    const today = new Date();
    const labels = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        return date.toLocaleString('default', { day: 'numeric', month: 'short' });
    }).reverse();

    const data = {
        barThickness: 2,
        labels: labels,
        datasets: [{
            borderRadius: 19,
            barPercentage: 0.5,
            barThickness: 15,
            maxBarThickness: 15,
            minBarLength: 20,
            label: 'Sales',
            data: [75, 99, 80, 70, 56, 55, 70],
            backgroundColor: [
                '#7017E0',
            ],
            borderColor: [
                '#6078EC',
            ],

            borderWidth: 1,
        }]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow the chart to adjust its size
        // ...rest of your options...
        scales: {
            y: {
                beginAtZero: false, // Set to false to start the axis at a specific point
                min: 20, // Set the minimum value for the y-axis
                max: 100, // Set the minimum value for the y-axis
                ticks: {
                    stepSize: 20, // Customize the step size between ticks
                    callback: (value) => `${value / 1}k`, // Format the tick labels
                },
                border: {
                    display: false
                },
                grid: {
                    display: false
                }
            },
            x: {
                border: {
                    display: false
                },
                grid: {
                    display: false
                }
            }
        },

        plugins: {
            legend: {
                display: false, // Set to false to hide the legend
            },
        },
    }

    return (
        <div className='p-5 pb-10 bg-white w-full h-[369px] rounded-xl flex flex-col justify-between transition-all duration-300 border-primary-10 border border-opacity-20' >
            <header className='flex items-center justify-between'>
                <h3 className='text-paragraph-1 font-medium'>
                    Summary
                </h3>

                <p className='text-label-1 text-black-10'>This Week</p>
            </header>
            <Bar data={data} options={options} className='w-[100%] p-3 h-full' />
        </div >
    )
}

export default BarChart
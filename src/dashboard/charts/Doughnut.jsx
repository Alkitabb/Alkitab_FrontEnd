import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'
// import { spacing } from '@mui/system';

function DoughnutChart() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend,
        ArcElement
    )

    const data = {

        // labels: [
        //     'Red',
        //     'Blue',
        //     'Yellow'
        // ],


        datasets: [{
            // borderRadius: 19,
            // barPercentage: 0.5,
            barThickness: 1,
            maxBarThickness: 10,
            // minBarLength: 20,
            label: 'My First Dataset',
            data: [300, 200, 100],

            backgroundColor: [
                '#5570F1',
                '#FFCC91',
                '#97A5EB',
            ],

            hoverOffset: 4,

            borderWidth: 1,

            // innerWidth: 200
        }]

    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow the chart to adjust its size
        innerHeight: 5,
        innerWidth: 20
    }

    return (
        <div className='p-3 lg:p-5 bg-white h-[337px] rounded-2xl w-full flex flex-col justify-between transition-all duration-300 border-primary-10 border border-opacity-80'>
            <header className='flex items-center justify-between'>
                <h3 className='text-paragraph-1 font-medium'>
                    Marketting
                </h3>

                <p className='text-label-1 text-black-10'>This Week</p>
            </header>
            <div className='grid place-content-center h-full'>
                <div className="min-w-[250px] h-[250px] w-full rounded-full bg-background relative">
                    <div className='p-10 bg-white rounded-full absolute z-5 top-[36%] left-[34%]'></div>
                    <Doughnut data={data} options={options} className='absolute p-3 z-10' />
                </div>
            </div>
        </div>
    )
}

export default DoughnutChart
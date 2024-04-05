import React, { useEffect, useState } from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { productData } from '../recoil_state';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Product price over Last Months',
    },
  },
};

let data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Discounted Price',
      data: [1200,1501,1302,1203,1005],
      borderColor: 'rgba(185, 236, 255, 1)',
      backgroundColor: 'rgba(185, 236, 255, 1)',
    },
    {
      label: 'Actual Price',
      data: [2000,2000,2000,2000,2000],
      borderColor: 'rgba(136, 124, 253, 1)',
      backgroundColor: 'rgba(136, 124, 253, 1)',
    },
  ],
};

export default function (){
  const product = useRecoilValue(productData);
  const [lineData, setLineData] = useState(data);
  useEffect(()=>{
    data.datasets[0].data = product.discountedPrice;
    data.datasets[1].data = product.discountedPrice.map(()=>{return product.actualPrice});
    setLineData(data);  
  },[product])
  return (<>
    <Line options={options} data={JSON.parse(JSON.stringify(lineData))} />
    </>)
}
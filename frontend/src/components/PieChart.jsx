import React ,{useState,useEffect}from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { productData } from '../recoil_state';
import { useRecoilState, useRecoilValue } from 'recoil';
ChartJS.register(ArcElement, Tooltip, Legend);

let data = {
  labels: ['Delivered', 'Process Delivery', 'Returned'],
  datasets: [
    {
      label: 'Orders',
      data: [312,212,50],
      backgroundColor: [
        'rgba(19, 85, 255, 1)',
        'rgba(136, 124, 253, 1)',
        'rgba(185, 236, 255, 1)',
      ],
      borderColor: [
      'rgba(19, 85, 255, 0.1)',
      'rgba(136, 124, 253, 0.1)',
      'rgba(185, 236, 255, 0.1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function (){
  const product = useRecoilValue(productData);
  const [piedata,setpiedata] = useState(data);

  useEffect(()=>{
    data.datasets[0].data = product.orderSummary;
    setpiedata(data);
  },[product]);

  return <Doughnut data={JSON.parse(JSON.stringify(piedata))} />;
}

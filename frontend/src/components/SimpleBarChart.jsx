import React, { useEffect,useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {productData} from '../recoil_state'
import { useRecoilValue } from 'recoil';

let data = [
  { name: '1*', customer_reviews: 54, amt: 54 },
  { name: '2*', customer_reviews: 32, amt: 32 },
  { name: '3*', customer_reviews: 53, amt: 53 },
  { name: '4*', customer_reviews: 43, amt: 43 },
  { name: '5*', customer_reviews: 64, amt: 64 },
];
const SimpleBarChart = () => {
  const product = useRecoilValue(productData);
  const [bardata,setbardata] =useState([...data]);
  useEffect(()=>{
    data[0].customer_reviews = product.reviews[0];
    data[1].customer_reviews = product.reviews[1];
    data[2].customer_reviews = product.reviews[2];
    data[3].customer_reviews = product.reviews[3];
    data[4].customer_reviews = product.reviews[4];
    data[0].amt = product.reviews[0];
    data[1].amt = product.reviews[1];
    data[2].amt = product.reviews[2];
    data[3].amt = product.reviews[3];
    data[4].amt = product.reviews[4];
    setbardata(data);
  },[product]);

  return (
    <BarChart
      width={400}
      height={300}
      data={[...bardata]}

      margin={{
        top: 10, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend displayName="Product reviews" />
      <Bar dataKey="customer_reviews" fill="#1355ff" />
    </BarChart>
  );
}

export default SimpleBarChart;
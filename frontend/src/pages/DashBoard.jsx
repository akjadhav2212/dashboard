
import SimpleBarChart from '../components/SimpleBarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import { productData } from '../recoil_state';
import { useRecoilState } from 'recoil';
import products from '../products';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function(){
    const[product, setproduct] = useRecoilState(productData);
    const navigate = useNavigate();
    const token = 'Bearer '+localStorage.getItem('jwtToken');
    useEffect(()=>{
        axios.get('https://dashboard-b5yd.onrender.com/api/v1/authuser',{headers:{'Authorization':token}})
        .then((response)=>{
            if(!response.data.success){
                navigate('/signin');
            }
        })
        .catch((error)=>{
            navigate('/signin');
        })
    },[]);
    async function handler(){
        try{
            const response = await axios.get('https://dashboard-b5yd.onrender.com/api/v1/getproduct',{headers:{
                'Authorization':token
            }});
            if(!response.data.success)throw new Error(response.data.message);
            setproduct(response.data.product[0]);
        }
        catch(error){
            navigate('/signin')
            console.log(error);
        }

    }
    return (<>
    <div className='flex justify-end'>
        <button onClick={()=>{
            localStorage.removeItem('jwtToken')
            navigate('/signin');
            
            }} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 m-2">
            Logout
        </button>
    </div>

    <div>
        <div className='flex flex-col sm:flex-row sm:justify-around h-40 mt-10'>
            <div className='flex flex-col justify-center items-center border rounded-lg shadow-xl sm:p-10 m-2'>
                <h1>Product Name</h1>
                <h3>{product.productname}</h3>
            </div>
            <div className='flex flex-col justify-center items-center border rounded-lg shadow-xl sm:p-10 m-2'>
                <h1>Category</h1>
                <h3>{product.category}</h3>
            </div>
            <div className='hover:bg-slate-100 flex flex-col justify-center items-center border rounded-lg shadow-xl sm:p-10 m-2'>
                <button onClick={handler}>Get Random Product</button>
            </div>
        </div>
    </div>
    <div className='mt-10'>
        <div className='flex flex-col md:flex-row w-auto justify-around items-center border rounded-lg shadow-lg'>
            <div className='m-2'>
                <PieChart />   
            </div>
            <div className='m-2'>
                <SimpleBarChart />
            </div>
        </div>
        <div className='w-full h-auto sm:h-96 p-1 border rounded-lg shadow-lg mt-10'>
            <div className='flex justify-center w-full h-full'>
                <LineChart/>
            </div>
        </div>
    </div>

    </>)
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WarningMessage from '../components/WarningMessage';
import axios from 'axios';
const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
    const navigate = useNavigate();
  const handleSignUp = async () => {
    // Add your sign-up logic here, such as sending a request to your backend
    try{
        const response =await axios.post('https://dashboard-b5yd.onrender.com/api/v1/signup',{
            username:email,
            firstname:firstName,
            lastname:lastName,
            password:password
        });
        if(response.data.success){
            setMessage(response.data.message)
            setTimeout(()=>{navigate('/signin');},2000)
            
        }
    }
    catch(error){
        console.log(error);
        setMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-64 p-2 border border-gray-300 rounded mb-2"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-64 p-2 border border-gray-300 rounded mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-64 p-2 border border-gray-300 rounded mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-64 p-2 border border-gray-300 rounded mb-2"
      />
      <button onClick={handleSignUp} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 m-1">
        Sign Up
      </button>
      
      <button onClick={()=>{navigate('/signin')}} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Navigate to Sign in
      </button>
      {message==''?null:<WarningMessage message={message}/>}
    </div>
  );
};

export default Signup;
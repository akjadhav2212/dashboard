import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WarningMessage from "../components/WarningMessage";

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleSignIn = async () => {
        try{
            const response = await axios.post('https://dashboard-b5yd.onrender.com/api/v1/signin',{username:email,password:password});
            if(response.data.success){
                localStorage.setItem('jwtToken',response.data.token);
                setTimeout(()=>navigate('/'),2000);
            }
            setMessage(response.data.message);
        }
        catch(error){
            console.log(error.response.data);
            setMessage(error.response.data.message);
        }

    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
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
          className="w-64 p-2 border border-gray-300 rounded mb-4"
        />
        <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 m-1">
          Sign In
        </button>
        <button onClick={()=>{navigate('/signup')}} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Navigate to Sign Up
        </button>
        {message==''?null:<WarningMessage message={message} />}
        
      </div>
    );
  };
  
export default  Signin
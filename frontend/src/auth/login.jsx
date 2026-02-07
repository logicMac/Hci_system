import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../api/authApi";

export default function Login(){
   const navigate = useNavigate(); 
   const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
   }); 

   const handleLogin = async (e) => {
    e.preventDefault();

    try{
        const res = await LoginApi(loginForm);
        
        if (!res.ok) {
            throw new Error("Failed Login");
        }

        const data = await res.json();

        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("role", data.user.role);

        if (data.role === "admin") {
            navigate('/');
        } else {
            navigate('/')
        }

    } catch (err) {
        console.error("Error fetching data from api");
        throw err; 
    }
   }

   return(
        <div> 
            <div className="flex flex-row justify-center items-center h-screen">
                <form 
                    onSubmit={handleLogin}
                    className="flex flex-col justify-center items-center p-10 space-y-10 shadow-xl rounded-md">
                    <h1 className="text-3xl font-semibold">LOGIN</h1>
                    
                    <div className="flex flex-col space-y-8 w-full">
                        <input type="text" 
                        onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                        className="p-2 focus:outline-none bg-gray-100 rounded-md py-4 focus:ring-2 transition duration-200"
                        placeholder="Enter username"
                        />
                        
                        <input type="text"  
                            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                            className="p-2 focus:outline-none bg-gray-100 rounded-md py-4 focus:ring-2 transition duration-200"
                            placeholder="Enter password"
                        />
                    </div>
        
                    <button
                        type="submit"
                        className="p-2 text-white bg-black rounded-md w-full hover:scale-105 transition duration-200"
                    >
                        Login
                    </button>

                    <Link to="/register">
                        Don't have an account? Register 
                    </Link>
                </form>
            </div> 
        </div>
   );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterApi } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [message, setMessage] = useState({message: ""});
    const [registerData, setRegisterData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        role: "employee"
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        if (registerData.confirmPassword !== registerData.password) {
            console.error("Password does not match");
            return;
        }

        try{
            const res = await RegisterApi(registerData);

            if (!res.ok) {
               throw new Error("An Error occured during registration");
            }

            const data = await res.json();
            
            setMessage(data.message);
            
            navigate('/login');
        } catch (err) {
            console.error("Cannot send data to API", err);
            return;
        }
    }

    return( 
        <div>
            <div className="flex flex-row justify-center items-center h-screen">
                <form 
                    onSubmit={handleRegister}
                    className="flex flex-col justify-center items-center space-y-10 p-10 shadow-xl">
                    <h1 className="text-3xl font-semibold">REGISTER</h1>

                    <div className="flex flex-col space-y-8 w-full">
                        <input type="text" 
                            onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                            className="p-2 focus:outline-none bg-gray-100 rounded-md focus:ring-2 transition duration-200"
                            placeholder="username"
                        />

                        <input type="text" 
                            onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                            className="p-2 focus:outline-none bg-gray-100 rounded-md focus:ring-2 transition duration-200"
                            placeholder="password"
                        />
                        
                        <input type="text" 
                            onChange={(e) => setRegisterData({...registerData, phoneNumber: e.target.value})}
                            className="p-2 focus:outline-none bg-gray-100 rounded-md focus:ring-2 transition duration-200"
                            placeholder="Phone number"
                        />
                        
                        <input type="text" 
                            onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value })}
                            className="p-2 focus:outline-none bg-gray-100 rounded-md focus:ring-2 transition duration-200"
                            placeholder="Confirm password"
                        />
                        
                        <select className="w-full p-2 border border-black rounded-md">
                            <option value="admin" onChange={(e) => setRegisterData({...registerData, role: e.target.value})}>admin</option>
                            <option value="employee" onChange={(e) => setRegisterData({...registerData, role: e.target.value})}>employee</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="p-2 text-white bg-black rounded-md w-full hover:scale-105 trasition duration-200"
                    >
                        Register
                    </button>
                    
                    <Link to="/login">
                        Already have an account? Login
                    </Link>
                </form>
            </div>
        </div>
    );
}
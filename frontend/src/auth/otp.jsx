import { useState } from "react";
import { VerifyOtp } from "../api/authApi";

export default function OtpPage({otp, setOtp}) {
    const [error, setError] = useState("");

    const handleOtp = async (e) => {
        e.preventDefault();

        if (!otp) {
            setError("Enter OTP to proceed");
            return;
        }

        try {
            const res = await VerifyOtp(otp.user_id, otp.otp);
            
            if(!res.ok) {
                setError(res.msg);
            } else {
                
            }
            

        } catch (err) {
            setError("Failed to authenticate", err);
        }
        
    }

    return(
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex shadow-xl rounded-md bg-white p-5">
                <form onSubmit={handleOtp}
                    className="flex flex-col justify-center items-center"
                >
                    <h1>OTP verification</h1>
                    <p>Enter OTP code below</p>

                    <p className="text-red-500">
                        {error}
                    </p>
                    
                    <input 
                        type="text" 
                        className="p-2 border border-black rounded-md"
                        onChange={(e) => setOtp({...otp, otp: e.target.value})}
                    />
                    
                    <button className="p-2 bg-black text-white rounded-md">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
} 
import dotenv from 'dotenv';
dotenv.config();


export async function sendSms(phone: string, otp: string) {
    try {
        const res = await fetch("https://app.philsms.com/api/v3/sms/send", {
           method: "POST",
           headers: {
                Authorization: `Bearer ${process.env.PHILSMS_KEY}`,
                "Content-type" : "application/json",
                Accept: "application/json",  
           },
           body: JSON.stringify({
                recipient: phone,
                message: `Your OTP code is ${otp}. Do not share this with anyone`
           })
        }); 
    } catch (err) {
        console.error("Error sending sms to user");
    }
}
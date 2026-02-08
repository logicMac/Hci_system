type LoginData = {
    username: string;
    password: string;
}

export async function LoginApi(loginData: LoginData) {
    const LOGIN_URL = "http://localhost:3000/api/users/login";

    if (!loginData) {
        return console.log("The api does not receive the data");
    }

    try{
        const res = await fetch(LOGIN_URL,{
            method: "POST",
            headers: {"Content-type" :"application/json"},
            body: JSON.stringify(loginData)
        })

        const data = await res.json();

        if (!res.ok) {
            
            return {
                ok: false,
                msg: data.msg 
            }
        }

        return {
            ok: true,
            msg: data.msg,
            data
        };
    } catch (err) {
        console.log(`Error sending data to backend: ${err}`);
        throw err;
    }
}

type RegisterData = {
    username: string,
    password: string,
    phone_number: string;
    role: string
}

export async function RegisterApi(registerData: RegisterData) {

    const REGISTER_URL = "http://localhost:3000/api/users/register";

    try {
        const res = await fetch(REGISTER_URL, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(registerData)
        });

        const data = await res.json();

        if (!res.ok) {
            // Return structured error response
            return {
                ok: false,
                msg: data.msg || "Registration failed"
            };
        }

        return {
            ok: true, 
            msg: data.msg || "Registration successful",
            data
        };

    } catch (err) {
        console.error("Error sending data to Backend");
        return {
            ok: false,
            msg: err instanceof Error ? err.message : "An error occurred"
        };
    }
}

type verifyOtpParams = {
    id: number,
    otp: string
}

export async function VerifyOtp(verifyOtp: verifyOtpParams) {
    if(!verifyOtp.otp || !verifyOtp.id) {
        console.log("Api dont recieve the otp or ID");
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/api/users/register", {
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(verifyOtp)
        });
    } catch (err) {
        console.log("Cannot send data to backend");
    }
}

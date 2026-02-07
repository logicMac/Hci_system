type LoginData = {
    username: string;
    password: string;
}

export async function LoginApi(loginData: LoginData) {
    const LOGIN_URL = "http://localhost:5173/auth/login";

    if (!loginData) {
        return console.log("The api does not receive the data");
    }

    try{
        const res = await fetch(LOGIN_URL,{
            method: "POST",
            headers: {"Content-type" :"application/json"},
            body: JSON.stringify(loginData)
        })

        if (!res.ok) {
            const error = await res.text();
            throw new Error(error || "Login Failed");
        }

        const data = await res.json();

        return data;
    } catch (err) {
        console.log(`Error sending data to backend: ${err}`);
        throw err;
    }
}
type RegisterData = {
    username: string,
    password: string,
    phone_number: number;
    role: string
}

export async function RegisterApi(registerData: RegisterData) {

    const REGISTER_URL = "http://localhost:5173/auth/register";

    try {
        const res = await fetch(REGISTER_URL, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(registerData)
        });
        if (!res.ok) {
            const error = await res.text();
            throw new Error(error || "Registeration Failed");
        }

        const data = await res.json();

        return data;

    } catch (err) {
        console.error("Error sending data to Backend");
        throw err;
    }
}
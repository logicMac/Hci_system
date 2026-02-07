import {Link, useNavigate} from "react-router-dom";

export default function AdminNav () {
    const navigate = useNavigate();

    const handleLogout = () => {
        const token = sessionStorage.getItem("token");

        if (token) {
            sessionStorage.removeItem("token");
            navigate('/login');
        } else {
            console.error("Failed to logout");
        } 
    } 

    return(
        <div>
            <nav className="flex flex-row fixed justify-between items-center inset-0 space-y-10 w-60 bg-gray-100 p-5 h-full">
                <Link
                    to="#"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition"
                >
                    <i className="fa-solid fa-house"></i>
                    <span>Feed</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition"
                >
                    <i className="fa-solid fa-chart-line"></i>
                    <span>Analytics</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition"
                >
                    <i className="fa-solid fa-file-lines"></i>
                    <span>Reports</span>
                </Link>

                <Link
                    to="#"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition"
                >
                    <i className="fa-solid fa-bell"></i>
                    <span>Notifications</span>
                </Link>
                
                <div className="mt-auto">
                    <button 
                        onClick={handleLogout}
                        className="p-2 text-white bg-red-500 rounded-md transition duration-200"
                        >
                            Logout
                    </button>
                </div>
            </nav>
        </div>
    );
} 
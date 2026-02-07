import AdminNav from "./nav";

export default function AdminDashboard () {
    return(
        <div className="flex ml-60">

            <AdminNav/>
            <div className="flex flex-col h-screen justify-center items-center">
                <section className="grid grid-rows-3">
                    <div className="w-20 bg-gray-100"></div>

                    <div></div>

                    <div></div>
                </section>
            </div>
        </div>
    );
}
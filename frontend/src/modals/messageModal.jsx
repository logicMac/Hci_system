
export default function MessageModal({message, onClose}) {
    return(
        <div className="flex items-center justify-center bg-black/50 fixed inset-0 shadow-xl z-50">
            <div className="bg-white rounded-md shadow-xl p-6 w-80">
                <form className="flex flex-col justify-center items-center space-y-5"> 
                    <h1 className="text-lg text-slate-200 font-semibold">{message}</h1>
                    
                    <button 
                        onClick={onClose}
                        className="p-2 text-slate-200 bg-blue-500 rounded-md"
                    >
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
}
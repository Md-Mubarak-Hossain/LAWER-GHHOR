import { useContext } from "react";
import { AuthContext } from "../Contexts/Context";
import Load from "../pages/Shared/Load/Load";

const ErrorBoundary=()=>{
    const {loading}=useContext(AuthContext)
    if (loading) {return <Load/>}
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            
            <h2>No internet connected</h2>
            <p>You are now offline</p>
        </div>
    )
}
export default ErrorBoundary;
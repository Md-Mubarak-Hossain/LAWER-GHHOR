import { useContext } from "react";
import { AuthContext } from "../Contexts/Context";
import Load from "../pages/Shared/Load/Load";
import cloud from '../assets/svg/cloud.svg';
const ErrorBoundary = () => {
    const { loading } = useContext(AuthContext)
    if (loading) { return <Load /> }
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
            <div>
                <img src={cloud} alt="offline" className="w-10 h-10 bg-white rounded-full" />                
                <p className="text-3xl my-5">No internet</p>
                <ul typeof="disc" className="list menu text-2xl">Try:
                    <li className="list list-style-dot mx-4 my-2 text-lg">Checking the network cables, modem, and router</li>
                    <li className="list list-style-dot mx-4 my-2 text-lg">Reconnecting to Wi-Fi</li>
                    <li className="list list-style-dot mx-4 my-2 text-lg text-blue-400">Running Windows Network Diagnostics</li>
                </ul>
                <h2 className="text-xl">ERR_INTERNET_DISCONNECTED</h2>
            </div>

        </div>
    )
}
export default ErrorBoundary;
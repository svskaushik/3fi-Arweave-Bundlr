import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
// import Blockie from "./Blockie";

const Account = () => {

    const {isAuthenticated, Moralis, account, logout, isWeb3Enabled} = useMoralis();
    const [authText, setAuthText] = useState("Authenticate");
    const [authState, setAuthState] = useState(false)

    const handleCustomLogin = async () => {
        await Moralis.authenticate({
          provider: "web3Auth",
          clientId: "BP_dGonobACd_as1e50cIsiSIvzqA3E1sIM_xVJU9JNvC5wms8Y8P82T0L5XaLjxD4KEGn7B6y-5TCO-n6hZdL4",
          chainId: 0x13881,
          // appLogo: "./logo192.png"
        })
        setAuthText("Logout");
        setAuthState(true);
    };
    const logger = () => {
        console.log(isAuthenticated, account, isWeb3Enabled, authText);
    }
    const logoutHandle= async () => {
        await logout();
        window.localStorage.removeItem("connectorId")
        setAuthText("Authenticate")
        setAuthState(false);
    }
    return(
    <>
    <div className="auth" onClick={authState? logoutHandle : handleCustomLogin}>
        {authText}
    </div>
    <button onClick={logger}>Check</button>
    </>
    )
}

export default Account;
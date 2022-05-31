import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { Spin } from "antd";

const Auth = () => {

    const { isAuthenticating, Moralis, isAuthenticated, account, isWeb3Enabled, logout } = useMoralis();
    const handleCustomLogin = async () => {
        await Moralis.authenticate({
            provider: "web3Auth",
            clientId: "BP_dGonobACd_as1e50cIsiSIvzqA3E1sIM_xVJU9JNvC5wms8Y8P82T0L5XaLjxD4KEGn7B6y-5TCO-n6hZdL4",
            chainId: 0x13881,
            // appLogo: "./logo192.png"
        })
    };
    const handleLogin = async () => {
        await Moralis.authenticate()
    }
    const logger = () => {
        console.log(isAuthenticated, account, isWeb3Enabled);
    }
    const logoutHandle= async () => {
        await logout();
        window.localStorage.removeItem("connectorId")
    }

    return(
        <>
        <div className="auth" onClick={account? logoutHandle : handleLogin}>
                <Spin spinning={isAuthenticating} >{account ? "Authenticated" : "Authenticate"}</Spin>
        </div>
        </>
    )
}

export default Auth
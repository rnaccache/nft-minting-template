import React from "react";
import { useAppSelector } from "../../app/hooks";
import Paused from "./paused";
import Mint from "./mint";
import InstallMetamask from "./installmetamask";

function Index() {

    const isMetamaskInstalled = useAppSelector((state)=> state.metamask.isMetaMaskInstalled);
    const isPaused = useAppSelector((state)=> state.metamask.isPaused);


    

    function Display(){
        // Check if wallet is installed
        if(!isMetamaskInstalled){
            // If Metamask is not installed, prompt to install
            return <InstallMetamask />
        } else {
           // Check if mint is paused/live
            if(isPaused){
                return <Paused />
            } else {
                return <Mint />
            }
        }
    }

    return(
        <div>
            <Display />   
        </div>
    )
}

export default Index;
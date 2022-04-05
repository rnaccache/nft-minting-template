import { createSlice } from "@reduxjs/toolkit";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

// Define a type for the slice state
interface MetamaskState {
  isMetaMaskInstalled: boolean,
  isMetaMaskApproved: boolean;
  isCorrectNetwork: boolean;
  isPaused: boolean;
  accounts: string;
  test: number,
  web3: Promise<unknown>;
}

const loadWeb3 = async () => {
  const provider = await detectEthereumProvider();
  if(provider){
    return new Web3();
  }
  return provider;
}

// Define the initial state using that type
const initialState: MetamaskState = {
    isMetaMaskInstalled: false,
    isMetaMaskApproved: false,
    isCorrectNetwork: false,
    isPaused: true,
    accounts: "",
    test: 1,
    web3: loadWeb3(),
  }

  export const metamaskSlice = createSlice({
  name: "metamask",
  initialState,
  reducers: {
    increment: (state) => {
      state.test += 1;
    },
    decrement: (state) => {
      state.test -= 1;
    },
  },
});

export const { increment, decrement } = metamaskSlice.actions;

export default metamaskSlice.reducer;

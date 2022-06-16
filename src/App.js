import './App.css';
import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider';



const Myapp = () => {

  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null
  })

  useEffect(() => {
    const loadProvider = async() => {
      const provider = await detectEthereumProvider();
      setWeb3Api({
        web3: new Web3(provider),
        provider
      })
    }
    loadProvider();
  }, [])
  
  return (
    <div className="App">
      Hello World!
      <div>
        Connect your Wallet       
        <div>
          <button 
              onClick={async () => {
                const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
                console.log(accounts)
              }}
              >
              Enable Ethereum!
          </button>
        </div> 
        <div>
          <button>Mint</button>
        </div>
      </div>
    </div>
  );
  
}

export default Myapp;

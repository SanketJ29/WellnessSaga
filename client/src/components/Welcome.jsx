import React from "react";
import { useEffect, useState } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";

const Welcome = () => {
  const [showInstallMetamaskMessage, setShowInstallMetamaskMessage] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  useEffect(() => {
    const connectButton = document.getElementById('connectWalletButton');
    if (connectButton) {
      connectButton.addEventListener('click', connectWallet);
    }
    return () => {
      if (connectButton) {
        connectButton.removeEventListener('click', connectWallet);
      }
    };
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.enable();
        if (accounts.length > 0) {
          setWalletConnected(true);
        } else {
          setWalletConnected(false);
        }
        console.log('Wallet connected');
      } catch (error) {
        console.error('Failed to connect wallet:', error);
        setWalletConnected(false);
      }
    } else {
      setShowInstallMetamaskMessage(true);
      setWalletConnected(false);
    }
  };

  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
        <div class="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.linkpicture.com/q/49c669cb-55cc-4255-8a20-142c724a7012_1.jpeg"/>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font text-5xl mb-12 font-medium text-cyan-400 font-mono">WELLNESS SAGA</h1>
            <p class="mb-3 leading-9 text-1.5xl text-cyan-500 font-mono">Introducing "Wellness Saga," our award-winning Blockchain-based Healthcare platform. We emerged victorious in the Filecoin track at the "<a href="https://codecell-cmpn-vesit.ves.ac.in/Syrusnew.html" target="_blank" rel="noopener noreferrer " class="text-cyan-500 underline hover:text-cyan-600">SYRUS HACKATHON</a>" 2023, organized by <a href="https://vesit.ves.ac.in/code-cell" target="_blank" rel="noopener noreferrer " class="text-cyan-500 underline hover:text-cyan-600">CodeCell-VESIT</a>, and Devfolio. It transforms healthcare by securely storing medical data on an immutable blockchain called Filecoin, promoting interoperability, data privacy, and decentralization.</p>
            <p class="mb-5 leading-relaxed text-1.5xl text-cyan-500 font-mono">Join us in shaping the future of healthcare, where health truly becomes wealth.</p>
            <div class="flex justify-center">
              <button type="button" id="connectWalletButton"
                className="flex flex-row justify-center items-center my-2 bg-cyan-700 p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-white font-semibold font-mono text-xl">{walletConnected ? 'Wallet Already Connected' : 'Connect Wallet'}</p>
              </button>
              {showInstallMetamaskMessage && ( <p className="text-red-500 text-xl mt-5 ml-4 font-mono">Please install MetaMask wallet to connect.</p>)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;

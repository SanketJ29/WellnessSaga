import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import stepsimg from "../assets/heart-8154559_1280-removebg-prev.png";

const Steps = () => {
    return (
      <div>
      <Navbar/>
            <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
  <div class="container px-5 py-5 mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full ml-10">
      <div class="lg:w-2/4 md:w-1/2 md:pr-10 md:py-1">
        <div class="flex relative pb-4">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-2 bg-cyan-800 pointer-events-none ml-2"></div>
          </div>
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-400 inline-flex items-center justify-center text-white relative z-10">
          </div>
          <div class="flex-grow pl-2 ">
            <h2 class="title-font font-bold text-2xl text-cyan-300 mb-3 tracking-wider font-mono mt-2">STEP 1</h2>
            <p class="text-xl font-mono text-cyan-400">Login/Register to website and Connect Wallet. Users need to install MetaMask wallet to connect.</p>
          </div>
        </div>
        <div class="flex relative pb-6">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-2 bg-cyan-800 pointer-events-none ml-2"></div>
          </div>
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-400 inline-flex items-center justify-center text-white relative z-10">
          </div>
          <div class="flex-grow pl-2">
            <h2 class="font-bold title-font text-2xl text-cyan-300 mb-3 tracking-wider font-mono mt-2">STEP 2</h2>
            <p class="font-mono text-cyan-400 text-xl">Go to <Link to="/upload" class="text-cyan-400 underline hover:text-cyan-600">UPLOAD</Link> page in order to securely store the documents. After uploading, the user will see the details like CID (Content Identifier), size of the file, time of upload, etc and a link on which user can view their document on the IPFS server.</p>
          </div>
        </div>
        <div class="flex relative pb-6">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-2 bg-cyan-800 pointer-events-none ml-2"></div>
          </div>
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-400 inline-flex items-center justify-center text-white relative z-10">
          </div>
          <div class="flex-grow pl-2">
            <h2 class="font-bold font-mono title-font text-2xl text-cyan-300 mb-3 tracking-wider mt-2">STEP 3</h2>
            <p class="font-mono text-cyan-400 text-xl">The storage used is <a href="https://web3.storage/" target="_blank" rel="noopener noreferrer " class="text-cyan-400 underline hover:text-cyan-600">Web3 Storage</a>. Users can visit the site and into their account, where they can access and manage their uploaded documents. Users can delete the file or can access the corresponding FIL address on FILFOX platform, which serves as a Filecoin explorer.</p>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-400 inline-flex items-center justify-center text-white relative z-10">
          </div>
          <div class="flex-grow pl-2">
            <h2 class="font-bold font-mono title-font text-2xl text-cyan-300 mb-3 tracking-wider mt-2">STEP 4</h2>
            <p class="font-mono text-cyan-400 text-xl">Users can explore different services under <Link to="/services" class="text-cyan-400 underline hover:text-cyan-600">SERVICES</Link> page and can avail the services by sending Ethereum (ETH) via secure transactions.</p>
          </div>
        </div>
      </div>
      <div class="lg:max-w-2xl lg:w-full md:w-1/2 w-5/9 object-cover object-center rounded-lg py-10 ml-auto mr-10">
  {/* <img src="https://www.linkpicture.com/q/b89fb9d3-150b-489e-915c-9c66ca8158ad.jpeg" alt="step" class="object-cover object-center rounded-lg" /> */}
  {/* <img src="https://www.linkpicture.com/q/heart-8154559_1280-removebg-prev.png" alt="step" class="object-cover object-center" /> */}
  <img src={stepsimg} alt="step" class="object-cover object-center" />
</div>

    </div>
  </div>
</section>
        </div>
    );
};

export default Steps;

<<<<<<< HEAD
import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">HCARE</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap text-base justify-around">
            <a class="mr-5 hover:text-white">Home</a>
            <a class="mr-5 hover:text-white">Dashboard</a>
            <Link to="/upload" className="mr-5 hover:text-white">
        Upload Data
      </Link>
          </nav>
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <Link>Login</Link>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
=======
const NavbarItem = ({ title, classProps }) => {
    return (
        <li className = {'mx-4 cursor-pointer ${classProps}'}>
            {title}
        </li>
    )
}
const Navbar = () => {
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">

            </div>
            <ul className="text-black md:flex hiddent list-none flex-row justify-between items-center flex-initial">
                {["Dashboard", "Payment", "Login", "Wallets"].map((item,index) => (
                    <NavbarItem key={item+index} title={item}/>
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
>>>>>>> 65eb323b0779d44167e21f28e35f60c91caada08

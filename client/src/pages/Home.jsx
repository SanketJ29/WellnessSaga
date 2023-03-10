import React from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import Transactions from "../components/Transactions";
// import AuthContextProvider from './context/AuthContext';
import { useContext } from "react";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Footer />
      <Transactions/>
    </div>
  );
};

export default Home;

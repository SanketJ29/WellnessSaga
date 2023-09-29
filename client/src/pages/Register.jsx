import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../components/AuthDetails";
import { toast } from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("User Registered Successfully");
        console.log(userCredential);
      })
      .catch((error) => {
        toast.error("Error with user registration");
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <form
            className="items-center justify-center max-w-[300px] w-full mx-auto rounded-lg p-8 px-8"
            onSubmit={registerHandler} style={{ width: '100%', maxWidth: '400px' }}
          >
          <h2 className="text-4xl text-cyan-400 dark:text-white font-bold text-center mb-8 font-mono">
            Register
          </h2>
          <div className="flex flex-col text-cyan-200 py-2 font-mono text-2xl">
            <label>Email:</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col text-cyan-200 py-2 font-mono text-2xl">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className="w-full my-5 py-2 bg-blue-800 text-white font-bold rounded-lg text-2xl font-mono"
            type="submit"
          >
            Register
          </button>
        </form>
        <AuthDetails className="" />
      </div>
      </div>
    </div>
  );
};

export default Register;

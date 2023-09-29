import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../components/AuthDetails";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authState, setAuthState] = useState(null);

  const loginHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.message("User Signed In Successfully");
        console.log(userCredential);
      })
      .catch((error) => {
        toast.error("Error with User Sign In");
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <form className="items-center justify-center max-w-[300px] w-full mx-auto rounded-lg p-8 px-8" onSubmit={loginHandler} style={{ width: '100%', maxWidth: '400px' }}>
            <h2 className="text-4xl text-cyan-400 dark:text-white font-bold text-center mb-8 font-mono">
              Login
            </h2>
            <div className="flex flex-col text-cyan-200 py-2 font-mono text-xl">
              <label className="text-2xl">Email:</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col text-cyan-200 py-2 font-mono text-xl">
              <label className="text-2xl">Password:</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className="w-full my-5 py-2 bg-blue-800 text-white font-bold rounded-lg text-2xl font-mono" type="submit">
              Login
            </button>
            <div className="flex justify-center items-center text-cyan-200 font-mono text-2xl mb-3">
              <p>OR</p>
            </div>
            <Link to="/register">
              <button className="w-full my-5 bg-cyan-600 py-2 mt-1 text-white font-bold rounded-lg text-2xl font-mono">
                Register
              </button>
            </Link>
          </form>
          <AuthDetails className="" />
        </div>
      </div>
    </div>
  );
};

export default Login;

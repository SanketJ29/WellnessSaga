<<<<<<< HEAD
import React from "react";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: '/upload',
      element: <Upload/>,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};
=======
import {Navbar, Welcome, Footer} from './components';
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Footer/>

    </div>
  )
}
>>>>>>> 65eb323b0779d44167e21f28e35f60c91caada08

export default App;

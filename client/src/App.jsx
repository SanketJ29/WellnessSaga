// import React from "react";
// import Home from "./pages/Home";
// import Upload from "./pages/Upload";
// import Services from "./pages/Services";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Team from "./pages/Team";
// import Steps from "./pages/Steps";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: '/upload',
//       element: <Upload/>,
//     },
//     {
//       path: '/services',
//       element: <Services/>,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/register",
//       element: <Register />,
//     },
//     {
//       path: "/team",
//       element: <Team />,
//     },
//     {
//       path: "/steps",
//       element: <Steps />,
//     },
//   ]);
//   return (
//     <div className="app">
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import Team from './pages/Team';
import Steps from './pages/Steps';

const App = () => {
  return (
    <div className="app">
      <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/upload" element={<Upload />} />
        <Route path="/services" element={<Services />}  />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/team" element={<Team />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;

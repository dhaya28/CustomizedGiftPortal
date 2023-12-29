// import { useState, createContext , useRef } from "react";
// import React from 'react'
// import ProjectLogin from "./ProjectLogin";
// import ProjectSignup from "./ProjectSignup";

// export const MyContext = createContext({});

// export default function ProjectContext() {
//     const InputUsername = useRef();
//     const values = {
//         InputUsername 
//       };
//   return (
//     <MyContext.Provider value={values}>
//       <ProjectLogin/>
//       <ProjectSignup/>
//     </MyContext.Provider>
//   )
// }

import React, { createContext, useState } from "react";
import ProjectLogin from "./ProjectLogin";
import ProjectSignup from "./ProjectSignup";
import Navbar from "./Navbar";

export const MyContext = createContext({});

export default function ProjectContext({children}) {
  const [InputUsername,setInputUsername] = useState('User');
  const login = (userData) => {
    setInputUsername(userData);
  };

  const logout = () => {
    setInputUsername(null);
  };
  const values = {
    InputUsername,login,logout
  };

  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  );
}
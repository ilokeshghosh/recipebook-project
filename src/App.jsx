import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Outlet} from 'react-router-dom'
import {Home,Recipe,Categories,Archive, Construction} from "./pages";
function App() {
  return (
    <div className="w-full">
       {/* nav bar */}
       <nav className="md:px-20 px-10  py-2 z-50 transition-[background-color] duration-500 ease-linear w-full mx-auto fixed left-0 md:top-0 flex items-center gap-10 justify-between bg-[#292E36]">
        {/* logo */}
        <img
          className="md:w-[80px] w-[40px]"
          src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Tasty-removebg-preview_uG-BxfeAY.png?updatedAt=1703355313793"
          alt="logo"
        />

        {/* links */}
        <ul className="text-[#E1B168] flex md:gap-24 gap-5 text-xs md:text-lg md:font-bold italic">
          <li>About</li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>

        <Outlet/>
    </div>
  );
}

export default App;

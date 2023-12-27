import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Home, Recipe, Categories, Archive, Construction } from "./pages";
function App() {
  return (
    <div className="w-full">
      {/* nav bar */}
      <nav className="md:px-20 py-2 z-50 transition-[background-color] duration-500 ease-linear w-full mx-auto fixed left-0 md:top-0 flex items-center md:gap-10 gap-10 justify-between bg-[#292E36]">
        {/* logo */}
        <NavHashLink smooth to={"/#home"} className={"hidden md:inline-block"}>
          <img
            className="md:w-[80px]  w-[40px]"
            src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Tasty-removebg-preview_uG-BxfeAY.png?updatedAt=1703355313793"
            alt="logo"
          />
        </NavHashLink>

        {/* links */}
        <ul className="text-[#E1B168]   w-full flex md:gap-24 px-2 gap-4 md:justify-end justify-between text-xs md:text-lg md:font-bold  italic">
          <li>
            <NavHashLink smooth to={"/#home"}>
              Home
            </NavHashLink>
          </li>
          <li>
            <NavLink to={"/categories"}>Categories</NavLink>
          </li>
          <li>
            <NavHashLink smooth to={"/#loved"} className={"flex"}>
              Most <span className="not-italic">💖</span> Recipe
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to={"/#special"}>
              Special
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to={"/#gallery"}>
              Gallery
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to={"/#contact"}>
              Contact
            </NavHashLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;

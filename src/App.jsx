import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Home, Recipe, Categories, Archive, Construction } from "./pages";
import {
  FiHome,
  FaRegStar,
  TbCategory2,
  RiContactsLine,
  RiGalleryLine,
  FaRegHeart,
} from "./icons/icons.index";
function App() {
  function handleNavbar(e) {
    if (e.target.classList.contains("home")) {
      document.querySelector("nav").style.backgroundColor = "transparent";
    } else if (e.scrollY === 0) {
      document.querySelector("nav").style.backgroundColor = "transparent";
    } else {
      document.querySelector("nav").style.backgroundColor = "#292E36";
    }
  }


  return (
    <div className="w-full">
      {/* nav bar */}
      <nav
        onLoad={handleNavbar}
        className="md:px-20 py-2 z-50 transition-[background-color] duration-500 ease-linear w-full   mx-auto fixed left-0 md:top-0 bottom-0 md:h-24 h-16 border rounded-lg md:rounded-none md:border-0 border-[#E1B168] flex items-center md:gap-10 mb-1 md:mb-0 gap-10 justify-between "
      >
        {/* logo */}
        <NavHashLink smooth to={"/#home"} className={"hidden md:inline-block"}>
          <img
            className="md:w-[80px]  w-[40px]"
            src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Tasty-removebg-preview_uG-BxfeAY.png?updatedAt=1703355313793"
            alt="logo"
          />
        </NavHashLink>

        {/* links */}
        <ul className="md:text-[#E1B168] text-white  w-full flex md:gap-24 px-5 md:px-2 gap-4 md:justify-end justify-between text-xs md:text-lg md:font-bold  italic">
          <li>
            <NavHashLink
              id="navHome"
              className={"home"}
              onClick={(e) => {}}
              smooth
              to={"/#home"}
            >
              <FiHome
                className={`text-2xl inline-block md:hidden 
                }`}
              />
              <h1 className="hidden md:inline-block">Home</h1>
            </NavHashLink>
          </li>
          <li>
            <HashLink
              id="navCategory"
              onClick={(e) => {
                handleNavbar(e);
              }}
              to={"/categories"}
            >
              <TbCategory2
                className={`text-2xl transition-all ease-linear duration-300  inline-block md:hidden`}
              />
              <h1 className="hidden md:inline-block">Categories</h1>
            </HashLink>
          </li>
          <li>
            <NavHashLink
              id="navLoved"
              onClick={(e) => {
                handleNavbar(e);
              }}
              smooth
              to={"/#loved"}
              className={"flex"}
            >
              <h1 className="hidden md:inline-block">
                {" "}
                Most <span className="not-italic ">💖</span> Recipe
              </h1>
              <FaRegHeart
                className={`text-2xl transition-all ease-linear duration-300  inline-block md:hidden`}
              />
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              id="navSpecial"
              onClick={(e) => {
                handleNavbar(e);
              }}
              smooth
              to={"/#special"}
            >
              <h1 className="hidden md:inline-block">Special</h1>
              <FaRegStar
                className={`text-2xl transition-all ease-linear duration-300  inline-block md:hidden`}
              />
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              id="navGallery"
              onClick={(e) => {
                handleNavbar(e);
              }}
              smooth
              to={"/#gallery"}
            >
              <h1 className="hidden md:inline-block">Gallery</h1>
              <RiGalleryLine
                className={`text-2xl transition-all ease-linear duration-300  inline-block md:hidden `}
              />
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              id="navContact"
              onClick={(e) => {
                handleNavbar(e);
              }}
              smooth
              to={"/#contact"}
            >
              <h1 className="hidden md:inline-block">Contact</h1>
              <RiContactsLine
                className={`text-2xl transition-all ease-linear duration-300  inline-block md:hidden 
                }`}
              />
            </NavHashLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import services from "../apiService/services";
import { HashLink, NavHashLink } from "react-router-hash-link";
import {Gallery, ItemCard, MostLoved, Special,Contact} from '../components'

export default function Home() {
  const [url, setUrl] = useState(null);
  const[loading, setLoading] = useState(true);
  useEffect(() => {
    services.getIngredientImage("Eggs").then((data) => {
      const url = data;
      setUrl(url);
    });
    setLoading(false);
  }, []);

  

  // onWheel={handleNavbar}
  function handleNavbar(e) {
    
    if (
      e.pageY >
      document.querySelector(".hero-page").clientHeight +
        document.querySelector("nav").clientHeight
    ) {
      document.querySelector("nav").style.backgroundColor = "#292E36";
    } else if (e.pageY < document.querySelector(".hero-page").clientHeight) {
      document.querySelector("nav").style.backgroundColor = "transparent";
    }else if(window.scrollY>0){
      document.querySelector("nav").style.backgroundColor = "#292E36";
    }else if(window.scrollY===0){
      document.querySelector("nav").style.backgroundColor = "transparent";
    }
  }

  function checkText(e){
    console.log('test',e.currentTarget);
  }

  return (
    <div onWheelCapture={handleNavbar} onLoadCapture={handleNavbar}   className="w-full">
      {/* landing page content wrapper */}
      <main
        className="w-full"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        {/* hero container */}
        <div
        id="home"
        className="w-full relative hero-page">
          {/* video container */}
          <div className=" h-screen  ">
            <video
              className="w-full h-full object-cover -z-10 "
              muted
              autoPlay
              loop
            >
              <source src="https://ik.imagekit.io/8fgpvoiai/tastyhub/video1%20(online-video-cutter.com)_mbKr_vVEb.mp4?updatedAt=1703684910132" />
            </video>
          </div>

          {/* hero content wrapper */}
          <div className="absolute top-0 left-0 h-full w-full text-white  bg-black/60 flex flex-col justify-center items-center">
            {/* hero content */}
            <div className="w-[90%] md:w-[60%] flex flex-col gap-3">
              {/* hero title text */}
              <div className=" md:text-[5rem] gap-2 md:gap-12  text-3xl font-bold italic flex md:flex-col justify-center ">
                <h1>Welcome</h1>
                <h1>to Tasty Hub</h1>
              </div>

              {/* tagline */}
              <h2 className="text-lg text-center md:text-start italic w-full">
                Unleash the Chef in You with Tasty Hub! Our Easy, Step-by-Step
                Recipes Promise Delicious Results, Because Great Food Shouldn’t
                Come with a Complicated Manual
              </h2>

              <NavLink  to={"/categories"} className={'mx-auto w-full  flex justify-center md:justify-start items-center'}>
                <button className="border-2  italic px-6 py-2 border-[#E1B168]  w-[50%] md:w-[20%] md:mx-0 mx-auto font-bold">
                  See Categories
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* today's special , popular and usp container */}
       

        <Special/>
       

        {/* mostly loved wrapper*/}
        
        <MostLoved/>


        {/* gallery section */}
        <Gallery/>

        {/* contact page and footer */}
        <Contact/>
      </main>
    </div>
  );
}

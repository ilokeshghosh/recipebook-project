import { useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  function addOpen(e) {
    console.log(document.querySelectorAll(".panel"));
    document.querySelectorAll(".panel").forEach((item) => {
      if (item.classList.contains("open")) {
        item.classList.remove("open");
      }
      e.currentTarget.classList.add("open");
    });
  }

  function addActive(e) {
    if (e.propertyName.includes("flex")) {
      e.target.classList.toggle("open-active");
    }
  }

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
    }
  }

  return (
    <div onWheelCapture={handleNavbar} className="w-full">
      {/* nav bar */}
      <nav className="md:px-20 px-10  py-2 z-50 transition-[background-color] duration-500 ease-linear w-full mx-auto fixed left-0 md:top-0 flex items-center gap-10 justify-between md:bg-transparent bg-[#292E36]">
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

      {/* landing page content wrapper */}
      <main
        className="w-full"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        {/* hero container */}
        <div className="w-full relative hero-page">
          {/* video container */}
          <div className=" h-screen  ">
            <video
              className="w-full h-full object-cover -z-10 "
              muted
              autoPlay
              loop
            >
              <source src="src\assets\video1.mp4" />
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

              <button className="border-2 italic px-6 py-2 border-[#E1B168]  w-[50%] md:w-[20%] md:mx-0 mx-auto font-bold">
                View Menu
              </button>
            </div>
          </div>
        </div>

        {/* today's special , popular and usp container */}
        <div
          className="h-screen gap-8 md:gap-0 flex flex-col justify-between"
          style={{ fontFamily: "Cormorant Infant, sans-serif" }}
        >
          {/* upper container */}
          <div className=" flex flex-col justify-evenly md:gap-6 gap-3 md:h-[75%] pt-16 md:pt-28">
            {/* today's special */}
            <div className="flex flex-col justify-center md:justify-start md:items-start items-center gap-2 md:px-20 px-5">
              {/* heading */}
              <h1 className="md:text-4xl text-2xl tracking-wider font-bold italic">
                Today's Special
              </h1>

              {/* menu */}
              <div className="flex justify-between md:justify-start flex-wrap items-center gap-16 w-full  overflow-x-auto  no-scrollbar">
                {/* item container */}
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="md:w-[100px] w-[50px] rounded-full"
                    src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <h2 className="italic md:text-2xl text-xl font-bold">
                    Burger
                  </h2>
                </div>
                {/* item container */}
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="md:w-[100px] w-[50px] rounded-full"
                    src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <h2 className="italic md:text-2xl text-xl font-bold">
                    Burger
                  </h2>
                </div>
              </div>
            </div>

            {/* popular Categories */}
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-2 md:px-20 px-5">
              {/* heading */}
              <h1 className="md:text-4xl text-2xl tracking-wider font-bold italic">
                Popular Categories
              </h1>

              {/* menu */}
              <div className="flex justify-between  md:justify-start items-center flex-wrap gap-16 w-full  overflow-x-auto  no-scrollbar">
                {/* item container */}
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="md:w-[100px] w-[50px] rounded-full"
                    src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <h2 className="italic md:text-2xl text-xl font-bold">
                    Burger
                  </h2>
                </div>
                {/* item container */}
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="md:w-[100px] w-[50px] rounded-full"
                    src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <h2 className="italic md:text-2xl text-xl font-bold">
                    Burger
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* usp section */}
          <div
            className="md:h-[25%]   md:px-10 w-full bg-cover  bg-no-repeat bg-center text-white py-6 flex justify-center items-center origin-center md:gap-20"
            style={{
              backgroundImage: `url('https://ik.imagekit.io/8fgpvoiai/tastyhub/Background%201_r721GBDP2.png?updatedAt=1703355983620')`,
            }}
          >
            {/* 1st box */}
            <div className="flex flex-col justify-center items-center gap-3 md:gap-1">
              {/* image */}
              <img
                className="md:w-[60px] w-[30px]"
                src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Icon%201_iw4RiWUx5.png?updatedAt=1703356370909"
                alt=""
              />
              {/* heading */}
              <h3 className="md:text-xl text-xs font-bold">Vegan Cuisine</h3>

              {/* sub-heading */}
              <h4 className="text-center md:text-lg text-xs">
                Professional consider everyone probls small niche friendly.
              </h4>
            </div>

            {/* line  */}
            <div className="border h-[80%] w-0 border-slate-400 "></div>

            {/* 2nd box */}
            <div className="flex flex-col justify-center items-center gap-3 md:gap-1">
              {/* image */}
              <img
                className="md:w-[60px] w-[30px]"
                src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Icon%203_S8JGDmn0c.png?updatedAt=1703358412662"
                alt=""
              />
              {/* heading */}
              <h3 className="md:text-xl text-xs font-bold">No Skill Needed</h3>

              {/* sub-heading */}
              <h4 className="text-center md:text-lg text-xs">
                Professional consider everyone probls small niche friendly.
              </h4>
            </div>

            {/* line  */}
            <div className="border h-[80%]  w-0 border-slate-400"></div>

            {/* 3rd box */}
            <div className="flex flex-col justify-center items-center gap-3 md:gap-1">
              {/* image */}
              <img
                className="md:w-[60px] w-[30px]"
                src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Vector%20(1)_nszWwOsft.png?updatedAt=1703358412633"
                alt=""
              />
              {/* heading */}
              <h3 className="md:text-xl text-xs font-bold">Easy Accessible</h3>

              {/* sub-heading */}
              <h4 className="text-center md:text-lg text-xs">
                Professional consider everyone probls small niche friendly.
              </h4>
            </div>

            {/* line  */}
            <div className="border h-[80%]  w-0 border-slate-400"></div>

            {/* 4th box */}
            <div className="flex flex-col justify-center items-center gap-3 md:gap-1">
              {/* image */}
              <img
                className="md:w-[60px] w-[30px]"
                src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Icon%202_RPUi4FMLIk.png?updatedAt=1703358412790"
                alt=""
              />
              {/* heading */}
              <h3 className="md:text-xl text-xs font-bold">Drink & Juices</h3>

              {/* sub-heading */}
              <h4 className="text-center md:text-lg text-xs">
                Professional consider everyone probls small niche friendly.
              </h4>
            </div>
          </div>
        </div>

        {/* mostly loved wrapper*/}
        <div
          id="menu"
          className="w-full py-[30rem] md:py-0 md:h-screen  relative flex flex-col justify-center bg-[#1F242C] items-center gap-1 text-white "
          style={{ fontFamily: "Cormorant Infant, sans-serif" }}
        >
          {/* content */}
          <div className="absolute md:h-[80%] md:pt-28 pt-20 w-full top-0 left-0  justify-around flex flex-col gap-2 md:gap-0  ">
            {/* upper title container */}
            <div className="w-full flex justify-center items-center">
              {/* title content */}
              <div>
                {/* line */}
                <div className="border border-[#E1B168]"></div>
                <h1 className="md:text-4xl text-2xl">Mostly Loved</h1>
                <div className="border border-[#E1B168]"></div>
              </div>
            </div>

            {/* card container */}
            <div className="w-full md:gap-10 gap-2 md:px-20 px-10 flex md:flex-row flex-col justify-center items-center md:items-start">
              {/* card 1 */}
              <div className="w-[300px] flex flex-col bg-[#263141] rounded-lg">
                {/* upper image */}
                <img
                  className="w-[300px] rounded-lg"
                  src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />

                {/* lower content */}
                <div className="w-full p-2 px-4  flex flex-col gap-2">
                  {/* food name and ingredients */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Chicken Burger</h2>
                    <h3 className="text-lg font-bold">Ingredients:4</h3>
                  </div>

                  {/* line */}
                  <img
                    src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Line%208_jZ3ua_ySk.png?updatedAt=1703360516474"
                    alt=""
                  />

                  {/* button */}
                  <button className="w-full py-1 font-bold border-2 border-[#E1B168] italic">
                    View Reciepe
                  </button>
                </div>
              </div>

              {/* card 2 */}
              <div className="w-[300px] flex flex-col bg-[#263141] rounded-lg">
                {/* upper image */}
                <img
                  className="w-[300px] rounded-lg"
                  src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />

                {/* lower content */}
                <div className="w-full p-2 px-4  flex flex-col gap-2">
                  {/* food name and ingredients */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Chicken Burger</h2>
                    <h3 className="text-lg font-bold">Ingredients:4</h3>
                  </div>

                  {/* line */}
                  <img
                    src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Line%208_jZ3ua_ySk.png?updatedAt=1703360516474"
                    alt=""
                  />

                  {/* button */}
                  <button className="w-full py-1 font-bold border-2 border-[#E1B168] italic">
                    View Reciepe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <img
            className="h-[20%] hidden md:inline-block w-full absolute bottom-0 left-0"
            src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Image%202_dbCtnsgdop.png?updatedAt=1703360973130"
            alt=""
          />
        </div>

        {/* gallery section */}
        <div
          className="w-full md:pt-28 pt-16 h-screen overflow-X-hidden  flex flex-col py-5 md:py-2 md:px-20 px-2 md:gap-6 gap-2"
          style={{ fontFamily: "Cormorant Infant, sans-serif" }}
        >
          {/* upper panels */}
          <div className="flex  w-full h-1/2 md:gap-6 gap-1 panels">
            {/* panel */}
            <div
              onClick={addOpen}
              onTransitionEnd={addActive}
              className="panel u_panel1 flex flex-col w-full justify-center items-center gap-2 open open-active relative"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                <h1 className="title md:text-4xl text-lg font-bold">
                  Italian Pasta
                </h1>
                <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                  Recipes
                </h3>
              </div>
            </div>

            {/* panel */}
            <div
              onClick={addOpen}
              onTransitionEnd={addActive}
              className="panel u_panel2 flex flex-col w-full justify-center items-center gap-2 relative"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                <h1 className="title md:text-4xl text-lg font-bold">
                  Italian Pasta
                </h1>
                <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                  Recipes
                </h3>
              </div>
            </div>

            {/* panel */}
            <div
              onClick={addOpen}
              onTransitionEnd={addActive}
              className="panel u_panel3 flex flex-col w-full justify-center items-center gap-2 relative"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                <h1 className="title md:text-4xl text-lg font-bold">
                  Italian Pasta
                </h1>
                <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                  Recipes
                </h3>
              </div>
            </div>

            {/* panel */}
            <div
              onClick={addOpen}
              onTransitionEnd={addActive}
              className="panel u_panel4 flex flex-col w-full justify-center items-center gap-2 relative"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                <h1 className="title md:text-4xl text-lg font-bold">
                  Italian Pasta
                </h1>
                <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                  Recipes
                </h3>
              </div>
            </div>
          </div>

          {/* lower panels */}
          <div className="flex  w-full md:gap-6 gap-1 h-1/2">
            {/* panel */}
            <div
              onClick={addOpen}
              onTransitionEnd={addActive}
              className="panel b_panel1 flex flex-col w-full justify-center items-center gap-2 relative"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                <h1 className="title md:text-4xl text-lg font-bold">
                  Italian Pasta
                </h1>
                <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                  Recipes
                </h3>
              </div>
            </div>

            {/* panel */}
            <div
              onClick={addOpen}
              onTransitionEnd={addActive}
              className="panel b_panel2 flex flex-col w-full justify-center items-center gap-2 relative"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                <h1 className="title md:text-4xl text-lg font-bold">
                  Italian Pasta
                </h1>
                <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                  Recipes
                </h3>
              </div>
            </div>

            {/* panel */}
            <div
              onClick={addOpen}
              onTransitionEnd={addActive}
              className="panel b_panel3 flex flex-col w-full justify-center items-center gap-2 relative"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                <h1 className="title md:text-4xl text-lg font-bold">
                  Italian Pasta
                </h1>
                <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                  Recipes
                </h3>
              </div>
            </div>

            {/* panel */}
            <div
              onClick={addOpen}
              onTransitionEnd={addActive}
              className="panel b_panel4 flex flex-col w-full justify-center items-center gap-2 relative open open-active"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                <h1 className="title md:text-4xl text-lg font-bold">
                  Italian Pasta
                </h1>
                <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                  Recipes
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* contact page and footer */}
        <div className="md:pt-24 py-20 bg-[#1f242c] lg:bg-transparent  md:h-screen w-full  flex flex-col">
          {/* upper image */}
          <img
            className="h-[250px]  w-full"
            src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Image%204_JCOoes3Gn.png?updatedAt=1703431072627"
            alt=""
          />

          {/* contact wrapper */}
          <div
            className="w-full py-10 md:px-20 px-5 bg-[#1f242c] md:py-12 "
            style={{ fontFamily: "Cormorant Infant, sans-serif" }}
          >
            {/* contact container */}
            <div className="border border-white text-white py-10 flex flex-col gap-5">
              {/* upper title container */}
              <div className="w-full flex justify-center items-center">
                {/* title content */}
                <div>
                  {/* line */}
                  <div className="border border-[#E1B168]"></div>
                  <h1 className="text-4xl ">Contact us</h1>
                  <div className="border border-[#E1B168]"></div>
                </div>
              </div>

              {/* form section */}
              <form className="md:w-[30%]  mx-auto justify-center items-center flex gap-3 flex-col">
                <input
                  className="w-full outline-none bg-transparent text-xl font-bold border-2 text-white py-2 px-4"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                <input
                  className="w-full outline-none bg-transparent text-xl font-bold border-2 text-white py-2 px-4"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <textarea
                  className="w-full outline-none bg-transparent text-xl font-bold border-2 text-white py-2 px-4"
                  name="message"
                  id="message"
                  cols="30"
                  rows="1"
                  placeholder="Message"
                ></textarea>
                <input
                  className="w-full bg-transparent text-xl font-bold border-2 border-[#E1B168] text-white py-2 px-4 italic"
                  type="submit"
                  value="Send Message"
                />
              </form>
            </div>
          </div>

          {/* footer section */}
          <footer className=" px-20 py-2 z-50 bg-[#292E36] w-full mx-auto  flex-row-reverse hidden lg:flex items-center justify-between">
            {/* logo */}
            <img
              className="w-[80px]"
              src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Tasty-removebg-preview_uG-BxfeAY.png?updatedAt=1703355313793"
              alt="logo"
            />

            {/* links */}
            <ul className="text-[#E1B168] flex gap-24 font-bold italic">
              <li>About</li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </footer>
        </div>
      </main>
    </div>
  );
}

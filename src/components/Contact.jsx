import { NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
export default function Contact() {
  return (
    <div
      id="contact"
      className="md:pt-20 py-20  bg-[#1f242c] lg:bg-transparent  md:h-screen w-full  flex flex-col"
    >
      {/* upper image */}
      <img
        className="h-[250px]  w-full"
        src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Image%204_JCOoes3Gn.png?updatedAt=1703431072627"
        alt=""
      />

      {/* contact wrapper */}
      <div
        className="w-full py-10 md:px-20 px-5 bg-[#1f242c] md:py-52 "
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
        <NavHashLink smooth to={"/#home"} className={"hidden md:inline-block"}>
          <img
            className="md:w-[80px]  w-[40px]"
            src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Tasty-removebg-preview_uG-BxfeAY.png?updatedAt=1703355313793"
            alt="logo"
          />
        </NavHashLink>

        {/* links */}
        <ul className="text-[#E1B168] flex gap-24 font-bold italic">
          <li>
            <NavHashLink smooth to={"/#contact"}>
              Contact
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to={"/#gallery"}>
              Gallery
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to={"/#special"}>
              Special
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to={"/#loved"} className={"flex "}>
              Most <span className="not-italic">💖</span> Recipe
            </NavHashLink>
          </li>
          <li>
            <NavLink to={"/categories"}>Categories</NavLink>
          </li>
          <li>
            <NavHashLink smooth to={"/#home"}>
              Home
            </NavHashLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

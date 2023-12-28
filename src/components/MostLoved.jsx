import { useEffect, useState } from "react";
import services from "../apiService/services";
import { Link } from "react-router-dom";

export default function MostLoved() {
  const [mostLoved, setMostLoved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    services.getMostLovedRecipes().then((data) => {
      setMostLoved(data);
    });
  }, []);

  useEffect(() => {
    if (mostLoved.length) {
      setLoading(false);
    }
  }, [mostLoved]);

  // if (mostLoved.length > 0) {
  return (
    <div
      id="loved"
      className="w-full py-[18rem]  md:py-0 h-screen  relative flex flex-col justify-center bg-[#1F242C] items-center gap-1 text-white "
      style={{ fontFamily: "Cormorant Infant, sans-serif" }}
    >
      {/* content */}
      <div className="absolute h-[80%] md:pt-28 pt-10 w-full top-0 left-0  px-1 justify-around flex flex-col gap-10 md:gap-0  ">
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
        <div className="w-full h-[80%] md:h-auto pl-20 md:pl-0   md:gap-10 gap-1 md:px-20  flex flex-row   justify-center overflow-x-auto no-scrollbar items-center md:items-start">
          {loading ? (
            <>
              <div className="w-[250px] h-[300px] justify-between   flex flex-col bg-white rounded-lg">
                {/* upper image */}
                <div className="w-[250px] h-[70%]  rounded-lg skeleton"></div>
                {/* lower content */}
                <div className="w-full p-2 px-4  flex flex-col gap-2">
                  {/* food name and ingredients */}
                  <div className="flex justify-between items-center h-4 skeleton">
                    <h2 className="text-xl font-bold text-center w-full skeleton"></h2>
                    {/* <h3 className="text-base font-bold">Ingredients:4</h3> */}
                  </div>

                  {/* line */}
                  <div className="w-full h-1 skeleton"></div>
                  {/* button */}

                  <div className="w-full h-10 py-1 font-bold border-2 bg-slate-300 italic skeleton"></div>
                </div>
              </div>

              <div className="w-[250px] h-[300px] justify-between   flex flex-col bg-white rounded-lg">
                {/* upper image */}
                <div className="w-[250px] h-[70%]  rounded-lg skeleton"></div>
                {/* lower content */}
                <div className="w-full p-2 px-4  flex flex-col gap-2">
                  {/* food name and ingredients */}
                  <div className="flex justify-between items-center h-4 skeleton">
                    <h2 className="text-xl font-bold text-center w-full skeleton"></h2>
                    {/* <h3 className="text-base font-bold">Ingredients:4</h3> */}
                  </div>

                  {/* line */}
                  <div className="w-full h-1 skeleton"></div>
                  {/* button */}

                  <div className="w-full h-10 py-1 font-bold border-2 bg-slate-300 italic skeleton"></div>
                </div>
              </div>

              <div className="w-[250px] h-[300px] justify-between   flex flex-col bg-white rounded-lg">
                {/* upper image */}
                <div className="w-[250px] h-[70%]  rounded-lg skeleton"></div>
                {/* lower content */}
                <div className="w-full p-2 px-4  flex flex-col gap-2">
                  {/* food name and ingredients */}
                  <div className="flex justify-between items-center h-4 skeleton">
                    <h2 className="text-xl font-bold text-center w-full skeleton"></h2>
                    {/* <h3 className="text-base font-bold">Ingredients:4</h3> */}
                  </div>

                  {/* line */}
                  <div className="w-full h-1 skeleton"></div>
                  {/* button */}

                  <div className="w-full h-10 py-1 font-bold border-2 bg-slate-300 italic skeleton"></div>
                </div>
              </div>

              <div className="w-[250px] h-[300px] justify-between   flex flex-col bg-white rounded-lg">
                {/* upper image */}
                <div className="w-[250px] h-[70%]  rounded-lg skeleton"></div>
                {/* lower content */}
                <div className="w-full p-2 px-4  flex flex-col gap-2">
                  {/* food name and ingredients */}
                  <div className="flex justify-between items-center h-4 skeleton">
                    <h2 className="text-xl font-bold text-center w-full skeleton"></h2>
                    {/* <h3 className="text-base font-bold">Ingredients:4</h3> */}
                  </div>

                  {/* line */}
                  <div className="w-full h-1 skeleton"></div>
                  {/* button */}

                  <div className="w-full h-10 py-1 font-bold border-2 bg-slate-300 italic skeleton"></div>
                </div>
              </div>
            </>
          ) : (
            <>
              {mostLoved.map((item) => (
                <div key={item.idMeal} className="">
                  <div className="w-[250px] border  flex flex-col bg-[#263141] rounded-lg">
                    {/* upper image */}
                    <img
                      className="w-[250px] rounded-lg"
                      src={item.strMealThumb}
                      alt=""
                    />

                    {/* lower content */}
                    <div className="w-full p-2 px-4  flex flex-col gap-2">
                      {/* food name and ingredients */}
                      <div className="flex justify-between items-center ">
                        <h2 className="text-xl font-bold text-center w-full">
                          {item.strMeal}
                        </h2>
                        {/* <h3 className="text-base font-bold">Ingredients:4</h3> */}
                      </div>

                      {/* line */}
                      <img
                        src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Line%208_jZ3ua_ySk.png?updatedAt=1703360516474"
                        alt=""
                      />

                      {/* button */}
                      <Link to={`/recipe/${item.strMeal}`}>
                        <button className="w-full py-1 font-bold border-2 border-[#E1B168] italic">
                          View Reciepe
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <img
        className="h-[20%] inline-block w-full absolute bottom-0 left-0"
        src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Image%202_dbCtnsgdop.png?updatedAt=1703360973130"
        alt=""
      />
    </div>
  );
  // }
}

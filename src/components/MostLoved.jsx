import { useEffect, useState } from "react";
import services from "../apiService/services";
import { Link } from "react-router-dom";

export default function MostLoved() {
  const [mostLoved, setMostLoved] = useState([]);

  useEffect(() => {
    services.getMostLovedRecipes().then((data) => {
      setMostLoved(data);
    });
  }, []);

  if (mostLoved.length > 0) {
    return (
      <div
        id="loved"
        className="w-full py-[30rem] md:py-0 md:h-screen  relative flex flex-col justify-center bg-[#1F242C] items-center gap-1 text-white "
        style={{ fontFamily: "Cormorant Infant, sans-serif" }}
      >
        {/* content */}
        <div className="absolute md:h-[80%] h-full md:pt-28 pt-20 w-full top-0 left-0  justify-around flex flex-col gap-2 md:gap-0  ">
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
          <div className="w-full md:gap-10  h-screen md:h-auto gap-2 md:px-20 px-10 flex md:flex-row  flex-col justify-center overflow-y-auto no-scrollbar items-center md:items-start">
            {mostLoved.map((item) => (
              <div key={item.idMeal}>
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
          </div>
        </div>

        <img
          className="h-[20%] hidden md:inline-block w-full absolute bottom-0 left-0"
          src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Image%202_dbCtnsgdop.png?updatedAt=1703360973130"
          alt=""
        />
      </div>
    );
  } else {
    return <h1>loadin page</h1>;
  }
}

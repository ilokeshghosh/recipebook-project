import { useCallback, useEffect, useState } from "react";
import { ItemCard } from "./";
import { Link } from "react-router-dom";
import services from "../apiService/services";
export default function Special() {
  const [todaySpecial, setTodaySpecial] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);
  useEffect(() => {
    services.getPopularRecipes().then((data) => {
      setPopularCategories(data);
    });
  }, []);

  useEffect(() => {
    const generateTodaysSpecial = () => {
      try {
        const localData = localStorage.getItem("todaySpecial");
        if (localData) {
          const data = JSON.parse(localData);
          setTodaySpecial(data);
        } else {
          for (let i = 0; i < 2; i++) {
            services.getRandomRecipe().then((data) => {
              const food = data.meals[0];
              setTodaySpecial((prev) => [...prev, food]);
            });
          }
        }
      } catch (error) {
        console.log("asdfas", error);
      }
    };

    generateTodaysSpecial();
    const intervalId = setInterval(generateTodaysSpecial, 86400000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // console.log('today',todaySpecial);
    if (todaySpecial.length === 4) {
      localStorage.setItem("todaySpecial", JSON.stringify(todaySpecial));
    }
  }, [todaySpecial]);

  if (todaySpecial.length > 0 && setPopularCategories.length > 0) {
    return (
      <div
        id="special"
        className="h-screen gap-8 md:gap-0 flex flex-col justify-between"
        style={{ fontFamily: "Cormorant Infant, sans-serif" }}
      >
        {/* upper container */}
        <div className=" flex flex-col justify-evenly md:gap-6 gap-3 md:h-[75%] pt-16 md:pt-28">
          {/* today's special */}
          <div className="flex flex-col justify-center md:justify-start md:items-start items-center gap-2 md:px-20 px-2">
            {/* heading */}
            <h1 className="md:text-4xl text-2xl tracking-wider font-bold italic">
              Today's Special
            </h1>

            {/* menu */}
            <div className="flex justify-between mx-auto md:justify-between md:flex-wrap items-center gap-14 md:gap-10 w-full  overflow-x-auto  no-scrollbar">
              {todaySpecial.map((item) => (
                <div key={item.idMeal}>
                  <Link to={`/recipe/${item.strMeal}`}>
                    <ItemCard
                      className="md:w-[100px] w-[50px]"
                      imgUrl={item.strMealThumb}
                      title={item.strMeal}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* popular Categories */}
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-2 md:px-20 px-5">
            {/* heading */}
            <h1 className="md:text-4xl text-2xl tracking-wider font-bold italic">
              Popular Categories
            </h1>

            {/* menu */}
            <div className="flex justify-between  md:justify-between items-center md:flex-wrap gap-16 w-full  overflow-x-auto  no-scrollbar">
              {popularCategories.map((item) => (
                <div key={item.idCategory}>
                  <ItemCard
                    className="md:w-[100px] w-[50px]"
                    imgUrl={item.strCategoryThumb}
                    title={item.strCategory}
                  />
                </div>
              ))}
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
              Plant-Powered Bliss for Every Bite
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
              Effortless Cooking, Pure Delight.
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
              Easy Recipes, Epic Flavors
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
              Sip, Smile, Enjoy the Flavor
            </h4>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>loadin page</h1>;
  }
}

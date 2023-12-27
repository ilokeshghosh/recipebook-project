import { useState, useEffect } from "react";
import services from "../apiService/services";
import "../../src/index.css";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [upperPanel, setUpperPanel] = useState([]);
  const [lowerPanel, setLowerPanel] = useState([]);

  function addOpen(e) {
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

  useEffect(() => {
    const generateGallery = () => {
      try {
        const localData = localStorage.getItem("gallery");
        if (localData) {
          const data = JSON.parse(localData);
          setItems(data);
        } else {
          for (let i = 0; i < 7; i++) {
            services.getRandomRecipe().then((data) => {
              const food = data.meals[0];
              setItems((prev) => [...prev, food]);
            });
          }
        }
      } catch (error) {
        console.log("asdfas", error);
      }
    };

    generateGallery();
    const intervalId = setInterval(generateGallery, 86400000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("gallery", JSON.stringify(items));
      const middleIndex = Math.floor(items.length / 2);
      setUpperPanel(items.slice(0, middleIndex));
      setLowerPanel(items.slice(middleIndex));
    }
  }, [items]);

  const activeReadMore = (e) => {
    e.currentTarget.querySelector(".readMore").classList.add("opacity-1");
    e.currentTarget.querySelector(".readMore").classList.remove("opacity-0");
  };

  const deactiveReadMore = (e) => {
    e.currentTarget.querySelector(".readMore").classList.remove("opacity-1");
    e.currentTarget.querySelector(".readMore").classList.add("opacity-0");
  };

  if (items.length > 0) {
    return (
      <div
        id="gallery"
        className="w-full md:pt-28 pt-16 h-screen overflow-X-hidden  flex flex-col py-5 md:py-2 md:px-20 px-2 md:gap-6 gap-2"
        style={{ fontFamily: "Cormorant Infant, sans-serif" }}
      >
        {/* upper panels */}
        <div className="flex  w-full h-1/2 md:gap-6 gap-1 panels">
          {upperPanel.map((item, index) => (
            <div key={index} className="w-full h-full">
              <div
                onMouseEnter={activeReadMore}
                onMouseLeave={deactiveReadMore}
                style={{
                  backgroundImage: `url(${item.strMealThumb})`,
                }}
                className=" bg-center bg-cover bg-no-repeat   w-full h-full flex flex-col  justify-center items-center gap-2 relative"
              >
                <div className="absolute readMore transition-all opacity-0 duration-500 ease-linear top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                  <h1 className="title md:text-4xl text-center text-lg font-bold text-white">
                    {item.strMeal}
                  </h1>
                  <Link to={`/recipe/${item.strMeal}`}>
                    <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                      Recipes
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* lower panels */}
        <div className="flex  w-full md:gap-6 gap-1 h-1/2">
          {lowerPanel.map((item, index) => (
            <div key={index} className="w-full h-full">
              <div
                onMouseEnter={activeReadMore}
                onMouseLeave={deactiveReadMore}
                style={{
                  backgroundImage: `url(${item.strMealThumb})`,
                }}
                className=" transition-all bg-center bg-cover bg-no-repeat  w-full h-full flex flex-col  justify-center items-center gap-2 relative"
              >
                <div className="absolute transition-all duration-500 ease-linea  readMore top-0 left-0 opacity-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
                  <h1 className="title md:text-4xl text-lg font-bold text-white text-center">
                    {item.strMeal}
                  </h1>
                  <Link to={`/recipe/${item.strMeal}`}>
                    <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                      Recipes
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <h1>loading page</h1>;
  }
}

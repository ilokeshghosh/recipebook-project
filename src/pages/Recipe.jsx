import {
  FaCirclePlay,
  IoTimerOutline,
  GiChefToque,
  GiForkKnifeSpoon,
} from "../icons/icons.index";
import { Fragment, useEffect, useState } from "react";
import services from "../apiService/services";
import { useParams, useNavigate } from "react-router-dom";
import { IngredientCard } from "../components";
import { NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

export default function Recipe() {
  const [url, setUrl] = useState(null);
  const [food, setFood] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(true);

  const foodName = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (foodName) {
      services.getRecipeByName(foodName.foodName).then((food) => {
        const data = [...food.meals];
        const meal = data[0];
        setFood(meal);
        setInstructions(meal.strInstructions.split(". "));

        const videoId = meal.strYoutube.split("v=")[1];

        // Construct the embed URL
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

        // Set the constructed URL as the iframe src
        setUrl(embedUrl);
      });
    }

    // services.getIngredientImage("Onion").then((data) => {
    //   const url = data;
    //   setUrl(url);
    // });
  }, [foodName, navigate]);

  useEffect(() => {
    const test = [];
    const regexIngredient = /strIngredient\d+/;
    const regexQuantity = /strMeasure\d+/;
    let index = 1;
    if (food != null) {
      const ingredientPromises = [];
      for (const key in food) {
        if (regexIngredient.test(key) && food[key] !== "") {
          const promise = services
            .getIngredientImage(food[key])
            .then((data) => {
              const ingredientObj = {
                ingredient: food[key],
                quantity: food[`strMeasure${index}`],
                imgUrl: data,
              };
              test.push(ingredientObj);
              index++;
            });

          ingredientPromises.push(promise);
        }
      }

      Promise.all(ingredientPromises).then(() => {
        setIngredients(test);
      });
    }
  }, [food]);

  useEffect(() => {
    if (url && food && ingredients.length && instructions.length) {
      setLoading(false);
    }
  }, [url, food, ingredients, instructions]);

  const handleCheckBox = (e) => {
    e.currentTarget.classList.toggle("bg-green-500");
  };
  return food ? (
    <main
      className="w-full"
      style={{ fontFamily: "Cormorant Infant, sans-serif" }}
    >
      {/* upper section */}
      <div className="w-full flex flex-col gap-4 pt-28 py-20">
        {/* title */}
        <div className="w-full flex justify-center items-center">
          {/* title content */}
          <div>
            {/* line */}
            <div className="border border-[#E1B168]"></div>
            <h1 className="md:text-4xl text-2xl tracking-wider">Recipe</h1>
            <div className="border border-[#E1B168]"></div>
          </div>
        </div>

        {/* recipe name */}
        <div className="w-full flex justify-center items-center">
          <h2 className="md:text-3xl text-2xl  font-bold">{food.strMeal}</h2>
        </div>

        {/* recipe video */}
        <div className="w-full flex justify-center uppercase md:px-20 px-1 relative">
          <div className="absolute hidden top-0  justify-center items-center w-full left-0 h-full text-5xl text-[#ad792a]">
            <FaCirclePlay />
          </div>

          {loading ? (
            <>
              <div className="md:w-[60%] md:h-[460px] h-[260px] w-full rounded-lg flex justify-center items-center skeleton"></div>
            </>
          ) : (
            <>
              {" "}
              <iframe
                className="md:w-[60%] md:h-[460px] h-[260px] w-full rounded-lg flex justify-center items-center"
                // width="560"
                // height="460"
                src={url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </>
          )}

          <video className="md:w-[60%] hidden w-full rounded-lg" controls>
            <source src="src\assets\video2.mp4" />
          </video>
        </div>
      </div>

      {/* mid section / Ingredients*/}
      <div className="w-full  md:px-20 px-5">
        {/* upper / title */}
        <div className="flex md:items-start items-center flex-col gap-2 mb-1">
          <h2 className="text-3xl font-bold">Ingredients</h2>
          <div className="border w-full border-slate-400"></div>
        </div>

        {/* lower section */}
        <div className="flex justify-between w-full md:flex-row flex-col">
          {/* ingredients items container */}
          <div className="flex flex-wrap md:w-[60%]  w-full  mx-auto justify-center items-start gap-x-14 overflow-y-auto no-scrollbar   gap-10 py-5">
            {loading ? (
              <>
                {" "}
                <div className="flex w-[150px]  justify-center items-center gap-2 mx-auto md:mx-0 ">
                  <div className="h-3 w-3 rounded- skeleton"></div>
                  <div className="w-[100px] h-[100px] rounded-lg border skeleton"></div>

                  {/* name and amount */}
                  <div className="flex break-words  flex-col font-bold gap-3">
                    <div className="h-2 w-8 skeleton"></div>
                    <div className="h-2 w-4 skeleton"></div>
                    <h2 className="text-xs"></h2>
                  </div>
                </div>
                <div className="flex w-[150px]  justify-center items-center gap-2 mx-auto md:mx-0 ">
                  <div className="h-3 w-3 rounded- skeleton"></div>
                  <div className="w-[100px] h-[100px] rounded-lg border skeleton"></div>

                  {/* name and amount */}
                  <div className="flex break-words  flex-col font-bold gap-3">
                    <div className="h-2 w-8 skeleton"></div>
                    <div className="h-2 w-4 skeleton"></div>
                    <h2 className="text-xs"></h2>
                  </div>
                </div>
                <div className="flex w-[150px]  justify-center items-center gap-2 mx-auto md:mx-0 ">
                  <div className="h-3 w-3 rounded- skeleton"></div>
                  <div className="w-[100px] h-[100px] rounded-lg border skeleton"></div>

                  {/* name and amount */}
                  <div className="flex break-words  flex-col font-bold gap-3">
                    <div className="h-2 w-8 skeleton"></div>
                    <div className="h-2 w-4 skeleton"></div>
                    <h2 className="text-xs"></h2>
                  </div>
                </div>
                <div className="flex w-[150px]  justify-center items-center gap-2 mx-auto md:mx-0 ">
                  <div className="h-3 w-3 rounded- skeleton"></div>
                  <div className="w-[100px] h-[100px] rounded-lg border skeleton"></div>

                  {/* name and amount */}
                  <div className="flex break-words  flex-col font-bold gap-3">
                    <div className="h-2 w-8 skeleton"></div>
                    <div className="h-2 w-4 skeleton"></div>
                    <h2 className="text-xs"></h2>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                {ingredients.map((item, index) => (
                  <div key={index} className="">
                    <IngredientCard
                      imgUrl={item.imgUrl}
                      ingredient={item.ingredient}
                      quantity={item.quantity}
                    />
                  </div>
                ))}
              </>
            )}
          </div>

          {/* food details and horizontal ruler section */}
          <div className="flex justify-center items-center md:flex-row flex-col md:w-[30%] gap-10 ">
            <div className="border w-full h-full md:w-auto border-slate-400 "></div>
            {/* food details */}
            <div className="flex flex-col gap-1  ">
              {/* image */}
              {loading ? (
                <>
                  <div className="w-[300px] h-[300px] skeleton"></div>
                </>
              ) : (
                <>
                  {" "}
                  <img className=" w-full" src={food.strMealThumb} alt="" />
                </>
              )}

              {/* lower details section */}
            </div>
          </div>
        </div>
      </div>

      {/* lower section / Instructions*/}
      <div className="w-full md:px-20 gap-20 md:gap-0 px-5 flex md:flex-row flex-col justify-between py-10">
        {/* left section */}
        <div className="md:w-[100%]  w-full flex flex-col gap-3">
          {/* title */}
          <h1 className="text-3xl font-bold text-center md:text-start">
            Instructions
          </h1>

          <div className="border border-slate-400 w-full"></div>

          {/* steps container */}
          <div
            className="flex   py-3  gap-2 
          "
          >
            {/* left section */}
            <div className="flex flex-col items-center ">
              {instructions.map((item, index) => (
                <div key={index} className="">
                  {/* checkbox */}
                  <div
                    onClick={handleCheckBox}
                    className="relative checkBox  rounded-full flex justify-center items-center "
                  >
                    <input
                      className="opacity-0"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <label className="border-2   border-[#E1B168] absolute w-3 h-3 rounded-full top-0 right-0 before:content-['']"></label>
                  </div>

                  {index !== instructions.length - 1 && (
                    <div className="border mx-auto w-0 md:h-20 h-40 border-black border-dotted"></div>
                  )}
                  {/* <div className="border mx-auto w-0 md:h-20 h-40 border-black border-dotted"></div> */}
                </div>
              ))}
            </div>

            {/* right section */}
            <div className="flex  flex-col gap-2 ">
              {instructions.map((item, index) => (
                <div key={index}>
                  <div className="flex flex-col  md:h-20 h-40">
                    <h1 className="text-lg font-bold">STEP {index + 1}</h1>
                    <h3 className="font">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right section / nutrition info */}
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
    </main>
  ) : (
    <h1>this</h1>
  );
}

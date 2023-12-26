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

export default function Recipe() {
  const [url, setUrl] = useState(null);
  const [food, setFood] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
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
            });

          ingredientPromises.push(promise);
          index++;
        }
      }

      Promise.all(ingredientPromises).then(() => {
        setIngredients(test);
      });
    }
  }, [food]);


  const handleCheckBox =(e)=>{
    e.currentTarget.classList.toggle('bg-green-500')
  }
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

          <iframe
            className="md:w-[60%] md:h-[460px] h-[260px] w-full rounded-lg flex justify-center items-center"
            // width="560"
            // height="460"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

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
            {ingredients.map((item, index) => (
              <div key={index} className="">
                <IngredientCard
                  imgUrl={item.imgUrl}
                  ingredient={item.ingredient}
                  quantity="1kg"
                />
              </div>
            ))}
          </div>

          {/* food details and horizontal ruler section */}
          <div className="flex justify-center items-center md:flex-row flex-col md:w-[30%] gap-10 ">
            <div className="border w-full h-full md:w-auto border-slate-400 "></div>
            {/* food details */}
            <div className="flex flex-col gap-1  ">
              {/* image */}
              <img className=" w-full" src={food.strMealThumb} alt="" />

              {/* lower details section */}
              <div className="flex flex-col gap-1 py-2 hidden">
                {/* item */}
                <div className="flex items-center justify-between">
                  {/* title and logo */}
                  <div className="flex font-bold text-lg  gap-1 items-center">
                    <IoTimerOutline className="text-[#E1B168]" />
                    <h3>Cooking time :</h3>
                  </div>

                  {/* sub title */}
                  <h4 className="font-bold">25min</h4>
                </div>

                {/* item */}
                <div className="flex items-center justify-between">
                  {/* title and logo */}
                  <div className="flex font-bold text-lg  gap-1 items-center">
                    <GiChefToque className="text-[#E1B168]" />
                    <h3>Difficulty :</h3>
                  </div>

                  {/* sub title */}
                  <h4 className="font-bold">Medium</h4>
                </div>

                {/* item */}
                <div className="flex items-center justify-between">
                  {/* title and logo */}
                  <div className="flex font-bold text-lg  gap-1 items-center">
                    <GiForkKnifeSpoon className="text-[#E1B168]" />
                    <h3>Serving :</h3>
                  </div>

                  {/* sub title */}
                  <h4 className="font-bold">05</h4>
                </div>
              </div>
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
                  <div onClick={handleCheckBox} className="relative checkBox  rounded-full flex justify-center items-center ">
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

            {/* original code */}
            {/* left section */}
            <div className="flex flex-col items-center hidden">
              {/* checkbox */}
              <div className="relative flex justify-center items-center ">
                <input className="opacity-0" type="checkbox" name="" id="" />
                <label className="border-2  border-[#E1B168] absolute w-3 h-3 rounded-full top-0 right-0 before:content-['']"></label>
              </div>

              <div className="border w-0 md:h-20 h-40 border-black border-dotted"></div>

              {/* checkbox */}
              <div className="relative flex justify-center items-center ">
                <input className="opacity-0" type="checkbox" name="" id="" />
                <label className="border-2  border-[#E1B168] absolute w-3 h-3 rounded-full top-0 right-0 before:content-['']"></label>
              </div>

              <div className="border w-0 md:h-20 h-40 border-black border-dotted"></div>

              {/* checkbox */}
              <div className="relative flex justify-center items-center ">
                <input className="opacity-0" type="checkbox" name="" id="" />
                <label className="border-2  border-[#E1B168] absolute w-3 h-3 rounded-full top-0 right-0 before:content-['']"></label>
              </div>

              <div className="border w-0 md:h-20 h-40 border-black border-dotted"></div>

              {/* checkbox */}
              <div className="relative flex justify-center items-center ">
                <input className="opacity-0" type="checkbox" name="" id="" />
                <label className="border-2  border-[#E1B168] absolute w-3 h-3 rounded-full top-0 right-0 before:content-['']"></label>
              </div>

              <div className="border w-0 md:h-20 h-40 border-black border-dotted"></div>

              <div className="relative flex justify-center items-center ">
                <input className="opacity-0" type="checkbox" name="" id="" />
                <label className="border-2  border-[#E1B168] absolute w-3 h-3 rounded-full top-0 right-0 before:content-['']"></label>
              </div>
            </div>

            {/* right section */}
            <div className="flex  flex-col gap-2 hidden">
              {/* step */}
              <div className="flex flex-col  md:h-20 h-40">
                <h1 className="text-lg font-bold">STEP 01</h1>
                <h3 className="font">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  illo tempora rerum obcaecati ea omnis facilis aut inventore
                  consectetur ducimus.
                </h3>
              </div>

              {/* step */}
              <div className="flex flex-col  md:h-20 h-40">
                <h1 className="text-lg font-bold">STEP 01</h1>
                <h3 className="font">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  illo tempora rerum obcaecati ea omnis facilis aut inventore
                  consectetur ducimus.
                </h3>
              </div>

              {/* step */}
              <div className="flex flex-col  md:h-20 h-40">
                <h1 className="text-lg font-bold">STEP 01</h1>
                <h3 className="font">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  illo tempora rerum obcaecati ea omnis facilis aut inventore
                  consectetur ducimus.
                </h3>
              </div>

              {/* step */}
              <div className="flex flex-col  md:h-20 h-40">
                <h1 className="text-lg font-bold">STEP 01</h1>
                <h3 className="font">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  illo tempora rerum obcaecati ea omnis facilis aut inventore
                  consectetur ducimus.
                </h3>
              </div>
              {/* step */}
              <div className="flex flex-col  h-20">
                <h1 className="text-lg font-bold">STEP 01</h1>
                <h3 className="font">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  illo tempora rerum obcaecati ea omnis facilis aut inventore
                  consectetur ducimus.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* right section / nutrition info */}
        <div
          className="md:w-[30%] w-full flex flex-col md:px-10 px-5 hidden
           gap-3"
        >
          {/* title */}
          <h1 className="text-3xl font-bold">Nutrition Info</h1>

          <div className="border border-slate-400 w-full"></div>

          {/* lower section */}
          <div className="flex flex-col gap-2">
            {/* nutrition info */}
            <div className="flex items-center justify-between gap-2">
              <h1 className="font-bold">Calories</h1>
              <img
                className="md:w-[60%] w-[50%] font-bold"
                src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Line%208_jZ3ua_ySk.png?updatedAt=1703360516474"
                alt=""
              />
              <h1 className="font-bold">230</h1>
            </div>

            {/* nutrition info */}
            <div className="flex items-center justify-between gap-2">
              <h1 className="font-bold">Saturated Fat</h1>
              <img
                className="w-[60%] font-bold"
                src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Line%208_jZ3ua_ySk.png?updatedAt=1703360516474"
                alt=""
              />
              <h1 className="font-bold">0.9g</h1>
            </div>

            {/* nutrition info */}
            <div className="flex items-center justify-between gap-2">
              <h1 className="font-bold">Polyunsaturated Fat</h1>
              <img
                className="w-[60%] font-bold"
                src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Line%208_jZ3ua_ySk.png?updatedAt=1703360516474"
                alt=""
              />
              <h1 className="font-bold">1.9g</h1>
            </div>

            {/* nutrition info */}
            <div className="flex items-center justify-between gap-2">
              <h1 className="font-bold">Protein</h1>
              <img
                className="w-[60%] font-bold"
                src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Line%208_jZ3ua_ySk.png?updatedAt=1703360516474"
                alt=""
              />
              <h1 className="font-bold">57.7g</h1>
            </div>
          </div>
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
    </main>
  ) : (
    <h1>this</h1>
  );
}

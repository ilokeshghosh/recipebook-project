import { useParams } from "react-router-dom";
import services from "../apiService/services";
import { ItemCard } from "../components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Categories() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    try {
      const localData = localStorage.getItem("categories");
      if (localData) {
        const data = JSON.parse(localData);
        if (data) {
          setMenu(data);
        }
      } else {
        services.getCategoriesList().then((food) => {
          const data = food.categories;
          if (data) {
            localStorage.setItem("categories", JSON.stringify(data));
            setMenu(data);
          }
        });
      }
    } catch (error) {
      console.log("error is ", error);
    }
  }, []);

  if (menu.length > 0) {
    return (
      <main
        className="w-full"
        style={{ fontFamily: "Cormorant Infant, sans-serif" }}
      >
        {/* upper section */}
        <div className="w-full flex flex-col gap-4 pt-32 py-6 md:px-20 px-5">
          {/* title section / search box */}
          <div className="w-full flex justify-between items-center">
            <h1 className="md:text-4xl text-2xl font-bold">Categories</h1>
            <input
              className="border-2 md:w-[20%]  py-1 font-bold outline-none px-5 border-slate-500 rounded-2xl"
              placeholder="Search Here"
              type="search"
              name="search"
              id="search"
            />
          </div>

          <div className="border border-slate-500"></div>
        </div>

        {/* categories container */}
        <div className=" md:px-16   px-5 mx-auto justify-between md:justify-start flex flex-wrap md:gap-14 gap-6 items-center pb-1">
          {menu.map((item) => {
            return (
              <div key={item.idCategory}>
                {" "}
                <Link to={`/archive/${item.strCategory}`}>
                  <ItemCard
                    className="md:w-[150px] w-[75px]"
                    imgUrl={item.strCategoryThumb}
                    title={item.strCategory}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    );
  } else {
    return <h1>Loading Data</h1>;
  }
}

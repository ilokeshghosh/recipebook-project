export default function Archive() {

    const activeReadMore = (e) => {
        e.currentTarget.querySelector(".readMore").classList.add("opacity-1");
        e.currentTarget.querySelector(".readMore").classList.remove("opacity-0");
    };

    const deactiveReadMore = (e) => {
        e.currentTarget.querySelector(".readMore").classList.remove("opacity-1");
        e.currentTarget.querySelector(".readMore").classList.add("opacity-0");
    };

    return (
        <div className="w-full">
            {/* nav bar */}
            <nav className="md:px-20 px-10  py-2 z-50 transition-[background-color] duration-500 ease-linear w-full mx-auto fixed left-0 md:top-0 flex items-center gap-10 justify-between bg-[#292E36]">
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

            <main
                className="w-full md:pt-[6rem]"
                style={{ fontFamily: "Cormorant Infant, sans-serif" }}
            >
                <img
                    className="w-full md:h-[250px] h-[200px]"
                    src="https://ik.imagekit.io/8fgpvoiai/tastyhub/Image%202_dbCtnsgdop.png?updatedAt=1703360973130"
                    alt=""
                />

                {/* content section */}
                <div className="md:px-32 px-8 py-6">
                    {/* upper section */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-0 w-full items-center justify-between px-2">
                        {/* title /right section */}
                        <div className="flex gap-2 items-center">
                            <h1 className="text-4xl font-bold">Sea Foods</h1>
                            <h3 className="text-lg font-bold">(56 Recipes)</h3>
                        </div>

                        {/* left section and filters */}
                        <div className="flex items-center justify-between gap-4">
                            <input
                                className="border font-bold outline-none rounded-xl py-1 border-black px-4"
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search"
                            />
                            <select className="border px-3 py-1 rounded-xl outline-none border-black font-bold">
                                <option className="font-bold" value="option1">
                                    option1
                                </option>
                                <option className="font-bold" value="option2">
                                    option2
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="border border-slate-600 w-full my-4"></div>

                    {/* food container */}
                    <div className="flex gap-6 w-full md:w-auto  flex-wrap px-2 md:px-0">
                        {/* card  */}
                        <div
                            onMouseEnter={activeReadMore}
                            onMouseLeave={deactiveReadMore}
                            //   onMouseOver={handleCard}
                            className="w-[300px] h-[200px] bg-center bg-cover bg-no-repeat relative "
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            }}
                        >
                            <div className="readMore transition-all duration-500 ease-linear absolute top-0 left-0 w-full h-full bg-black/50 flex opacity-0 justify-center items-center">
                                <button className="px-6 py-2 border-2 border-[#E1B168] text-white">
                                    Read More
                                </button>
                            </div>
                        </div>

                        {/* card  */}
                        <div
                            onMouseEnter={activeReadMore}
                            onMouseLeave={deactiveReadMore}
                            //   onMouseOver={handleCard}
                            className="w-[300px] h-[200px] bg-center bg-cover bg-no-repeat relative "
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            }}
                        >
                            <div className="readMore transition-all duration-500 ease-linear absolute top-0 left-0 w-full h-full bg-black/50 flex opacity-0 justify-center items-center">
                                <button className="px-6 py-2 border-2 border-[#E1B168] text-white">
                                    Read More
                                </button>
                            </div>
                        </div>

                        {/* card  */}
                        <div
                            onMouseEnter={activeReadMore}
                            onMouseLeave={deactiveReadMore}
                            //   onMouseOver={handleCard}
                            className="w-[300px] h-[200px] bg-center bg-cover bg-no-repeat relative "
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            }}
                        >
                            <div className="readMore transition-all duration-500 ease-linear absolute top-0 left-0 w-full h-full bg-black/50 flex opacity-0 justify-center items-center">
                                <button className="px-6 py-2 border-2 border-[#E1B168] text-white">
                                    Read More
                                </button>
                            </div>
                        </div>

                        {/* card  */}
                        <div
                            onMouseEnter={activeReadMore}
                            onMouseLeave={deactiveReadMore}
                            //   onMouseOver={handleCard}
                            className="w-[300px] h-[200px] bg-center bg-cover bg-no-repeat relative "
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            }}
                        >
                            <div className="readMore transition-all duration-500 ease-linear absolute top-0 left-0 w-full h-full bg-black/50 flex opacity-0 justify-center items-center">
                                <button className="px-6 py-2 border-2 border-[#E1B168] text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

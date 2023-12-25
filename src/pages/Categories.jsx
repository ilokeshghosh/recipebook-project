export default function Categories() {
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
                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>

                    {/* item container */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="md:w-[150px] w-[75px] rounded-full"
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <h2 className="italic md:text-2xl text-xl font-bold">Burger</h2>
                    </div>
                </div>

            </main>
        </div>
    );
}

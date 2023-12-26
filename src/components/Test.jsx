export default function Test(){
    return(<div> {/* panel */}
          <div
            onClick={addOpen}
            onTransitionEnd={addActive}
            className="panel hidden border border-red-800  flex flex-col w-full justify-center items-center gap-2 open open-active relative"
          >
            <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
              <h1 className="title md:text-4xl text-lg font-bold">
                Italian Pasta
              </h1>
              <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                Recipes
              </h3>
            </div>
          </div>

          {/* panel */}
          <div
            onClick={addOpen}
            onTransitionEnd={addActive}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
            className="panel hidden  flex flex-col w-full justify-center items-center gap-2 relative"
          >
            <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
              <h1 className="title md:text-4xl text-lg font-bold">
                Italian Pasta
              </h1>
              <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                Recipes
              </h3>
            </div>
          </div>

          {/* panel */}
          <div
            onClick={addOpen}
            onTransitionEnd={addActive}
            className="panel  hidden flex flex-col w-full justify-center items-center gap-2 relative"
          >
            <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
              <h1 className="title md:text-4xl text-lg font-bold">
                Italian Pasta
              </h1>
              <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                Recipes
              </h3>
            </div>
          </div>

          {/* panel */}
          <div
            onClick={addOpen}
            onTransitionEnd={addActive}
            className="panel  hidden flex flex-col w-full justify-center items-center gap-2 relative"
          >
            <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full bg-[#263141]/60">
              <h1 className="title md:text-4xl text-lg font-bold">
                Italian Pasta
              </h1>
              <h3 className="subtitle md:text-2xl text-base font-bold text-[#E1B168]">
                Recipes
              </h3>
            </div>
          </div></div>)
}
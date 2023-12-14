const Sport = () => {
    return (
      <div>
        <div className="px-10 py-10">
          <h1 className="text-left p-3 py-6 text-2xl font-semibold">
            Recherche par sport
          </h1>
          <div className="overflow-x-auto flex gap-2 text-left">
            <div className="flex gap-2 ">
              <div>
                <img src="images/7.webp" alt="" srcset="" />
                <div className="px-4 py-6 font-semibold text-2xl ">
                  <h1>Football</h1>
                </div>
              </div>
            </div>{" "}
            <div className="flex gap-2 ">
              <div className="h-full">
                <img src="images/8.webp" alt="" srcset="" />
                <div className="px-4 py-6 font-semibold text-2xl ">
                  <h1>Danse</h1>
                </div>
              </div>
            </div>{" "}
            <div className="flex gap-2 ">
              <div className="h-full">
                <img src="images/8.webp" alt="" srcset="" />
                <div className="px-4 py-6 font-semibold text-2xl ">
                  <h1>Danse</h1>
                </div>
              </div>
            </div>{" "}
            <div className="flex gap-2 ">
              <div>
                <img src="images/9.webp" alt="" srcset="" />
                <div className="px-4 py-6 font-semibold  text-2xl">
                  <h1>Basketball</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Sport;
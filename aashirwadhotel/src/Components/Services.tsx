import { useState } from "react";

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string>("");
  return (
    <>
      <div className="py-5 lg:py-20">
        <div className="flex flex-col">
          <div className=" w-full text-center">
            <h1 className="font-title w-full font-light text-8xl lg:text-[120px] opacity-10">
              Awesome{" "}
            </h1>
            <h1 className="font-normal font-heading -mt-10 lg:-mt-14 text-[#10377a] text-[40px]">
              SERVICES
            </h1>
          </div>
          <div className="flex flex-wrap justify-center px-1 font-heading gap-3 2xl:gap-20 pt-20 text-white between w-full  mx-auto">
            <div className="flex justify-center flex-wrap gap-5 2xl:gap-20">
              <div className="">
                <div
                  key={"room"}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex("room")}
                  onMouseLeave={() => setHoveredIndex("")}
                >
                  <img
                    src="/room.jpg"
                    alt=""
                    className="object-cover w-[300px] 2xl:w-[400px]  2xl:h-[590px] h-[400px]"
                  />
                  {/* <div className="absolute top-1/2 text-center w-full text-7xl">
                  Room
                </div> */}
                  <div
                    className={`absolute bottom-0 left-0 w-full ${
                      hoveredIndex === "room" ? "h-full " : "h-0 "
                    } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                  ></div>
                  <div
                    className={`absolute inset-0 flex justify-center items-center z-20  transition-transform duration-1000 ${
                      hoveredIndex === "room"
                        ? "translate-y-0 "
                        : "translate-y-1/2 opacity-0"
                    }`}
                  >
                    <div className={`  text-[40px] text-white uppercase`}>
                      Room
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div
                  key={"bar"}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex("bar")}
                  onMouseLeave={() => setHoveredIndex("")}
                >
                  <img
                    src="/bar2.jpg"
                    alt=""
                    className="object-cover w-[300px] 2xl:w-[400px] 2xl:h-[590px] h-[400px]"
                  />
                  {/* <div className="absolute  top-1/2 text-center w-full text-7xl">
                  Bar
                </div> */}
                  <div
                    className={`absolute bottom-0 left-0 w-full ${
                      hoveredIndex === "bar" ? "h-full " : "h-0 "
                    } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                  ></div>
                  <div
                    className={`absolute inset-0 flex justify-center items-center z-20 transition-transform duration-1000 ${
                      hoveredIndex === "bar"
                        ? "translate-y-0 "
                        : "translate-y-1/2 opacity-0"
                    }`}
                  >
                    <div className={` text-[40px]  text-white uppercase `}>
                      Bar
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-5 2xl:gap-20">
              <div className="">
                <div
                  key={"resturant"}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex("resturant")}
                  onMouseLeave={() => setHoveredIndex("")}
                >
                  <img
                    src="/launge.jpg"
                    alt=""
                    className="object-cover w-[300px] 2xl:w-[400px] 2xl:h-[590px] h-[400px]"
                  />
                  {/* <div className="absolute top-1/2 text-center w-full text-7xl">
                  Resturant
                </div> */}
                  <div
                    className={`absolute bottom-0 left-0 w-full ${
                      hoveredIndex === "resturant" ? "h-full " : "h-0 "
                    } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                  ></div>
                  <div
                    className={`absolute inset-0 flex justify-center items-center z-20 transition-transform duration-1000 ${
                      hoveredIndex === "resturant"
                        ? "translate-y-0 "
                        : "translate-y-1/2 opacity-0"
                    }`}
                  >
                    <div className={`text-[40px] text-white uppercase`}>
                      Resturant
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div
                  key={"activity"}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex("activity")}
                  onMouseLeave={() => setHoveredIndex("")}
                >
                  <img
                    src="/night.jpg"
                    alt=""
                    className="object-cover w-[300px] 2xl:w-[400px] h-[400px] 2xl:h-[590px]"
                  />
                  {/* <div className="absolute top-1/2 text-center w-full text-7xl">
                  Resturant
                </div> */}
                  <div
                    className={`absolute bottom-0 left-0 w-full ${
                      hoveredIndex === "activity" ? "h-full " : "h-0 "
                    } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                  ></div>
                  <div
                    className={`absolute inset-0 flex justify-center items-center z-20 transition-transform duration-1000 ${
                      hoveredIndex === "activity"
                        ? "translate-y-0 "
                        : "translate-y-1/2 opacity-0"
                    }`}
                  >
                    <div className={` text-[40px] text-white uppercase`}>
                      Activities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

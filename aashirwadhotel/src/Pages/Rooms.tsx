import { useNavigate } from "react-router-dom";

export const Rooms = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="relative ">
          <img
            src="/room.jpg"
            alt="rooms"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 w-full">
            <h1 className="uppercase font-heading text-white text-8xl text-center w-full">
              Rooms
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] py-10 h-fit ">
        <div>
          <div className=" w-full text-center">
            <h1 className="font-title w-full  text-8xl lg:text-[140px] opacity-10">
              Luxury{" "}
            </h1>
            <h1 className="font-heading -mt-10 lg:-mt-16 text-[#10377a] text-6xl">
              Rooms
            </h1>
          </div>
        </div>
        <div className="flex justify-center flex-wrap mx-auto gap-5 px-2  py-20 w-full">
          <div
            className="flex flex-col w-11/12 sm:w-3/4 md:w-[280px] lg:w-[300px] 2xl:w-[357px] cursor-pointer"
            onClick={() => navigate("/roomdetails")}
          >
            <div className="overflow-hidden ">
              <img
                src="/9.jpg"
                alt=""
                className="object-cover hover:scale-110 duration-1000"
              />
            </div>
            <div className="py-5  font-light flex flex-col gap-2 hover:text-red-800 duration-1000">
              <h1 className="text-3xl font-heading">Twin Room</h1>
              <h1 className="text-orange-600 text-xl font-text">700/Night</h1>
            </div>
          </div>
          <div className="flex flex-col w-11/12 sm:w-3/4 md:w-[280px] lg:w-[300px] 2xl:w-[357px] cursor-pointer">
            <div className="overflow-hidden">
              <img
                src="/GOVL1846.jpg"
                alt=""
                className="object-cover hover:scale-110 duration-1000"
              />
            </div>
            <div className="py-5  font-light flex flex-col gap-2 hover:text-red-800 duration-1000">
              <h1 className="text-3xl font-heading">Family Room</h1>
              <h1 className="text-orange-600 text-xl font-text">800/Night</h1>
            </div>
          </div>
          <div className="flex flex-col w-11/12 sm:w-3/4 md:w-[280px] lg:w-[300px] 2xl:w-[357px] cursor-pointer">
            <div className="overflow-hidden">
              <img
                src="/GOVL1872.jpg"
                alt=""
                className="object-cover hover:scale-110 duration-1000"
              />
            </div>
            <div className="py-5  font-light flex flex-col gap-2 hover:text-red-800 duration-1000">
              <h1 className="text-3xl font-heading">Suite Room</h1>
              <h1 className="text-orange-600 text-xl font-text">500/Night</h1>
            </div>
          </div>
          {/* <div className="flex flex-col w-11/12 sm:w-3/4 md:w-[280px] lg:w-[300px] 2xl:w-[357px] cursor-pointer">
            <div className="overflow-hidden">
              <img
                src="/9.jpg"
                alt=""
                className="object-cover hover:scale-110 duration-1000"
              />
            </div>
            <div className="py-5  font-light flex flex-col gap-2 hover:text-red-800 duration-1000">
              <h1 className="text-3xl">Single Room</h1>
              <h1 className="text-red-800">500/Night</h1>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

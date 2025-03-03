import { Link } from "react-router-dom";

export const Services = () => {
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
            <h1 className=" font-heading uppercase text-white text-6xl lg:text-8xl text-center w-full">
              Services
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] py-10 h-fit ">
        <div>
          <div className=" w-full text-center">
            <h1 className="font-title w-full  text-8xl lg:text-[140px] opacity-10">
              Services{" "}
            </h1>
            <h1 className="font-heading -mt-10 lg:-mt-16 text-[#10377a] text-3xl lg:text-6xl">
              FEATURES AND FACILITIES
            </h1>
          </div>
        </div>
        <div className="flex justify-center gap-2 flex-wrap mx-auto px-2 py-10 w-full">
          <div className="overflow-hidden relative">
            <img
              src="/12-1.jpg"
              alt=""
              className="object-cover w-[260px] h-[370px]"
            />
            <div className=" absolute top-1/2 text-center w-full font-heading text-white text-3xl">
              <h1 className="text-3xl uppercase font-heading">Resturant</h1>
            </div>
          </div>

          <div className="overflow-hidden relative ">
            <img
              src="/9-1.jpg"
              alt=""
              className="object-cover w-[260px] h-[370px] "
            />
            <div className=" absolute top-1/2 text-center w-full font-heading text-white text-3xl">
              <h1 className="text-3xl uppercase font-heading">weddings</h1>
            </div>
          </div>

          <div className="overflow-hidden relative ">
            <img
              src="/13-1.jpg"
              alt=""
              className="object-cover w-[260px] h-[370px]"
            />
            <div className=" absolute top-1/2 text-center w-full font-heading text-white text-3xl">
              <h1 className="text-3xl uppercase font-heading">swmming</h1>
            </div>
          </div>
          <div className="overflow-hidden relative  ">
            <img
              src="/14-1.jpg"
              alt=""
              className="object-cover w-[260px] h-[370px]"
            />
            <div className=" absolute top-1/2 text-center w-full font-heading text-white text-3xl">
              <h1 className="text-3xl uppercase font-heading">spa</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative ">
        <div className="absolute bg-black opacity-[70%] inset-0 z-20"></div>

        <div className="relative">
          <img
            src="/hotel_main_entrance.jpg"
            alt=""
            className="object-cover h-[350px]
             z-10 w-screen"
          />
          <div className="flex flex-col text-center absolute top-20 w-full px-10 text-white z-30">
            <h1 className="font-title w-full  text-5xl lg:text-[140px] opacity-30">
              Make Reservation{" "}
            </h1>
            <h1 className="lg:-mt-16  font-heading uppercase w-full text-[30px] lg:text-[50px]">
              Luxury room
            </h1>
            <div className="py-5">
              <Link
                to=""
                className=" uppercase bg-[#10377a]  text-[16px] p-2 font-heading"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <>
      <div className="relative ">
        <div className="absolute bg-black opacity-[70%] inset-0 z-20"></div>

        <div className="relative">
          <img
            src="/hotel_main_entrance.jpg"
            alt=""
            className="object-cover h-[500px]
             z-10 w-screen"
          />
          <div className="flex flex-col  absolute top-20 px-10 text-white z-30">
            <h1 className="font-title w-full  text-8xl lg:text-[140px] opacity-30">
              Discount{" "}
            </h1>
            <h1 className="-mt-16 w-3/4 font-heading text-[40px] lg:text-[50px]">
              TAKE ADVANTAGE OF OUR SEASONAL SPECIALS
            </h1>
            <Link
              to=""
              className="text-[#c19b76] text-[28px] py-5 font-heading"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

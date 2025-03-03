import { useEffect } from "react";

export const ReservationPage = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="">
        <div className="relative">
          <img
            src="/room.jpg"
            alt="rooms"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 w-full">
            <h1 className=" font-heading uppercase text-white text-4xl lg:text-8xl text-center w-full">
              Reservation
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#eeeeee] py-10 lg:py-16">
        {/* <div className="bg-[url('/bgimage.jpg')] absolute inset-0 bg-cover opacity-20 "></div> */}
        <div>
          <div className=" w-full text-center">
            <h1 className="font-title w-full  text-8xl lg:text-[120px] opacity-10">
              Welcome{" "}
            </h1>
            <h1 className="font-heading -mt-10 lg:-mt-12 text-[#10377a] text-2xl lg:text-6xl">
              MAKE A RESERVATION
            </h1>
          </div>
          <div className="py-10  md:w-1/2 w-11/12 sm:w-3/4  mx-auto">
            <form className="flex font-text flex-col text-gray-500 gap-5">
              <div className="flex flex-col gap-2">
                <label>Name</label>
                <input
                  type="text"
                  alt=""
                  placeholder="Name"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label>Contact</label>
                <input
                  type="text"
                  alt=""
                  placeholder="Contact"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  type="text"
                  alt=""
                  placeholder="Email"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Adults</label>
                <input
                  type="number"
                  alt=""
                  placeholder="Adults"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Children</label>
                <input
                  type="number"
                  alt=""
                  placeholder="Children"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Check In Date</label>
                <input
                  type="date"
                  alt=""
                  placeholder="Name"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Check Out Date</label>
                <input
                  type="date"
                  alt=""
                  placeholder="Name"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="mx-auto w-full">
                <button className="p-3 w-full hover:bg-black cursor-pointer bg-[#10377a] text-white">
                  MAKE A RESERVATION
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <hr />
          <h1 className="text-[40px] font-heading">FAQ</h1>
          <button className="uppercase  md:w-1/2 w-11/12 sm:w-3/4 text-orange-600 mt-10 text-start font-heading text-[20px] bg-white px-[14px] py-[16px] border border-gray-400">
            do you have onsite package?
          </button>
          <p className="py-5 text-start font-text text-[18px] text-[#6A6A6A]">
            Yes, We have
          </p>
        </div>
      </div>
    </>
  );
};

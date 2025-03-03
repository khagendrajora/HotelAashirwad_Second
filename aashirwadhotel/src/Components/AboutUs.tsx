import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <>
      <div className=" py-5 ">
        <div className="flex flex-col w-full text-center">
          <div>
            <h1 className="font-title text-[100px] lg:text-[140px] text-[#DEDEDE]">
              Welcome
            </h1>
            <h2 className="font-heading font-normal text-[25px] lg:text-[40px]  -mt-20 text-[#1C1C1C] ">
              WOUNDERFUL HOTEL IN <br></br>THE HEART OF Mt. ANNAPURNA
            </h2>
            <p className="font-text w-11/12 text-[#6A6A6A] lg:w-1/2 mx-auto py-5 lg:text-[20px]">
              Hotel Aashirwad is located in the heart of Mt. Annapurna and the
              lakeside of popular lake all over the world called Fewa Lake
            </p>
          </div>
          <Link to="" className="font-heading   text-[#10377a] text-[28px]">
            View our Services
          </Link>
          <div className="flex justify-center flex-wrap py-16 gap-5">
            <div className="">
              <img
                src="/4-4.jpg"
                alt=""
                className="object-cover w-[200px] h-[200px] mx-auto lg:w-[360px] lg:h-[460px]"
              />
            </div>
            <div className="">
              <img
                src="/3-6.jpg"
                alt=""
                className="object-cover w-[200px] h-[200px] mx-auto   lg:w-[360px] lg:h-[460px]"
              />
            </div>
            <div className="">
              <img
                src="/2-5.jpg"
                alt=""
                className="object-cover w-[200px] h-[200px] mx-auto   lg:w-[360px] lg:h-[460px] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

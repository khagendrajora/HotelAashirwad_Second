import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Blogs = () => {
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
        <div className="relative ">
          <img
            src="/room.jpg"
            alt="rooms"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 w-full">
            <h1 className="uppercase font-heading text-white text-6xl lg:text-8xl text-center w-full">
              blogs
            </h1>
          </div>
        </div>

        <div className="lg:w-3/5 w-11/12 2xl:w-1/2 py-10 mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <div className="text-[#9999] font-text text-[16px]">
                May 23,2000
              </div>
              <div className="lg:text-[40px] text-xl uppercase font-heading py-2">
                Leave your wallet at home
              </div>
              <hr />
              <p className="text-[16px] font-text py-2">
                by:<span className="text-orange-600"> Khagendra</span>
              </p>
              <div>
                <img
                  src="/annapurna-south-exp.-2.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
              <p className="py-5 font-text lg:text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                dignissimos aspernatur, est nulla quisquam at rem doloremque
                sunt iste asperiores saepe et iusto molestias expedita
                temporibus, perspiciatis ab commodi autem.
              </p>
              <Link to="" className="text-[22px] font-heading text-orange-600">
                Read More...
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="text-[#9999] font-text text-[16px]">
                May 23,2000
              </div>
              <div className="lg:text-[40px] text-xl uppercase font-heading py-2">
                Leave your wallet at home
              </div>
              <hr />
              <p className="text-[16px] font-text py-2">
                by:<span className="text-orange-600"> Khagendra</span>
              </p>
              <div>
                <img src="/blog1.jpg" alt="" className="object-cover" />
              </div>
              <p className="py-5 font-text lg:text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                dignissimos aspernatur, est nulla quisquam at rem doloremque
                sunt iste asperiores saepe et iusto molestias expedita
                temporibus, perspiciatis ab commodi autem.
              </p>
              <Link to="" className="text-[22px] font-heading text-orange-600">
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

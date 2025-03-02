import Slider from "react-slick";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {" "}
      <div className=" ">
        <div className="flex mx-auto  text-center md:w-1/2 lg:w-1/3 w-full">
          <div className="flex w-full  flex-col gap-5">
            <div className=" w-full text-center">
              <h1 className="font-title w-full  text-8xl lg:text-[140px] opacity-10">
                Client
              </h1>
              <h1 className=" -mt-10 lg:-mt-16 font-normal font-heading text-[#10377a] text-[30px] lg:text-[40px]">
                TESTIMONIALS
              </h1>
            </div>
          </div>
        </div>

        <div className="slider-container md:w-3/5 mx-auto overflow-hidden px- ">
          <Slider {...settings}>
            <div className="flex flex-col text-center space-y-6 p-2 md:p-10 hover:bg-white">
              <div className="w-full flex justify-center">
                <img
                  src="Icons/logo.jpeg"
                  alt=""
                  className="w-14 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[#1C1C1C] font-text text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quibusdam fugit fugiat, laudantium asperiores aut
                  expedita natus nisi! Saepe iure molestiae nam. Excepturi
                  cumque ea pariatur quae debitis velit id?
                </p>
                <div>
                  <h1 className="font-normal font-heading">
                    Khagendra Singh Jora
                  </h1>
                  <p className="font-text">Developer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center space-y-6 p-2 md:p-10 hover:bg-white">
              <div className="w-full flex justify-center">
                <img
                  src="Icons/logo.jpeg"
                  alt=""
                  className="w-14 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[#1C1C1C] font-text text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quibusdam fugit fugiat, laudantium asperiores aut
                  expedita natus nisi! Saepe iure molestiae nam. Excepturi
                  cumque ea pariatur quae debitis velit id?
                </p>
                <div>
                  <h1 className="font-normal font-heading">
                    Khagendra Singh Jora
                  </h1>
                  <p className="font-text">Developer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center space-y-6 p-2 md:p-10 hover:bg-white ">
              <div className="w-full flex justify-center">
                <img
                  src="Icons/logo.jpeg"
                  alt=""
                  className="w-14 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[#1C1C1C] font-text text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quibusdam fugit fugiat, laudantium asperiores aut
                  expedita natus nisi! Saepe iure molestiae nam. Excepturi
                  cumque ea pariatur quae debitis velit id?
                </p>
                <div>
                  <h1 className="font-normal font-heading">
                    Khagendra Singh Jora
                  </h1>
                  <p className="font-text">Developer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center space-y-6 p-2 md:p-10 hover:bg-white ">
              <div className="w-full flex justify-center">
                <img
                  src="Icons/logo.jpeg"
                  alt=""
                  className="w-14 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[#1C1C1C] font-text text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quibusdam fugit fugiat, laudantium asperiores aut
                  expedita natus nisi! Saepe iure molestiae nam. Excepturi
                  cumque ea pariatur quae debitis velit id?
                </p>
                <div>
                  <h1 className="font-normal font-heading">
                    Khagendra Singh Jora
                  </h1>
                  <p className="font-text">Developer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex py-8 justify-center gap-10 flex-wrap mx-auto w-11/12">
          <div>
            <img src="/1-1.jpg" alt="" />
          </div>

          <div>
            <img src="/2-2.jpg" alt="" />
          </div>

          <div>
            <img src="/3-2.jpg" alt="" />
          </div>

          <div>
            <img src="/4-2.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

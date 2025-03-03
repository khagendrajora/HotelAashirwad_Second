import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

export const AboutUsPage = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="relative">
        <img
          src="/room.jpg"
          alt="rooms"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-1/2 w-full">
          <h1 className=" font-heading uppercase text-white text-4xl lg:text-8xl text-center w-full">
            About Us
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 lg:py-20 lg:px-10">
        <div className="text-gray-500 lg:text-[40px] 2xl:text-[60px] font-heading text-xl">
          {" "}
          WELCOME TO AASHIRWAD{" "}
        </div>
        {/* <h1 className="text-3xl  md:text-6xl text-[#10377a] font-bold">
                Feel Like Home
              </h1> */}
        {/* <p className="text-gray-500 md:py-5  text-justify lg:text-[23px] text-lg md:w-11/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                tempora sed temporibus ex consequuntur aspernatur magni, vel
                molestias, fugit facilis consectetur repellendus ullam? Facilis
                consectetur, maxime voluptas voluptates nostrum nemo. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Minima
                tempora sed temporibus ex consequuntur aspernatur magni, vel
                molestias, fugit facilis consectetur repellendus ullam? Facilis
                consectetur, maxime voluptas voluptates nostrum nemo.
              </p> */}

        <div className=" w-11/12 lg:w-3/5 py-5 lg:py-10 mx-auto">
          <div className="">
            <img src="/Dashboard/hotel_view.jpg" className="object-cover " />
          </div>
        </div>
      </div>

      <div>
        <div className=" w-full text-center">
          <h1 className="font-title w-full  text-8xl lg:text-[120px] 2xl:text-[180px] opacity-10">
            Luxury{" "}
          </h1>
          <h1 className=" font-heading -mt-10 lg:-mt-14 text-[#10377a] text-6xl 2xl:text-8xl">
            ROOMS
          </h1>
        </div>
        <div className="slider-container w-full overflow-hidden lg:pt-20 pt-10 lg:p-3 ">
          <Slider {...settings}>
            <div>
              <div className="flex w-11/12 lg:w-3/4 flex-wrap flex-col md:flex-row  mx-auto">
                <div className="w-full md:w-3/5">
                  <img
                    src="/twin_room.jpg"
                    className="h-[500px] w-full object-cover"
                  />
                </div>
                <div className="md:w-2/5 sm:p-10 gap-2 p-3 flex flex-col bg-white">
                  <div className="flex flex-col sm:gap-10 gap-5">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-4xl 2xl:text-6xl font-heading text-[#1C1C1C]">
                        Twin Room
                      </h1>
                      <p className="text-[#6A6A6A] 2xl:text-3xl font-heading">
                        A quality room you want
                      </p>
                    </div>
                    <p className=" sm:text-lg 2xl:text-2xl  font-text text-[#6A6A6A]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quia reprehenderit dolorem laudantium, id officiis,
                      veritatis possimus minus natus dolores
                    </p>
                  </div>
                  <div className="flex justify-between font-text mt-auto w-11/12  text-orange-500 sm:text-2xl items-baseline">
                    <div>100/Night</div>
                    <button className="cursor-pointer hover:text-black duration-1000">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-11/12  lg:w-3/4 flex-wrap flex-col md:flex-row mx-auto">
                <div className="w-full md:w-3/5">
                  <img
                    src="/family_room.png"
                    className="h-[500px] w-full object-cover"
                  />
                </div>

                <div className="md:w-2/5 sm:p-10 gap-2 p-3 flex flex-col bg-white">
                  <div className="flex flex-col sm:gap-10 gap-5 ">
                    <div className="flex font-heading flex-col gap-4">
                      <h1 className="text-4xl 2xl:text-6xl  text-[#1C1C1C]">
                        Family Room
                      </h1>
                      <p className="text-[#6A6A6A] font-heading 2xl:text-3xl">
                        A quality room you want
                      </p>
                    </div>
                    <p className=" sm:text-lg 2xl:text-2xl  font-text text-[#6A6A6A]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quia reprehenderit dolorem laudantium, id officiis,
                      veritatis possimus minus natus dolores
                    </p>
                  </div>
                  <div className="flex justify-between font-text mt-auto w-11/12  text-orange-500 md:text-2xl items-baseline">
                    <div>100/Night</div>
                    <button className="cursor-pointer font-heading hover:text-black duration-1000">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-11/12  lg:w-3/4 flex-wrap flex-col md:flex-row mx-auto">
                <div className="w-full md:w-3/5">
                  <img
                    src="/suite_room.png"
                    className="h-[500px] w-full object-cover"
                  />
                </div>

                <div className="md:w-2/5 sm:p-10 gap-2 p-3 flex flex-col bg-white">
                  <div className="flex flex-col sm:gap-10 gap-5 ">
                    <div className="flex font-heading flex-col gap-4">
                      <h1 className="text-4xl  text-[#1C1C1C] 2xl:text-6xl">
                        Suite Room
                      </h1>
                      <p className="text-[#6A6A6A] 2xl:text-3xl font-heading ">
                        A quality room you want
                      </p>
                    </div>
                    <p className=" sm:text-lg 2xl:text-2xl font-text text-[#6A6A6A]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quia reprehenderit dolorem laudantium, id officiis,
                      veritatis possimus minus natus dolores
                    </p>
                  </div>
                  <div className="flex justify-between font-text mt-auto w-11/12  text-orange-500 md:text-2xl items-baseline">
                    <div>100/Night</div>
                    <button className="cursor-pointer font-heading hover:text-black duration-1000">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="relative h-[300px] mt-20 w-11/12 mx-auto ">
        <div className="bg-[url(/hotel_main_entrance.jpg)] inset-0 absolute bg-fixed opacity-65"></div>
        <div className="flex flex-wrap  h-full mx-auto px-2 text-center text-[#10377a] text-3xl font-bold font-playfair justify-between items-center">
          <div className="bg-white rounded-full py-10 px-11 z-10">
            <h1>30</h1>
            <p className="text-sm">Rooms</p>
          </div>
          <div className="bg-white rounded-full py-10 px-8 z-10">
            <h1>400+</h1>
            <p className="text-sm">Clients</p>
          </div>
          <div className="bg-white rounded-full py-9 px-11 z-10">
            <h1>20</h1>
            <p className="text-sm">Staffs</p>
          </div>
          <div className="bg-white rounded-full py-9 px-10 z-10">
            <h1>20+</h1>
            <p className="text-sm">Foods</p>
          </div>
        </div>
      </div>

      <div className="text-center  font-playfair w-10/12 mx-auto pt-20">
        <h1 className="text-xl font-heading "> OUR FEATURES</h1>
        <h1 className="text-4xl font-heading py-3 ">Why Choose Us</h1>
        <p className="py-4 font-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          dolorum. Recusandae, exercitationem vero voluptatem atque doloremque
          accusantium veniam quidem porro inventore. Accusamus, dolor. Adipisci
          consectetur magni quam? Autem, eveniet fuga.
        </p>
      </div>
      <div className="flex w-11/12 lg:w-3/4 mx-auto gap-5 flex-wrap py-14 justify-center">
        <div className="md:w-1/3">
          <img src="/room.jpg" alt="rooms" className=" object-cover" />
        </div>
        <div className="w-11/12 mx-auto md:text-2xl lg:w-1/2 flex md:gap-10 lg:gap-20 justify-center font-heading items-center">
          <ul className="space-y-7">
            <li className="min-w-[120px]">
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Spa/Gym
            </li>

            <li className="min-w-[140px]">
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Sightseeing
            </li>
            <li className="min-w-[80px]">
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Screen TV
            </li>
            <li className="min-w-[80px]">
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Free Wifi
            </li>
          </ul>
          <ul className="space-y-7">
            <li className="min-w-[80px]">
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Spa
            </li>
            <li className="min-w-[145px]">
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Free Parking
            </li>

            <li className="min-w-[80px]">
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Full AC
            </li>
            <li className="min-w-[160px]">
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Room Service
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

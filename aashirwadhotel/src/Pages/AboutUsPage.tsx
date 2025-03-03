import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AboutUsPage = () => {
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
      <div className="flex flex-col items-center py-20 px-10">
        <div className="text-gray-500 text-[40px] font-heading text-xl">
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

        <div className="w-3/5 py-10 mx-auto">
          <div className="">
            <img src="/Dashboard/hotel_view.jpg" className="object-cover " />
          </div>
        </div>
      </div>

      <div>
        <div className=" w-full text-center">
          <h1 className="font-title w-full  text-8xl lg:text-[120px] opacity-10">
            Luxury{" "}
          </h1>
          <h1 className=" font-heading -mt-10 lg:-mt-14 text-[#10377a] text-6xl">
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
                      <h1 className="text-4xl font-heading text-[#1C1C1C]">
                        Twin Room
                      </h1>
                      <p className="text-[#6A6A6A] font-text">
                        A quality room you want
                      </p>
                    </div>
                    <p className=" sm:text-lg  font-text text-[#6A6A6A]">
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
                      <h1 className="text-4xl  text-[#1C1C1C]">Family Room</h1>
                      <p className="text-[#6A6A6A] font-text ">
                        A quality room you want
                      </p>
                    </div>
                    <p className=" sm:text-lg  font-text text-[#6A6A6A]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quia reprehenderit dolorem laudantium, id officiis,
                      veritatis possimus minus natus dolores
                    </p>
                  </div>
                  <div className="flex justify-between font-text mt-auto w-11/12  text-orange-500 md:text-2xl items-baseline">
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
                    src="/suite_room.png"
                    className="h-[500px] w-full object-cover"
                  />
                </div>

                <div className="md:w-2/5 sm:p-10 gap-2 p-3 flex flex-col bg-white">
                  <div className="flex flex-col sm:gap-10 gap-5 ">
                    <div className="flex font-heading flex-col gap-4">
                      <h1 className="text-4xl  text-[#1C1C1C]">Suite Room</h1>
                      <p className="text-[#6A6A6A] font-text ">
                        A quality room you want
                      </p>
                    </div>
                    <p className=" sm:text-lg  font-text text-[#6A6A6A]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quia reprehenderit dolorem laudantium, id officiis,
                      veritatis possimus minus natus dolores
                    </p>
                  </div>
                  <div className="flex justify-between font-text mt-auto w-11/12  text-orange-500 md:text-2xl items-baseline">
                    <div>100/Night</div>
                    <button className="cursor-pointer hover:text-black duration-1000">
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
        <div className="flex flex-wrap  h-full mx-auto w-11/12 text-center text-[#10377a] text-3xl font-bold font-playfair justify-between items-center">
          <div className="bg-white rounded-full py-7 px-8 z-50">
            <h1>30</h1>
            <p className="text-sm">Rooms</p>
          </div>
          <div className="bg-white rounded-full py-7 px-8 z-50">
            <h1>30</h1>
            <p className="text-sm">Rooms</p>
          </div>
          <div className="bg-white rounded-full py-7 px-8 z-50">
            <h1>30</h1>
            <p className="text-sm">Rooms</p>
          </div>
          <div className="bg-white rounded-full py-7 px-8 z-50">
            <h1>30</h1>
            <p className="text-sm">Rooms</p>
          </div>
        </div>
      </div>

      <div className="text-center  font-playfair w-10/12 mx-auto pt-20">
        <h1 className="text-xl "> OUR FEATURES</h1>
        <h1 className="text-4xl tracking-[0.3rem] py-3 ">Why Choose Us</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          dolorum. Recusandae, exercitationem vero voluptatem atque doloremque
          accusantium veniam quidem porro inventore. Accusamus, dolor. Adipisci
          consectetur magni quam? Autem, eveniet fuga.
        </p>
      </div>
      <div className="flex w-3/4 mx-auto flex-wrap  font-playfair  py-14 justify-center">
        <div className="w-1/3">
          <img src="/room.jpg" alt="rooms" className=" object-cover" />
        </div>
        <div className="w-1/2 flex gap-20 justify-center items-center">
          <ul className="space-y-5">
            <li>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Spa/Gym
            </li>

            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Sightseeing
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Screen TV
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Free Wifi
            </li>
          </ul>
          <ul className="space-y-5">
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Spa
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Free Parking
            </li>

            <li>
              {" "}
              <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
              &nbsp;Full AC
            </li>
            <li>
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

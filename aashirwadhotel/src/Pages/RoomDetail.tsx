import { faCheck, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const RoomDetail = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  const [isActive, setIsActive] = useState("description");
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="">
          <div className="relative h-screen">
            <img
              src="/room.jpg"
              alt="rooms"
              className="w-full h-11/12 object-cover"
            />
            <div className="absolute top-1/2 w-full">
              <h1 className=" font-heading text-white text-5xl lg:text-8xl text-center w-full">
                Twin Room
              </h1>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto ">
          <div className="flex lg:gap-10 flex-wrap py-10 justify-between">
            <div className="flex flex-col lg:w-3/5">
              <div className="flex flex-wrap gap-1 py-2 md:justify-between">
                <h1 className="lg:text-3xl font-heading text-gray-500">
                  A quality room with mountail view
                </h1>
                <h1 className="text-orange-600 text-2xl font-text">
                  $500/Night
                </h1>
              </div>
              <div className="flex gap-1 py-2">
                <FontAwesomeIcon icon={faStar} size="xs" />
                <FontAwesomeIcon icon={faStar} size="xs" />
                <FontAwesomeIcon icon={faStar} size="xs" />
                <FontAwesomeIcon icon={faStar} size="xs" />
              </div>
              {/* <h1 className="text-gray-500 font-playfair text-4xl">
                {" "}
                Luxary Double Suite Room
              </h1> */}
              <div className="pt-5   w-full">
                <img
                  src="/room.jpg"
                  alt="rooms"
                  className="object-cover mx-auto"
                />
                {/* 
                <div className="flex flex-wrap justify-center gap-4 lg:gap-10 py-5">
                  <img
                    src="/room.jpg"
                    alt="rooms"
                    className="object-cover w-1/5"
                  />
                  <img
                    src="/room.jpg"
                    alt="rooms"
                    className="object-cover w-1/5"
                  />
                  <img
                    src="/room.jpg"
                    alt="rooms"
                    className="object-cover w-1/5"
                  />
                  <img
                    src="/room.jpg"
                    alt="rooms"
                    className="object-cover w-1/5"
                  />
               
                </div> */}
              </div>
              <div className="flex flex-wrap gap-[11px] gap-y-10 py-10 justify-between text-sm font-playfair font-normal">
                <div className="flex flex-col  items-center">
                  <img
                    src="/Icons/bath-tub.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>BATHROOM</h1>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/double-bed.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>QUEEN</h1>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/hotel-service.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>ROOM SERVICE</h1>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/hair-dryer.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>HAIR DRIYER</h1>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/minibar.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>MINI BAR</h1>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/air-conditioning.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>CONDITIONING</h1>
                </div>
              </div>

              <div className="flex  gap-2 lg:gap-10 md:text-xl py-4 font-heading ">
                <button
                  className={`${
                    isActive === "description" ? "text-orange-600" : ""
                  } hover:text-orange-600 cursor-pointer`}
                  onClick={() => setIsActive("description")}
                >
                  DESCRIPTION
                </button>
                <button
                  className={`${
                    isActive === "services" ? "text-orange-600" : ""
                  } hover:text-orange-600 cursor-pointer`}
                  onClick={() => setIsActive("services")}
                >
                  ROOM&nbsp;SERVICES
                </button>
                <button
                  className={`${
                    isActive === "prices" ? "text-orange-600" : ""
                  } hover:text-orange-600 cursor-pointer`}
                  onClick={() => setIsActive("prices")}
                >
                  PRICES
                </button>
              </div>
              <hr />
              {isActive === "description" && (
                <div className="font-text text-lg text-[#6A6A6A] py-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                  excepturi tempora. Rerum deserunt neque excepturi voluptates
                  fugit earum animi consequatur quis, magni, quos expedita
                  voluptate minus molestiae voluptatum quam maxime.
                </div>
              )}
              {/* <div className="flex flex-col "> */}
              {/* <h1 className="text-2xl font-playfair font-bold">
                  Room Services
                </h1> */}
              {isActive === "services" && (
                <div className="flex flex-wrap py-10 gap-y-5 font-text text-lg text-[#6A6A6A] justify-between">
                  <ul className="space-y-3">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp; Double Bed
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;80 Sq. mt
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp; 6 person
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Free Wifi
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Breakfast Included
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faTimes}
                        style={{ color: "#f70820" }}
                      />
                      &nbsp; Private Balcony
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Screen TV
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Full AC
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Room Service
                    </li>
                  </ul>
                </div>
              )}
              {/* </div> */}
              {isActive === "prices" && (
                <div className="flex flex-wrap font-text text-lg text-[#6A6A6A] py-10 justify-center gap-4">
                  <ul className=" border  border-gray-300">
                    <li className="border-b-1 px-16 border-gray-300  font-heading p-3  ">
                      1 Night{" "}
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-2xl font-text text-orange-600
              "
                    >
                      $ 500
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-lg font-text 
              "
                    >
                      Cable TV
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-lg font-text 
              "
                    >
                      Air Conditionaring
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-lg font-text 
              "
                    >
                      <button className="p-2 bg-[#10377a] text-white px-6 text-sm">
                        Select
                      </button>
                    </li>
                  </ul>
                  <ul className=" border  border-gray-300">
                    <li className="border-b-1 px-16 border-gray-300  font-heading p-3 ">
                      1 Night{" "}
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-2xl font-text text-orange-600
              "
                    >
                      $ 500
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-lg font-text 
              "
                    >
                      Cable TV
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-lg font-text 
              "
                    >
                      Air Conditionaring
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-lg font-text 
              "
                    >
                      <button className="p-2 bg-[#10377a] text-white px-6 text-sm">
                        Select
                      </button>
                    </li>
                  </ul>
                  <ul className=" border  border-gray-300">
                    <li className="border-b-1 px-16 border-gray-300  font-heading p-3  ">
                      1 Night{" "}
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-2xl font-text text-orange-600
              "
                    >
                      $ 500
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-lg font-text 
              "
                    >
                      Cable TV
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-lg font-text 
              "
                    >
                      Air Conditionaring
                    </li>
                    <li
                      className="text-center border-b-1 border-gray-300 p-3 text-lg font-text 
              "
                    >
                      <button className="p-2 bg-[#10377a] text-white px-6 text-sm">
                        Select
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              <div className="flex flex-col w-11/12  py-10">
                <h1 className="text-2xl font-heading">ROOM DETAILS</h1>
                <ul className="py-4 font-text text-gray-500 space-y-4">
                  <li>
                    <span className="flex justify-between py-1">
                      <h1>Bed:</h1>
                      <h1>Quuen</h1>
                    </span>

                    <hr />
                  </li>
                  <li>
                    <span className="flex justify-between py-1">
                      <h1>Occupancy:</h1>
                      <h1>2 person</h1>
                    </span>

                    <hr />
                  </li>
                  <li>
                    <span className="flex justify-between py-1">
                      <h1>Size:</h1>
                      <h1>35-40sqm</h1>
                    </span>

                    <hr />
                  </li>
                  <li>
                    <span className="flex justify-between py-1">
                      <h1>Free Wifi:</h1>
                      <h1>Yes</h1>
                    </span>

                    <hr />
                  </li>
                  <li>
                    <span className="flex justify-between py-1">
                      <h1>Breakfast:</h1>
                      <h1>Yes/No</h1>
                    </span>

                    <hr />
                  </li>
                </ul>
              </div>

              <div className="w-11/12 ">
                <h1 className="font-heading text-2xl uppercase text-[#1C1C1C]">
                  Like This Room?
                </h1>
                <div className="flex gap-10 py-4 text-lg text-[#6A6A6A] font-text">
                  <h1>Facebook</h1>
                  <h1>Twitter</h1>
                  <h1>Instagram</h1>
                </div>
                <hr />
              </div>

              <div className="py-10">
                <h1 className="font-heading text-2xl ">LEAVE A REPLY</h1>
                <p className="text-[#6C6C6C] text-sm">
                  Your email adddress will not be published.
                </p>

                <div className="py-5 px-1 space-y-3 text-[#6C6C6C]">
                  <div className="flex flex-col gap-1">
                    <label>Comment</label>
                    <textarea
                      placeholder="Your message"
                      className="border p-2 bg-[#F5F5F5]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border p-2 bg-[#F5F5F5]"
                    />
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="border p-2 bg-[#F5F5F5]"
                    />
                  </div>
                  <button className="border p-2 bg-[#10377a] hover:bg-black transition-all duration-400 cursor-pointer text-white">
                    Add Comment
                  </button>
                </div>
              </div>
            </div>

            <div className="w-11/12 lg:w-1/3  lg:mt-24">
              <div className="w-full mx-auto">
                <h1 className="text-3xl mx-auto font-heading font-bold text-[#6A6A6A]">
                  Book Reservation
                </h1>
                <form className="font-text space-y-3 text-[#6A6A6A]">
                  <div className="flex flex-col  py-4 gap-2">
                    <label>Check In Date</label>
                    <input
                      type="date"
                      placeholder="Check In Date"
                      className="border p-1 text-gray-400 rounded "
                    />
                  </div>
                  <div className="flex flex-col  gap-2">
                    <label>Check Out Date</label>
                    <input
                      type="date"
                      placeholder="Check Out Date"
                      className="border p-1 text-gray-400 rounded "
                    />
                  </div>
                  <div className="flex flex-wrap gap-3 justify-between  py-4">
                    <input
                      type="number"
                      placeholder="Adults"
                      className="border p-1 w-full text-gray-400 rounded "
                    ></input>
                    <input
                      type="number"
                      placeholder="Children"
                      className="border p-1 w-full text-gray-400 rounded "
                    ></input>
                  </div>
                  <div className="flex flex-col gap-5 ">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border p-1 text-gray-400 rounded "
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border p-1 text-gray-400 rounded "
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="border p-1 text-gray-400 rounded "
                    />
                  </div>
                  <div className="w-full py-4">
                    <button className="p-3 w-full lg:w-3/4 hover:bg-black cursor-pointer rounded duration-400 transition-all bg-[#10377a] text-white">
                      BOOK A ROOM NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  useEffect(() => {
    setIsMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutsideMenu = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);
  return (
    <>
      <div className=" font-text text-black bg-white fixed  w-full z-40">
        <div className="flex justify-between relative z-20 lg:gap-10 w-full  ">
          <div className="flex  px-2 items-center z-40 gap-1">
            <img
              src="/Icons/logo.jpeg"
              alt="logo"
              className="w-[100px] lg:h-[100px]  absolute z-[99999] top-1 block  object-center"
            />
            {/* <h1 className="lg:hidden font-heading font-semibold text-[40px] text-[#10377a]">
              Hotel&nbsp;Aashirwad
            </h1> */}
          </div>
          <div className="flex w-full lg:w-fit items-center lg:justify-between justify-end">
            <div className="lg:hidden flex items-center p-2 gap-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                className="text-gray-600"
              />
              <FontAwesomeIcon
                icon={faCartPlus}
                size="lg"
                className="text-gray-600"
              />
              <FontAwesomeIcon
                icon={faBars}
                size="2xl"
                onClick={() => setIsMenu(!isMenu)}
                className="cursor-pointer bg-[#10377a] text-white border p-2 rounded "
              />
            </div>
            <ul className="lg:flex hidden items-center h-fit w-fit text-xl list-none gap-8">
              <li className="hover:text-[#10377a] transition duration-500 cursor-pointer">
                <Link to="/"> Home</Link>
              </li>
              <li className="hover:text-[#10377a] transition duration-500 cursor-pointer">
                <Link to="/rooms">Rooms</Link>
              </li>
              <li className="hover:text-[#10377a] transition duration-500 cursor-pointer">
                <Link to="/aboutus">About</Link>
              </li>

              <li className="hover:text-[#10377a] transition duration-500 cursor-pointer">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:text-[#10377a] transition duration-500 cursor-pointer">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="hover:text-[#10377a] transition duration-500 cursor-pointer">
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
          <div className=" hidden lg:flex items-center gap-5">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              className="text-gray-600"
            />
            <FontAwesomeIcon
              icon={faCartPlus}
              size="xl"
              className="text-gray-600"
            />
            <button className=" h-full  p-4 transition duration-500  justify-between hover:bg-black hover:text-white   bg-[#10377a]  cursor-pointer text-white  text-xl">
              <Link to="/reservation">Reservation</Link>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`absolute z-100 top-0 left-0 h-screen min-w-[200px] font-text font-[20px] w-1/5 bg-[#10377a] 
    transition-all  duration-400 ease-linear 
    ${isMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
  `}
      >
        <ul className="w-full p-10 text-2xl bg-[#10377a]  list-none text-gray-500 flex flex-col gap-7  ">
          <li className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/"> Home</Link>
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/rooms">Rooms</Link>
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/aboutus">About</Link>
          </li>

          <li className="hover:text-black transition duration-500 cursor-pointer">
            Services
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            Review
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/contactus">Contact</Link>
          </li>
          <button className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/reservationform">Reservation</Link>
          </button>
        </ul>
      </div>
    </>
  );
};

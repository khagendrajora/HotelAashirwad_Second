import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export const ContactUsPage = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="bg-[#eeeeee]">
        <div className="relative">
          <img
            src="/room.jpg"
            alt="rooms"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 w-full">
            <h1 className=" font-heading uppercase text-white text-4xl lg:text-8xl text-center w-full">
              Contacts
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-full py-10 text-center">
        <h1 className="font-title w-full  text-8xl lg:text-[120px] opacity-10">
          Connect{" "}
        </h1>
        <h1 className="font-heading -mt-10 lg:-mt-12  text-[#10377a] text-6xl">
          GET IN TOUCH
        </h1>
      </div>
      <div className="flex flex-wrap lg:w-10/12 gap-10 justify-center mx-auto ">
        <div className="flex md:py-10 pb-10 order-1 md:order-1 flex-col md:w-1/3">
          <div className="order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d369.10049689229356!2d83.9587830920682!3d28.212635899589245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d27.688766299999997!2d85.28395689999999!4m5!1s0x399595e339626bc3%3A0xe82e156a04956623!2s6X75%2B4G8%2C%20Pokhara%2033700!3m2!1d28.212722!2d83.95895519999999!5e1!3m2!1sen!2snp!4v1740337343060!5m2!1sen!2snp"
              loading="lazy"
              className="min-w-[200px] max-w-[180px] h-[250px] lg:max-w-[500px]"
            ></iframe>
          </div>
          <div className="flex py-10 flex-col order-0">
            <h1
              className="text-3xl font-heading
          "
            >
              Our Contacts
            </h1>
            <div className="py-4 flex flex-col font-text gap-5">
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                &nbsp;&nbsp;&nbsp;Pokhara, Nepal
              </div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp;&nbsp;&nbsp;hotelaashirwad@gmail.com
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;&nbsp;981277262
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 order-0 md:order-1 w-11/12 lg:py-10">
          <form className="flex font-text flex-col text-gray-500 gap-5">
            <div className="flex flex-col gap-2">
              <label>Your Name</label>
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
              <label>Your Message</label>
              <textarea
                placeholder="Your Message"
                className="border p-3 rounded bg-white"
              ></textarea>
            </div>
            <div className="mx-auto w-full">
              <button className="p-3 w-full hover:bg-black cursor-pointer bg-[#10377a] text-white">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

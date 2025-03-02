import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#10377a]   p-10 text-white">
        <div className="flex flex-wrap  justify-between gap-10 mx-auto pb-5  lg:w-10/12">
          <div className="flex flex-col gap-7">
            <h1 className="text-[20px] font-heading">INFO</h1>
            <div className="flex flex-col font-text text-[16px] gap-4">
              <p className="flex ">
                <span className="min-w-14">Tel:</span> <span>9812766153</span>{" "}
              </p>
              <p className="flex ">
                <span className="min-w-14">Email:</span> <span></span>{" "}
              </p>
              <p className="flex gap-2 ">
                <span className="min-w-16">Location:</span>{" "}
                <span>Pokhara,&nbsp;Lakeside</span>{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-[20px] font-heading">About Us</h1>
            <ul className="list-none flex font-text flex-col text-[16px] gap-3">
              <li className="cursor-pointer">About</li>

              <li className="cursor-pointer">Rooms</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Our Location</li>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-[20px] text-center font-heading">
              Quick Links
            </h1>
            <div className="flex flex-wrap font-text lg:gap-32 gap-10 ">
              <ul className="list-none flex flex-col text-[16px] gap-3">
                <li className="cursor-pointer">Facebook</li>
                <li className="cursor-pointer">Instagram</li>
                <li className="cursor-pointer">Youtube</li>
                <li className="cursor-pointer">Tiktok</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-[20px] font-heading">Google Map</h1>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d369.10049689229356!2d83.9587830920682!3d28.212635899589245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d27.688766299999997!2d85.28395689999999!4m5!1s0x399595e339626bc3%3A0xe82e156a04956623!2s6X75%2B4G8%2C%20Pokhara%2033700!3m2!1d28.212722!2d83.95895519999999!5e1!3m2!1sen!2snp!4v1740337343060!5m2!1sen!2snp"
                loading="lazy"
                className="min-w-[200px] max-w-[180px] h-[200px] lg:max-w-[400px]"
              ></iframe>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center items-center py-10 gap-10 flex-col">
          <div className="flex gap-7">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#c19b76", cursor: "pointer" }}
              size="xl"
              className=""
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#c19b76", cursor: "pointer" }}
              size="xl"
              className=""
            />
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ color: "#c19b76", cursor: "pointer" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#c19b76", cursor: "pointer" }}
              size="xl"
            />
          </div>
          <h1 className="font-heading text-[30px] text-center ">
            HOTEL&nbsp;AASHIRWAD
          </h1>
        </div>
        <div className="w-full text-center text-xs">
          Copyright © Hotel Aashirwad Website by DigiSoft Developers
        </div>
      </div>
    </>
  );
};

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  };
  const images = [
    {
      src: "/Dashboard/hotel_view.jpg",
      alt: "Hero Image 2",
      text: "Peaceful Environment",
    },
    { src: "/room.jpg", alt: "Hero Image 2", text: "Finest Rooms" },

    {
      src: "/Dashboard/mountain_range.jpg",
      alt: "Hero Image 2",
      text: "Eye Catching View",
    },
  ];
  return (
    <>
      <div className="slider-container w-full ">
        <Slider {...settings}>
          {images.map((image, i) => (
            <div key={i} className="relative">
              <img
                src={image.src}
                alt="image"
                className="h-screen w-screen hover:scale-105 duration-1000 bg-fixed object-cover"
              />
              <div className="absolute top-1/2 w-full">
                <h1 className=" font-title text-white text-8xl text-center w-full">
                  {image.text}
                </h1>
                <button className="flex mx-auto p-2 font-heading cursor-pointer hover:bg-black transition duration-800 text-lg  text-white bg-[#10377a]">
                  Find More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

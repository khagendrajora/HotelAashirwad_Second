import { AboutUs } from "../Components/AboutUs";
import { Hero } from "../Components/Hero";
import { Info } from "../Components/Info";
import { Rooms } from "../Components/Rooms";
import { Services } from "../Components/Services";
import { Testimonials } from "../Components/Testimonials";

export const LandingPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <AboutUs />
        <Rooms />
        <Services />
        <Testimonials />
        <Info />
      </div>
    </>
  );
};

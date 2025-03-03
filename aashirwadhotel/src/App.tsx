import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { LandingPage } from "./Pages/LandingPage";
import { Rooms } from "./Pages/Rooms";
import { RoomDetail } from "./Pages/RoomDetail";
import { Services } from "./Pages/Services";
import { ContactUsPage } from "./Pages/ContactUsPage";
import { ReservationPage } from "./Pages/ReservationPage";
import { AboutUsPage } from "./Pages/AboutUsPage";
import { Blogs } from "./Pages/Blogs";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/roomdetails" element={<RoomDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

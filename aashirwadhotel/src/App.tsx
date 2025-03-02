import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { LandingPage } from "./Pages/LandingPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

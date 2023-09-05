import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import {
  About,
  Contact,
  Footer,
  Header,
  Partners,
  Services,
  WhyUs,
} from "./components/index";
import { Routes, Route } from "react-router-dom";
import ServicesSection from "./pages/servicesPage/ServicesPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import PartnersPage from "./pages/partnersPage/PartnersPage";

// aos
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import SingleServicePage from "./pages/servicesPage/SingleServicePage";

function App() {

  const [t, i18n] = useTranslation();
  if (i18n.language === "en") {
    document.documentElement.style.direction = "ltr";
    document.documentElement.setAttribute("lang", "en");
  } else if (i18n.language === "ar") {
    document.documentElement.style.direction = "rtl";
    document.documentElement.setAttribute("lang", "an");
  }

  //----------
  useEffect(() => {
    Aos.init();
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // depenencies is [location.pathname]

  //----------
  console.log("App.jsx:", "Render App.jsx");

  return (
    <div
      className={`App bg-white ${i18n.language === "en" ? "font-sf" : "font-almaria"
        } text-white`}
    >
      <Routes>
        <Route
          path="/"
          element={
            <div className=" LANDING_PAGE mx-auto">
              <Header />
              <Services />
              <About />
              <WhyUs />
              <Partners />
              <Contact />
              <Footer />
            </div>
          }
        />

        <Route path="/services" element={<ServicesSection />} />
        <Route path="/services/:serviceId" element={<SingleServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
    </div>
  );
}

export default App;

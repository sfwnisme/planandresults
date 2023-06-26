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
import {
  ServiceFive,
  ServiceFour,
  ServiceOne,
  ServiceSeven,
  ServiceSix,
  ServiceThree,
  ServiceTwo,
  ServiceZero,
} from "./pages/servicesPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import PartnersPage from "./pages/partnersPage/PartnersPage";

// aos
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  //----------
  console.log("App.jsx:", "Render App.jsx");

  return (
    <div
      className={`App bg-white ${
        i18n.language === "en" ? "font-sf" : "font-almaria"
      } text-white`}
    >
      <Routes>
        <Route
          path="/*"
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
        <Route path="/services/service-0" element={<ServiceZero />} />
        <Route path="/services/service-1" element={<ServiceOne />} />
        <Route path="/services/service-2" element={<ServiceTwo />} />
        <Route path="/services/service-3" element={<ServiceThree />} />
        <Route path="/services/service-4" element={<ServiceFour />} />
        <Route path="/services/service-5" element={<ServiceFive />} />
        <Route path="/services/service-6" element={<ServiceSix />} />
        <Route path="/services/service-7" element={<ServiceSeven />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
    </div>
  );
}

export default App;

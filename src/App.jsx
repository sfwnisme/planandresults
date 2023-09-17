// Hooks imports
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

// components, containers and pages imports
import { Layout } from "./components";
import { HomePage, ServicesPage, AboutPage, PartnersPage, SingleServicePage } from "./pages";
import "./App.css";

// react-router-dom imports
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// aos imports
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {

  const [t, i18n] = useTranslation();
  if (i18n.language === "en") {
    document.documentElement.style.direction = "ltr";
    document.documentElement.setAttribute("lang", "en");
  } else if (i18n.language === "ar") {
    document.documentElement.style.direction = "rtl";
    document.documentElement.setAttribute("lang", "an");
  }

  // aos server effects
  useEffect(() => {
    Aos.init();
  }, []);

  // scroll up onchange the pathname
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // depenencies is [location.pathname]

  console.log("App.jsx:", "Render App.jsx");
console.log('==========location', location.origin)
console.log('==========location', location.pathname)
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="services">
          <Route index element={<ServicesPage />} />
          <Route path=":serviceId" element={<SingleServicePage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="partners" element={<PartnersPage />} />
      </Route>
    </Routes >
  )
}

export default memo(App);

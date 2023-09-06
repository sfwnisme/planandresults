import React from 'react'
import { Navbar } from '../../containers'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ScreenLoader from '../Preloader/Preloader'

const Layout = () => {
  const [t, i18n] = useTranslation()
  return (
    <div
      className={`App bg-white ${i18n.language === "en" ? "font-sf" : "font-almaria"} text-white`}>
      <ScreenLoader />
      <Navbar />
      <Outlet />
      <Contact />
      <Footer />
    </div >
  )
}

export default Layout
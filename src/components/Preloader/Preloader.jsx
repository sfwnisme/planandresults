import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../../animation'
import { useLocation } from 'react-router-dom'

const Preloader = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    preLoaderAnim()
  }, [pathname])

  return (
    <div className='preloader'>
      <div className='texts-container'>
        <span>&nbsp;خطة,</span>
        {/* <span> </span> */}
        <span>&nbsp;عمل,</span>
        {/* <span> </span> */}
        <span>&nbsp;نتااااااااائج,</span>
      </div>
    </div>
  )
}

export default Preloader
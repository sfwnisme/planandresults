import React from 'react'
import { About, Header, Partners, Popup, Services, WhyUs } from '../../components'
import Extra from '../../components/Extra/Extra'
import { Btn } from '../../containers'

const HomePage = () => {
  return (
    <div className='HOMEPAGE mx-auto'>
      <Header />
      <Extra />
      {/* <About /> */}
      <Services />
      <Btn />
      {/* <WhyUs /> */}
      <Partners />
      {/* <Popup /> */}
    </div>
  )
}

export default HomePage
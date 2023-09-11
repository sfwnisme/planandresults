import React from 'react'
import { About, Header, Partners, Services, WhyUs } from '../../components'
import Extra from '../../components/Extra/Extra'

const HomePage = () => {
  return (
    <div className='HOMEPAGE mx-auto'>
      <Header />
      <Extra />
      {/* <About /> */}
      <Services />
      <WhyUs />
      <Partners />
    </div>
  )
}

export default HomePage
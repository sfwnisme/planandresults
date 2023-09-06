import React from 'react'
import { About, Header, Partners, Services, WhyUs } from '../../components'

const HomePage = () => {
  return (
    <div className='HOMEPAGE mx-auto'>
      <Header />
      <About />
      <Services />
      <WhyUs />
      <Partners />
    </div>
  )
}

export default HomePage
import React from 'react'
import Nav from '../components/landing/Nav'
import Footer from '../components/landing/Footer'
import SolutionEnterprice1 from '../components/landing/SolutionEnterprice/SolutionEnterprice1'
import SolutionEnterprice2 from '../components/landing/SolutionEnterprice/SolutionEnterprice2'
import SolutionEnterprice3 from '../components/landing/SolutionEnterprice/SolutionEnterprice3'
import ROICalculator from '../components/landing/SolutionEnterprice/RoiCalculator'
import ScrollToTop from '../components/landing/ScrollToTop'

const SolutionEnterprise = () => {
  return (
    <div className='bg-[#faf7f5]'>
        <Nav />
            <SolutionEnterprice1 />
            <SolutionEnterprice2 />
            <ROICalculator />
            <SolutionEnterprice3 />
        <Footer />
        <ScrollToTop />
    </div>
  )
}

export default SolutionEnterprise

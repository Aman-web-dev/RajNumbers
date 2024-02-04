import React from 'react'
import Hero from '../sections/Hero'
import FormSection from '../sections/FormSection'
import ProjectSection from '../sections/ProjectSection'
import ClientSection from '../sections/ClientSection'
import TestimonialSection from '../sections/TestimonialSection'
import TrustSection from '../sections/TrustSection'
import Reviews from '../sections/Reviews'
import VVIPNumbers from '../sections/VVIPNumbers'
import Process from '../sections/Process'


function HomePage() {
  return (
    <div className='w-full m-auto overflow-hidden'>
        <Hero/>
        <Reviews/>
        <VVIPNumbers/>
        <TestimonialSection/>
        <Process/>


        {/* <FormSection/> */}
        {/* <ProjectSection/> */}
        {/* <ClientSection/> */}
        {/* <TrustSection/> */}
    </div>
  )
}

export default HomePage

import React from 'react'
import Hero from '../sections/Hero'
import TestimonialSection from '../sections/TestimonialSection'
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

    </div>
  )
}

export default HomePage

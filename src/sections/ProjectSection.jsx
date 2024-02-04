import React, { useEffect } from 'react'
import Aos from 'aos'
import ProjectCards from '../components/ProjectCards'

function ProjectSection() {



    useEffect(()=>{
        Aos.init({duration:2000})
    })
  return (


    <div className='py-4'>


    <div data-aos="fade-left my-4 py-8">
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Projects we Worked</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>
</div>
    <div className='w-[90vw]  flex flex-wrap m-auto'>
        <ProjectCards aos={"fade-left"}/>
        <ProjectCards aos={"fade-left"}/>
        <ProjectCards aos={"fade-left"}/>
        <ProjectCards aos={"fade-left"}/>
        <ProjectCards aos={"fade-left"}/>
        <ProjectCards aos={"fade-left"}/>

 
    </div>

    </div>
  )
}

export default ProjectSection

import React from 'react'
import ProjectCards from '../components/ProjectCards'
import { NUmberData } from '../data/NUmberData'

function VVIPNumbers() {
  return (
    <div className='mb-4 flex flex-col items-center'>

<div className='text-center'>
      
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Checkout The Best VIP Numbers</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"></p>


</div>

<div className='flex flex-wrap '>

        {NUmberData.map((elem,index)=>{

          
           
            return (<ProjectCards Title={elem.Number} Type={elem.type} key={index+''+elem.Number}/>)
           
        })}
     </div>

     <a target='_blank' href="https://api.whatsapp.com/send/?phone=919111167676&text&type=phone_number&app_absent=0" className="inline-flex my-4 items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    And Many More
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>
    </div>
  )
}

export default VVIPNumbers

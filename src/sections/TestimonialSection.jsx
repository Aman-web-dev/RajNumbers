import React, { useState } from 'react'
import Iphone from '../assets/images/phine.png'

import { VideotestimonialData } from '../data/VideoTestimonialData'

function TestimonialSection() {

const[currentVideo,setCurrentVideo]=useState(0)



// const PrevVideo=()=>{

// 	console.log(currentVideo,VideotestimonialData.length)

// 	if(currentVideo+1==VideotestimonialData.length){

// 		setCurrentVideo(0)

// 		console.log("setting it to 0")
// 	}

// 	else{

// 	setCurrentVideo(currentVideo+1)

// 	console.log("here is the CurrentVideo ", currentVideo)

// 	console.log(VideotestimonialData[currentVideo])

// }

	
// }


const PrevVideo = () => {
	setCurrentVideo((prevVideo) => {
	  if (prevVideo + 1 === VideotestimonialData.length) {
		console.log("setting it to 0")
		return 0;
	  } else {
		console.log(prevVideo + 1)
		return prevVideo + 1;
	  }
	});
  };

 


  return (
	<div>



	<div className='text-center'>

   
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">We invest in the world’s potential</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>


	</div>





<div className='flex flex-col'>
	  
<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
		<video  className='w-[272px] h-[572px]' controls key={VideotestimonialData[currentVideo].link} >
			<source className='bg-black' src={VideotestimonialData[currentVideo].link} type="video/mp4"/>
		</video>
    </div>
</div>




<div className=' h-[30vh] mx-auto my-4'>


<button type="button" className="min-w-lg text-white my-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={PrevVideo}>Next Testimonial</button>






</div>
</div>




	</div>	
  )
}

export default TestimonialSection

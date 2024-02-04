import React from 'react'

function ProcessCircle(props) {
    return (

        <div className='flex flex-col md:w-[18vw]   text-center align-center  justify-center' data-aos="fade-bottom">
            <div className='flex mx-auto flex-col bg-blue-600 sm:w-[30vw] sm:h-[30vw] w-[50vw] h-[50vw] md:w-[14vw] md:h-[14vw]  rounded-full'>
                <div className='flex flex-col border-2 border-white border-dashed align-center justify-center bg-blue-600 rounded-full w-[80%] h-[80%] m-auto    '>
                {props.SVG}
                </div>
            </div>  
            <p className='text-xl text-wrap font-bold text-center my-auto md:w-[18vw] sm:w-[40vw] w-[100vw]'>{props.processTitle}</p>

        </div>
    )
}

export default ProcessCircle

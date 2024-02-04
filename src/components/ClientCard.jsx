import React from 'react'

function ClientCard(props) {
  return (
    <div className='box h-24 w-44 bg-white mx-auto xl:ml-7 border-2 border-black rounded-3xl mb-6 flex items-center justify-center' data-aos="fade-left"><p className='font-bold text-xl'>{props.Number}</p></div>

  )
}

export default ClientCard

import React from 'react'

function About() {
  return (
    <div className='bg-[#ebece7] '>


      <div className='text-center ' id='heading '>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">About Raj Vip Numbers</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">.</p>
      </div>

      <div className='flex md:flex-row flex-col' id=' About'>

        <img className='mx-auto my-auto w-[30vw] h-[20vw]' src='https://firebasestorage.googleapis.com/v0/b/rajvip-numbers.appspot.com/o/logo%2FRAJ%20VIP%20NUMBER%20LOGO%201.webp?alt=media&token=37e43ac8-cf57-4060-b2cd-f0b89fc3027f' />

        <div className='md:w-[50vw] w-[90vw] mx-auto'>

          <p className='text-lg font-bold mx-auto my-4'>
            Raj Vip Numbers stands as a prominent and reliable entity based in Delhi, India, specializing in the distribution of exclusive VIP mobile numbers throughout the country. Boasting an extensive inventory of over 20 lac mobile numbers, our company has earned the trust of a diverse clientele. With a track record of successfully serving more than 15,000 customers and selling upwards of 20,000 mobile numbers, we have become a preferred choice in the market.
          </p>


          <p className='text-lg font-bold mx-auto my-4'>
            Our commitment to providing top-notch service is reflected in the seamless experience we offer to our customers. Whether you're seeking a unique and distinguished mobile number for personal or business use, Raj Vip Numbers ensures a diverse range to cater to individual preferences. We take pride in our status as a leading dealer, with a focus on delivering not just numbers but an unparalleled level of customer satisfaction.
          </p>

          <p className='text-lg font-bold mx-auto my-4'>
            The popularity of our offerings is evident in the continuous growth of our customer base, as more and more individuals and businesses choose Raj Vip Numbers for their exclusive mobile number needs. Our dedication to quality, transparency, and customer-centricity sets us apart in an industry where trust is paramount.
          </p>

          <p className='text-lg font-bold mx-auto my-4'>
            As we look toward the future, Raj Vip Numbers remains committed to expanding our inventory, providing even more options for our valued customers. Join the ever-growing community of satisfied clients who have found the perfect VIP mobile number with us, and experience the excellence that defines Raj Vip Numbers in the realm of exclusive mobile numbers.
          </p>

        </div>

      </div>

      <div id='w-[]' className='bg-[#454c5c] text-white mx-auto text-lg font-bold'>


          {/* //heading */}
        <div className='text-center' id='heading mt-8'>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl ">About The Founder</h1>
        </div>




        <section className='flex md:flex-row flex-col px-4'>


         {/* here is the text Content */}
        <div className='md:w-[50vw] mx-auto text-center my-auto'>
          <p className='my-4'>
          Introducing Ankish Kumar, the entrepreneur behind this venture. At the age of 18, Ankish embarked on his entrepreneurial journey at just 14 or 15, delving into the world of VIP phone numbers. It was during these formative years that he realized the paramount importance of trust – a lesson not everyone learns so early in life.

</p>
          <p className='my-4'>
          Over the past 4-5 years, Ankish has cultivated meaningful relationships with clients spanning across India. His commitment to transparency and integrity has earned the trust of a diverse clientele, establishing a reputation that sets his business apart. Ankish Kumar is not just an entrepreneur; he is a testament to the power of trust in a world where it is a rare and valuable commodity.
          </p>
       
        </div>

        <img className='h-[60vh] my-auto' src='https://firebasestorage.googleapis.com/v0/b/rajvip-numbers.appspot.com/o/Founder%2FPicsart_24-01-04_21-25-02-271%20(1).webp?alt=media&token=69800693-0480-4c5e-af6e-9b81f94cfad8'/>

        </section>
            
      </div>
    </div>
  )
}

export default About

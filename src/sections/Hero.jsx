import { TypeAnimation } from 'react-type-animation';
import Pattern from '../assets/HERO-pattern.svg'
function Hero() {
    return (
        <section className="w-full   min-h-screen align-center justify-center font-sans text-center">


            <img className='' src={Pattern}/>

        

            <div className=' w-[90vw] border-2 border-black rounded-xl shadow-xl px-2 flex flex-col  justify-center  text-center m-auto'>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Get Best <span className="text-blue-600 dark:text-blue-500">VIP</span>  numbers by <span className="text-blue-600 dark:text-blue-500"> India's Most Trusted</span> Dealer</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here in Raj Vip Number We sell the Most Affordable Vip numbers To make you stand Out of Crowd and have an Outstanding Impression of Your Personal or Business Profile.</p>
                <p className='text-xl md:text-4xl font-bold my-4  w-full'>

                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'We Sell +91 -xxxxx99999',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'We Sell +91 -xxxxx786',
                            2000,
                            'We Sell +91 -xxxxx1234',
                            2000,
                            'We Sell +91 -xxxxx45678',
                            2000
                        ]}
                        wrapper="span"
                        speed={20}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </p>
            </div>
        </section>



    )
}

export default Hero;





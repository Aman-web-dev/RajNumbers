import React from 'react'

function Footer() {
  return (
    <div>
      

<footer class="bg-[#ebece7]   rounded-lg shadow    ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://firebasestorage.googleapis.com/v0/b/rajvip-numbers.appspot.com/o/logo%2FRAJ%20VIP%20NUMBER%20LOGO%201.webp?alt=media&token=37e43ac8-cf57-4060-b2cd-f0b89fc3027f" class="h-20" alt="Flowbite Logo" />
                {/* <span class="self-center text-2xl font-semibold whitespace-nowrap ">Raj VIP</span> */}
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
                <li>
                    <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">Home</a>
                </li>
              
                <li>
                    <a href="/contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-black sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Raj VIP™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer

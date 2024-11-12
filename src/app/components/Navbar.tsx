'use client'
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
      <div className='w-[1920px] h-[92px] m-[1px] flex flex-row items-center justify-between py-4 px-[220px] bg-[#043873]'>
        <div className='w-[191px] h-[34px] flex items-center justify-between'>
        <Image src='/Logo.png' alt='pic'/>
            </div>
           
            <div className='w-[549] h-[23px] '>
                <ul className='gap-8 flex text-white'>
                    <li>Products</li>
                    <li>Solution</li>
                    <li>Resource</li>
                    <li>Pricing</li>
                </ul>
            </div>
           <div className='w-[126px] h-[60px] gap-6 bg-[#FFE492]
'>
            <button className='py-4 px-10 gap-[10px]'>Login</button>
           </div>
      </div>
    
  )
}

export default Navbar

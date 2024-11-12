import React from 'react'
import Image from 'next/image';

const Sponsors = () => {
  return (
    <div className='w-[1922px] h-[538] py-[140px] px-[220px] gap-[100px]'>
      <div className=' ml-[32%]'><Image src='/Our sponsors.png' alt='pic'/></div>
      <div className='mt-20'>
        <ul className='flex justify-between'>
          <li><Image src='/Apple1.png' alt='pic1'/></li>
          <li><Image src='Microsoft.png' alt='pic2'/></li>
          <li> <Image src='Salak.png' alt='pic3'/></li>
          <li> <Image src='Gogle.png' alt='pic4'/></li>
        </ul>
      </div>
    </div>
  )
}

export default Sponsors

import React from 'react';
import Image from 'next/image';

const Extesion = () => {
  return (
    <div className='w-[1921px] h-[759px] left-[1px] items-center flex py-[140px] px-[220px] gap-[98px] bg-[#043873]'>
      <div className='w-[697px] h-[294px] gap-[60px] text-[#FFFFFF]'>
         <h1 className= " font-[700] text-[72px] gap-[24px] leading-[87.14px] tracking-[-2%]">Use as Extension</h1>
        <p className='mt-5'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots 
            as notes.
        </p>
        <div className='mt-10'><Image src='/lest-go.png' alt='pic'/></div>
        </div>
        <div className='w-[686px] h-[470px] bg-[#c4defd]'>

        </div>
    </div>
  )
}

export default Extesion

import React from "react";
import Image from 'next/image';

function Project() {
  return (
    <div className="w-[1920px] h-[1588px] top-[921px] left-[1px] py-[140px] px-[220px] gap-[100px] bg-white">
      <div className="w-[1480px] h-[547px] gap-[60px] bg-white flex  items-center">
        <div className="w-[672px] h-[411px] gap-[60px] ">
            <h1 className= " font-[700] text-[72px] gap-[24px] leading-[87.14px] tracking-[-2%]">Project Management</h1>
            <p className="font-[400] text-[18px] leading-[30px] tracking-[-2%]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app.
                 Take photos with the mobile app and save them to a note.

            </p>
            <button className="mt-8"><Image src="/started.png" alt="pic"/></button>
        </div>
        <div className="w-[748px] h-[547px] bg-[#c4defd]"></div>
      </div>
      <div className="w-[1480px] h-[661px] mt-[120px] gap-[100px] flex items-center">
        
          <Image src="/iamgeg.png" alt="pic"/>
    
        <div className= "w-[670px] h-[294px] gap-[60px] ">
          <h1 className= " font-[700] text-[72px] gap-[24px] leading-[87.14px] tracking-[-2%]">
            Work together
          </h1>
          <p className="w-[670] h-[60px] font-[400] text-[18px] mt-[4%] leading-[30px] tracking-[-2%]">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="mt-[8%]"><Image src="Btn-get.png" alt="pic"/> </button>
        </div>
      </div>
    </div>

  );
}

export default Project;

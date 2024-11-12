import React from "react";
import Image from "next/image";

const Customise = () => {
  return (
    <div className=" w-[1921px] h-[812.09px] flex justify-center items-center  left-[1px] py-[140px] px-[220px] bg-white">
      <div className='w-[714px] h-[532.09px] gap-1 bg-[#c4defd]'></div>
      <div className=" gap-[60px] w-[669px] h-[411px] ml-12">
        <h1 className=" font-[700] text-[72px] gap-[24px] leading-[87.14px] tracking-[-2%]">
          Customise it to your needs
        </h1>
        <p className="w-[669px] h-[90px] mt-4 font-[400] text-[18px] leading-[30px] tracking-[-2%]">
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <div className="mt-10"> <Image src = "/lest-go.png" alt="pic8"/> </div>
      </div>
    </div>
  );
};

export default Customise;

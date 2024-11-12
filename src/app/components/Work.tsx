import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div className="w-[1921px] h-[574px] items-center left-[1px] py-[140px] px-[220px] bg-[#043873]">
      <div className="w-[1481px] h-[294px] gap-[60px]">
        <div className="w-[1064px] h-[294px] m-auto text-center gap-[60px] ">
      <h1 className=" font-[700] text-center items-center text-[72px] leading-[87.14px] tracking-[-2%] text-[#FFFFFF]">
        Your work, everywhere you are
      </h1>
      <p className=" text-[18px] font-[400px] mt-7 text-[#FFFFFF]
">
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </p>
      <div className="mt-[60px] ml-[40%]"><Image src="/Btn-get.png" alt="pic"/></div>
      </div>
     
      </div>
    </div>
  );
};

export default Work;

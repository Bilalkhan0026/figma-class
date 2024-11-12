import React from "react";

const Hero = () => {
  return (

      <div className="w-[1920px] h-[829px] px-[220px] py-[140] flex flex-row items-center bg-[#043873]" >
        <div className="w-[656px] h-[361px] gap-[60px]" >
          <div className="w-[656px] h-[238] gap-[24px] text-[#FFFFFF]" >
            <h2 className="w-[656px] h-[154] font-bold text-[64px] leading-[77-45px] tracking-[-2%]"> Get More Done with whitepace </h2>
            <p className="w-[656px] h-[60px] font-normal size-[18px] leading-[30px] traking-[-2%]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <div>
            <button className="w-[219px] h-[63px] mt-[4%] gap-[10px] bg-[#4F9CF9] rounded-[8px] p-5 ">Try Whitepace free</button>
          </div>
          </div>
        </div>
        <div className="w-[824px] h-[549px] gap-1 bg-[#c4defd]"> </div>
      </div>
    
  );
};

export default Hero;

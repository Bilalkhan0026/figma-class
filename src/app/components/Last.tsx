import React from "react";
import Image from 'next/image';

const Last = () => {
  return (
    <div className="w-[1920px] h-[461px] left-[1px] px-[220px] py-[140px] gap-[200px] bg-[#043873]">
      <div className="w-[1480px] h-[169px] flex gap-[100px] ">
        <div className="w-[295px] h-[169px] gap-[15px]">
          <Image src="/Logo.png" alt="pic"/>
          <p
            className="w-[240px] h-[120px] text-[400] size-[18px] leading-[30px] tracking-[-2%] text-[#F7F7EE]
]"
          >
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div
          className="w-[295px] h-[127px] gap-[15px] 
]"
        >
          <p className="w-[68px] h-[22px] font-[700] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Product</p>
          <p className="w-[70px] h-[20px] font-[400] size-[16px] leading-[20px] tracking-[-2%] text-[#FFE492]">
            Overview
          </p>
          <p
            className="w-[50px] h-[20px] font-[400] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]
]"
          >
            Pricing
          </p>
          <p className="w-[177px] h-[20px] font-[400] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">
            Customer stories
          </p>
        </div>
        <div className="w-[295] h-[130] gap-[16px]">
          <p className="w-[91px] h-[22px] font-[700] size-[16px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]">
            Resources
          </p>
          <p className="w-[33px] h-[20px] font-[400] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">
            Blog
          </p>
          <p className="w-[128px] h-[20px] font-[400] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">
            Guides & tutorials
          </p>
          <p className="w-[130px] h-[20px] font-[400] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">
            Help center
          </p>
        </div>
        <div className="w-[295px] h-[130px] gap-[15px]">
          <p className="w-[83px] h-[22px] font-[700] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Company</p>
          <p className="w-[66px] h-[20px] font-[400] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">About us</p>
          <p className="w-[62px] h-[20px] font-[400] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Careers</p>
          <p className="w-[99px] h-[20px] font-[400] size-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Media kit</p>
        </div>
      </div>
    </div>
  );
};

export default Last;

import React from 'react'

const FindGateway = () => {
  return (
    <div>
        <div className="bg-[url('/assets/findgateway.png')]  h-[260px] sm:h-[320px] md:h-[384px] lg:h-[460px] xl:h-[552px] xxl:h-[664px] text-white flex items-center">
        <div className="container py-[32px] px-[40px] sm:py-[36px] sm:px-[48px] md:py-[44px] md:px-[56px] lg:py-[52px] lg:px-[68px] xl:py-[64px] xl:px-[82px] xxl:py-[78px] xxl:px-[100px] flex flex-col gap-3">

            <p className="font-serif text-[18px] font-bold sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] xxl:text-[44px]">Escape from endless Zoom calls</p>
            <p className="font-poppins text-[12px] font-normal md:text-[14px] xl:[16px]">Discover the wonders of spending time offline and away from the office with our 3 day weekend getaway cabin retreats.</p>
            <button className="w-[200px] sm:w-[210px] md:w-[224px] lg:w-[232px] xl:w-[240px] rounded-[4px] bg-[#D4EEEC] px-[24px] py-[8px] font-poppins text-[12px] text-black md:text-[14px] xl:text-[16px] h-[40px]">Find the perfect gateway</button>
        </div>
        </div>
    </div>
  )
}

export default FindGateway
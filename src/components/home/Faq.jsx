import React from "react";

const Faq = () => {
  return (
    <div className="container flex flex-col gap-6 px-[40px] py-[32px] sm:px-[48px] sm:py-[36px] md:px-[56px] md:py-[44px] lg:px-[68px] lg:py-[52px] xl:px-[82px] xl:py-[64px] xxl:px-[100px] xxl:py-[78px]">
      <p className="font-serif text-[14px] font-bold text-[#1f3d3e] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] xxl:text-[28px]">
        Frequently asked questions
      </p>
      <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 xxl:gap-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-poppins text-[12px] font-semibold md:text-[14px] lg:text-[16px]">
              1.About Unwind Cabins
            </p>
            <ul className="list-disc font-poppins text-[12px] font-normal md:text-[14px] lg:text-[16px]">
              <li>How long have you been in business?</li>
              <li>Why did you start the journey?</li>
            </ul>
          </div>
          <button className="faq-btn">
            About our cabins
          </button>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-poppins text-[12px] font-semibold md:text-[14px] lg:text-[16px]">
              2.Tell me more about the cabin
            </p>
            <ul className="list-disc font-poppins text-[12px] font-normal md:text-[14px] lg:text-[16px]">
              <li>What do I need to bring?</li>
              <li>How do I get to the cabin?</li>
            </ul>
          </div>
          <button className="faq-btn">
            Tell me more about the cabin
          </button>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-poppins text-[12px] font-semibold md:text-[14px] lg:text-[16px]">
              3.Pets, family & friends
            </p>
            <ul className="list-disc font-poppins text-[12px] font-normal md:text-[14px] lg:text-[16px]">
              <li>Please tell me if I can bring my dog</li>
              <li>How many people can sleep in your cabins?</li>
            </ul>
          </div>
          <button className="faq-btn">
            Pets, family & friends
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 font-poppins">
        <p className="text-[12px] font-semibold md:text-[14px] lg:text-[16px]">
          Still have a question?
        </p>
        <p className="text-[12px] font-normal md:text-[14px] lg:text-[16px]">
          If you still have questions contact a member of the team on{" "}
          <u>live chat</u> and we'd be more than happy to help.
        </p>
      </div>
    </div>
  );
};

export default Faq;

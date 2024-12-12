import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";



const Footer = () => {
  return (
    <>
      <footer className="bg-[#0C1011]">
        <div className="container text-white py-[32px] px-[40px] sm:py-[36px] sm:px-[48px] md:py-[44px] md:px-[56px] lg:py-[52px] lg:px-[68px] xl:py-[64px] xl:px-[82px] xxl:py-[78px] xxl:px-[100px] flex flex-col gap-8">
        <div className="flex flex-col gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          <div className="flex flex-col gap-3 items-center ">
            <p className="text-[#C5FBD8] font-semibold text-[16px]">About us</p>
            <ul className="flex flex-col items-center">
              <li>Our Story</li>
              <li>Why us</li>
              <li>How it works</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 items-center ">
            <p className="text-[#C5FBD8]">Our cabins</p>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col items-center">
                <li>North of London</li>
                <li>Golden Hideaway</li>
                <li>Oak Treehouse</li>
                <li>Acacia Retreat</li>
                <li>Blue Lagoon</li>
              </ul>
              <ul className="flex flex-col items-center">
                <li>South of London</li>
                <li>Lavender Retreat</li>
                <li>Butterfly Treehouse</li>
                <li>Mahonagany Hideaway</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center ">
            <p className="text-[#C5FBD8]">Get Inspired</p>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col items-center">
                <li>Explore nature</li>
                <li>Hiking trails</li>
                <li>Swimming</li>
                <li>Fishing</li>
                <li>Boating</li>
                <li>Cycling</li>
              </ul>

              <ul className="flex flex-col items-center">
                <li>Rest, relax and re-set</li>
                <li>Spa treatments</li>
                <li>Hot tubs</li>
                <li>Nature Trails</li>
              </ul>
            </div>
            </div>

            <div className="flex flex-col gap-3 items-center ">
              <ul className="flex flex-col items-center">
                <li>Great food and drink</li>
                <li>Pubs</li>
                <li> Resturants</li>
                <li>Food markets</li>
                <li>Picnics</li>
              </ul>

              <ul className="flex flex-col items-center">
                <li>For you and yours</li>
                <li>Solo or a couple</li>
                <li>Pet friendly</li>
                <li>Accessible cabins</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 items-center ">
              <p className="text-[#C5FBD8]">Support</p>
              <ul className="flex flex-col items-center">
                <li>Help</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Complaints Policy</li>
              </ul>
            </div>
          </div>
        

          <div className="flex flex-col gap-3">
            <p className="text-[#C5FBD8] font-semibold">Sign up to our Newsletter</p>
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:flex-row">
              <p>
                For a weekly curated collection of 3 things you can watch , read
                or listen to switch off from the busy everyday.
              </p>
              <form className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <input type="text" placeholder="james@thegaintpeach.com" className="sm:h-[42px] md:h-[50px] md:w-[284px] bg-white text-black focus:outline-none  h-[36px] px-4 w-full" />
              <input type="submit" value="Join the mailing list" className="w-[200px] sm:w-[210px] text-[#1F3D3E] md:w-[224px] lg:w-[232px] xl:w-[240px] rounded-[4px] bg-[#F4BD4F] px-[24px] py-[8px] font-poppins text-[12px] md:text-[14px] xl:text-[16px] h-[40px]"/>
              </form>
            </div>
          </div>
                

          <hr />

          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <div className="text-[12px] font-semibold sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] xxl:text-[24px]">
              <span className="text-white">UNWIND</span>
              <span className="text-[#C5FBD8]">CABINS</span>
            </div>

            <p>&copy; 2023 UnwindCabins</p>

            <ul className="flex gap-2">
                <li><FiLinkedin /></li>
                <li><FaXTwitter /></li>
                <li><LuFacebook /></li>
                <li><FaInstagram /></li>
                <li><TbBrandYoutube /></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

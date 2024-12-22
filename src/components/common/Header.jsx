import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }
  return (
    <>
      <header className="bg-red-40">
        <nav className="container relative z-50 flex w-full items-center justify-between py-[14px] font-poppins sm:py-[16px] md:py-[18px] lg:py-[20px] xl:py-[24px] xxl:py-[26px]">
          <Link to="/">
            <div className="text-[12px] font-semibold sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] xxl:text-[24px]">
              <span className="text-[#166527]">UNWIND</span>
              <span className="text-[#1A3724]">CABINS</span>
            </div>
          </Link>
          <ul
            className={`fixed bottom-0 right-0 top-0 flex w-[50%] flex-col gap-6 bg-[#bbbbbb] p-10 text-[12px] font-normal md:text-[14px] lg:gap-[32px] xl:text-[16px] ${isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"} transition-all lg:static lg:flex-row lg:items-center lg:justify-end lg:bg-transparent lg:px-0 lg:py-0`}
          >
            <li className="flex justify-end lg:hidden">
              <button onClick={toggleMenu}>
                <IoMdClose className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px]" />
              </button>
            </li>
            <li className="hover:text-blue-500"><HashLink smooth to="/#ourcabins">Our cabins</HashLink></li>
            <li className="hover:text-blue-500"><HashLink smooth to="/#getinspired">Get inspired</HashLink></li>
            <li className="hover:text-blue-500 cursor-pointer">Gift a stay</li>
            <li className="hover:text-blue-500 cursor-pointer">About us</li>

            {isMenuOpen ? (
              <li className="">View your profile</li>
            ) : (
              <li className=" hover:cursor-pointer group relative flex items-center justify-center rounded-full border border-[#3F3F3F] bg-[#F2FAF9] lg:h-[38px] lg:w-[38px] xl:h-[42px] xl:w-[42px] xxl:h-[48px] xxl:w-[48px]">
                <FaUserCircle className="text-[24px]" />
                <ul className="absolute left-1/2 top-full mt-[1px] xl:mt-[1px] hidden w-[160px] -translate-x-1/2 bg-white text-black group-hover:grid">
                  <li className="p-2">
                    <ul>
                      <li>View your Profile</li>
                      <li><Link to="/login">Login</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
            )}
            <li className="lg:hidden">
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <div className="lg:hidden">
            <GiHamburgerMenu
              onClick={toggleMenu}
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px]"
            />
          </div>
        </nav>
        {isMenuOpen && (
          <div
            className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(207,207,207,0.5)]"
            onClick={toggleMenu}
          ></div>
        )}
      </header>
    </>
  );
};

export default Header;

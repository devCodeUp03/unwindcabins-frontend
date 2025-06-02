import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { setReduxUser } from "../../redux/slice/userSlice";
import { useState } from "react";
import { bookReset } from "../../redux/slice/bookSlice";
import rootUrl from "../../url";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeHash, setActiveHash] = useState("");
  const user = useSelector((store) => store.user.value);
  const navigate = useNavigate();
  const book = useSelector((store) => store.book.value);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("bookedCabins");
    dispatch(setReduxUser(null));
    localStorage.removeItem("likedCabins");
    dispatch(bookReset());
    navigate("/login");
    // window.location.reload();
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <header className="bg-red-40 mb-[100px]">
        <div className="fixed left-0 right-0 top-0 z-40 bg-white shadow-[0_12px_20px_0px_rgba(39,45,77,0.2)]">
          <nav className="container flex w-full items-center justify-between py-[14px] font-poppins sm:py-[16px] md:py-[18px] lg:py-[20px] xl:py-[24px] xxl:py-[26px]">
            <Link to="/">
              <div className="text-[12px] font-semibold sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] xxl:text-[24px]">
                <span className="text-[#166527]">UNWIND</span>
                <span className="text-[#1A3724]">CABINS</span>
              </div>
            </Link>
            {/* bg-[#bbbbbb] */}
            <ul
              className={`fixed bottom-0 right-0 top-0 flex w-[50%] flex-col gap-6 bg-white p-10 text-[12px] font-normal md:text-[14px] lg:gap-[32px] xl:text-[16px] ${isMenuOpen ? "z-50 translate-x-0" : "translate-x-full lg:translate-x-0"} transition-all lg:static lg:flex-row lg:items-center lg:justify-end lg:bg-transparent lg:px-0 lg:py-0`}
            >
              <li className="flex justify-end lg:hidden">
                <button onClick={toggleMenu}>
                  <IoMdClose className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px]" />
                </button>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#ourcabins"
                  onClick={() => setActiveHash("ourcabins")}
                  className={
                    activeHash === "ourcabins"
                      ? "font-semibold text-blue-500"
                      : "text-[13px] hover:text-blue-500 xl:text-[16px]"
                  }
                >
                  Our cabins
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#getinspired"
                  onClick={() => setActiveHash("getinspired")}
                  className={
                    activeHash === "getinspired"
                      ? "font-semibold text-blue-500"
                      : "text-[13px] hover:text-blue-500 xl:text-[16px]"
                  }
                >
                  Get inspired
                </HashLink>
              </li>
              <NavLink
                to="/giftastay"
                className={({ isActive }) => {
                  return isActive
                    ? "font-semibold text-blue-500"
                    : "text-[13px] hover:text-blue-500 xl:text-[16px]";
                }}
                onClick={() => setActiveHash("")}
              >
                Gift a stay
              </NavLink>
              <NavLink
                to="/aboutus"
                className={({ isActive }) => {
                  return isActive
                    ? "font-semibold text-blue-500"
                    : "text-[13px] hover:text-blue-500 xl:text-[16px]";
                }}
                onClick={() => setActiveHash("")}
              >
                About us
              </NavLink>
              <div className="flex items-center lg:h-12 lg:w-12 lg:justify-center xl:h-14 xl:w-14">
                {isMenuOpen ? (
                  <li className="">
                    {user ? user?.user?.username : "View your profile"}
                  </li>
                ) : (
                  <li className="group relative flex items-center justify-center rounded-full border border-[#3F3F3F] bg-[#F2FAF9] hover:cursor-pointer lg:h-[38px] lg:w-[38px] xl:h-[42px] xl:w-[42px] xxl:h-[48px] xxl:w-[48px]">
                    {user?.user.image ? (
                      <div>
                        <img
                          src={`${rootUrl}${user.user.image}`}
                          alt="Profile"
                          className="h-[24px] w-[24px] rounded-full border border-gray-400 bg-white object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <FaUserCircle className="text-[24px]" />
                    )}

                    <ul className="absolute left-1/2 top-full mt-[1px] hidden w-[160px] h-[200px] -translate-x-1/2 rounded-sm bg-white text-black shadow-[0_12px_20px_0px_rgba(39,45,77,0.2)] group-hover:grid xl:mt-[1px] ">
                      <li>
                        <ul className="p-2">
                          {user?.user?.usertype === "admin" ? (
                            <Link to="/admin" className="block mb-4">
                              Admin Panel
                            </Link>
                          ) : null}
                          <li className="text-black mb-4">
                            {user ? user.user.username : "View your profile"}
                          </li>
                          {user ? (
                            <Link to="/cabins/bookedcabins" className="relative flex items-center gap-2 mb-4">
                              Book{" "}
                              <span className="rounded-full bg-[#a0e694] px-2 py-[1px] font-bold hidden lg:flex">
                                {book.length}{" "}
                              </span>
                            </Link>
                          ) : null}
                          {user ? (
                            <li onClick={logout}>Logout</li>
                          ) : (
                            <li>
                              <Link to="/login">Login</Link>
                            </li>
                          )}
                        </ul>
                      </li>
                    </ul>
                  </li>
                )}
                <span className="absolute right-0 top-0 hidden h-5 w-5 items-center justify-center rounded-full bg-[#a0e694] p-2 font-bold text-[#1c0808] lg:flex">
                  {book.length}{" "}
                </span>
              </div>
              <li className="lg:hidden">
                {user?.user?.usertype === "admin" ? (
                  <Link
                    to="/admin"
                    // className={`${user?.user?.usertype != "admin" ? "hidden" : "visible"} `}
                  >
                    Admin Panel
                  </Link>
                ) : null}
                {user ? (
                  <>
                    {user?.user?.usertype == "admin" ? (
                      <>
                        <br />
                        <br />
                      </>
                    ) : null}
                    <Link
                      to="/cabins/bookedcabins"
                      className="relative flex items-center gap-2 lg:hidden"
                    >
                      <span>Book </span>
                      <span className="rounded-full bg-[#a0e694] px-2 py-[1px] font-bold lg:hidden">
                        {book.length}
                      </span>
                    </Link>
                    <br />
                    <button onClick={logout}>Logout</button>
                  </>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>

            <div className="relative flex h-12 w-12 items-center justify-center gap-[0.5] bg-red-100 lg:hidden">
              <GiHamburgerMenu
                onClick={toggleMenu}
                className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px]"
              />{" "}
              <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#a0e694] p-2 font-bold text-[#1c0808] md:right-0 md:top-1 md:h-5 md:w-5 lg:hidden">
                {book.length}
              </span>
            </div>
          </nav>
        </div>
        {isMenuOpen && (
          <div
            className="fixed bottom-0 left-0 right-0 top-0 z-30 bg-[rgba(207,207,207,0.5)]"
            onClick={toggleMenu}
          ></div>
        )}
      </header>
    </>
  );
};

export default Header;

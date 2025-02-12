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

const Header = () => {
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
      <header className="bg-red-40">
        <nav className="container relative z-50 flex w-full items-center justify-between py-[14px] font-poppins sm:py-[16px] md:py-[18px] lg:py-[20px] xl:py-[24px] xxl:py-[26px]">
          <Link to="/">
            <div className="text-[12px] font-semibold sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] xxl:text-[24px]">
              <span className="text-[#166527]">UNWIND</span>
              <span className="text-[#1A3724]">CABINS</span>
            </div>
          </Link>
          {/* bg-[#bbbbbb] */}
          <ul
            className={`fixed bottom-0 right-0 top-0 flex w-[50%] flex-col gap-6 bg-white p-10 text-[12px] font-normal md:text-[14px] lg:gap-[32px] xl:text-[16px] ${isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"} transition-all lg:static lg:flex-row lg:items-center lg:justify-end lg:bg-transparent lg:px-0 lg:py-0`}
          >
            <li className="flex justify-end lg:hidden">
              <button onClick={toggleMenu}>
                <IoMdClose className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px]" />
              </button>
            </li>
            <li className="hover:text-blue-500">
              <HashLink smooth to="/#ourcabins">
                Our cabins
              </HashLink>
            </li>
            <li className="hover:text-blue-500">
              <HashLink smooth to="/#getinspired">
                Get inspired
              </HashLink>
            </li>
            <Link to="/giftastay" className="cursor-pointer hover:text-blue-500">Gift a stay</Link>
            <Link to="/aboutus" className="cursor-pointer hover:text-blue-500">About us</Link>

            {isMenuOpen ? (
              <li className="">
                {user ? user?.user?.username : "View your profile"}
              </li>
            ) : (
              <li className="group relative flex items-center justify-center rounded-full border border-[#3F3F3F] bg-[#F2FAF9] hover:cursor-pointer lg:h-[38px] lg:w-[38px] xl:h-[42px] xl:w-[42px] xxl:h-[48px] xxl:w-[48px]">
                {user?.user.image ? (
                  <img
                    src={`${rootUrl}${user.user.image}`}
                    alt="Profile"
                    className="h-[24px] w-[24px] rounded-full border border-gray-400 bg-white object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-[24px]" />
                )}
                <ul className="absolute left-1/2 top-full mt-[1px] hidden w-[160px] -translate-x-1/2 rounded-sm bg-white text-black shadow-[0_12px_20px_0px_rgba(39,45,77,0.2)] group-hover:grid xl:mt-[1px]">
                  <li>
                    <ul className="p-2">
                      {user?.user?.usertype === "admin" ? (
                        <Link to="/admin" className="block">
                          Admin Panel
                        </Link>
                      ) : null}
                      <li className="text-black">
                        {user ? user.user.username : "View your profile"}
                      </li>
                      {user ? (
                        <Link to="/cabins/bookedcabins">
                          Book ( {book.length} )
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
                  <Link to="/cabins/bookedcabins">Book ( {book.length} )</Link>
                  <br />
                  <br />
                  <button onClick={logout}>Logout</button>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
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

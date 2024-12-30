import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiUsers } from "react-icons/hi2";
import { MdOutlineCabin } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Admin = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.value);
  const [notFetching, setNotFetching] = useState(true);
  const [cabins, setCabins] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [fetchingUsers, setFetchingUsers] = useState(false);
  const [fetchingCabins, setFetchingCabins] = useState(false);
  const [fetchingBookings, setFetchingBookings] = useState(false);

  useEffect(() => {
    let userType = user?.user?.usertype;
    if(userType != "admin") {
      navigate("/");
    }

  }, [navigate])
  function handleUsers() {
    const url = "http://localhost:8000/api/users/getusers";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setNotFetching(false);
        setFetchingUsers(true);
        setFetchingCabins(false);
        setFetchingBookings(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCabins() {
    const url = "http://localhost:8000/api/cabins/getcabins";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setCabins(res.data);
        setNotFetching(false);
        setFetchingCabins(true);
        setFetchingUsers(false);
        setFetchingBookings(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleBookings() {
    const url = "http://localhost:8000/api/orders/bookedcabins";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setBookings(res.data);
        setNotFetching(false);
        setFetchingBookings(true);
        setFetchingUsers(false);
        setFetchingCabins(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAdmin() {
    setNotFetching(true);
    setFetchingBookings(false);
    setFetchingUsers(false);
    setFetchingCabins(false);
  }

  function handleUserDetail(user) {
    console.log(user);
    navigate(`/admin/userdetails/${user._id}`);

  }

  function handleUserRemove(user) {
    let id = user._id;
    console.log(id);
    const url = `http://localhost:8000/api/users/removeuserbyid/${id}`;
    axios.delete(url).then((res) => { toast.error("user removed"); handleUsers();}).catch((err) => {console.log(err); toast.error("fail to remove user")});
  }

  return (
    <div className="container gap-10 lg:flex lg:min-h-[400px]">
      <div className="flex flex-col gap-4 py-4 shadow-[0_8px_20px_0px_rgba(39,45,77,0.2)] lg:w-[240px] ">
        <div className="text-center text-[20px] font-semibold cursor-pointer" onClick={handleAdmin}>ADMIN PANEL</div>
        <ul className="flex w-full justify-between gap-10 px-8 py-10 font-semibold lg:flex-col">
          <li
            onClick={handleUsers}
            className="flex cursor-pointer items-center gap-2"
          >
            <HiUsers /> <p>Users</p>
          </li>
          <li
            onClick={handleCabins}
            className="flex cursor-pointer items-center gap-2"
          >
            <MdOutlineCabin /> <p>Cabins</p>
          </li>
          <li
            onClick={handleBookings}
            className="flex cursor-pointer items-center gap-1"
          >
            <TbBrandBooking /> <p>Bookings</p>
          </li>
        </ul>
      </div>


      <div className="w-full py-10">
        {notFetching && (
          <div>
            <div className="text-center text-[20px] font-semibold">{`Hi ${user?.user?.username}, welcome to the Admin Panel`}</div>
            <p className="text-center font-thin">
              This is the place where you can manage anything and everything
              regarding the website
            </p>
            <p className="text-center">All the best !!!</p>
          </div>
        )}

        {fetchingUsers && (
          <div className="flex flex-col gap-4">
            <div className="mb-10 py-10 text-center text-[20px] font-semibold shadow-[0_8px_20px_0px_rgba(39,45,77,0.2)]">
              Users Management
            </div>
            {users.map((el) => {
              return (
                <div  className="flex justify-between rounded-md px-1 py-2 shadow-[0_8px_20px_0px_rgba(39,45,77,0.2)] md:px-2 md:py-3">
                  <div>
                    <ul>
                      <li className="text-[18px] font-semibold">
                        {el.username}
                      </li>
                      <li className="font-thin">{el.email}</li>
                      <li>{el.usertype ? el.usertype : "user"}</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 items-center md:gap-4">
                    <button onClick={() => {handleUserDetail(el)}} className="rounded bg-gray-500 px-2 py-1 text-white h-[40px] hover:bg-gray-600">
                      Details
                    </button>
                    <button onClick={() => {handleUserRemove(el)}} className="rounded bg-red-500 px-2 py-1 text-white h-[40px] hover:bg-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {fetchingCabins && (
          <div className="flex flex-col gap-4">
            <div className="mb-10 py-10 text-center text-[20px] font-semibold shadow-[0_8px_20px_0px_rgba(39,45,77,0.2)]">
              Cabins Management
            </div>
            {cabins.map((el) => {
              return (
                <div className="flex flex-col items-center gap-4 rounded-md py-2 shadow-[0_8px_20px_0px_rgba(39,45,77,0.2)] md:flex-row md:justify-between md:px-2 md:py-3">
                  <div>{el.cabinName}</div>
                  <div className="flex gap-10 md:gap-4">
                    <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
                      Details
                    </button>

                    <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {fetchingBookings && (
          <div className="flex flex-col gap-4">
            <div className="mb-10 py-10 text-center text-[20px] font-semibold shadow-[0_8px_20px_0px_rgba(39,45,77,0.2)]">
              Booking Management
            </div>
            {bookings.map((el) => {
              return (
                <div className="flex justify-between rounded-md px-1 py-2 shadow-[0_8px_20px_0px_rgba(39,45,77,0.2)] md:px-2 md:py-3">
                  <div>{el.cabinName}</div>
                  <div className="flex gap-2 items-center md:gap-4">
                    <button className="rounded bg-gray-500 px-2 py-1 text-white h-[40px] hover:bg-gray-600">
                      Details
                    </button>
                    <button className="rounded bg-red-500 px-2 py-1 text-white h-[40px] hover:bg-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const UserDetail = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({});

  let url = `${rootUrl}/api/users/getuserdetail/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUser(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="flex justify-end">
        <div
          className="cursor-pointer underline"
          onClick={() => {
            navigate("/admin");
          }}
        >
          Go back
        </div>
      </div>
      <div className="my-10 flex items-center justify-center">
        <div className="flex gap-2 rounded-md p-1 shadow-[0_12px_20px_0px_rgba(39,45,77,0.2)] sm:gap-3 sm:p-2 md:gap-5 md:p-4 lg:gap-7 lg:p-5 xl:gap-9 xl:p-6 xxl:gap-10 xxl:p-7">
          <div className="flex flex-col items-center gap-4">
            <img
              src={`${rootUrl}${user.image}`}
              alt=""
              className="h-[170px] w-[140px] rounded-md border-2 border-black"
            />
            <p className="text-[20px] font-thin">User Photo</p>
          </div>
          <div className="">
            <div>
              <p className="font-thin">Username</p>
              <p className="text-[18px] font-semibold">{user.username}</p>
            </div>
            <div>
              <p className="font-thin">Email</p>
              <p className="text-[18px] font-semibold">{user.email}</p>
            </div>

            <div>
              <p className="font-thin">Age</p>{" "}
              <p className="text-[18px] font-semibold">{user.age}</p>
            </div>

            <div>
              <p className="font-thin">Gender</p>
              <p className="text-[18px] font-semibold">{user.gender}</p>
            </div>
            <div>
              <p className="font-thin">Role</p>
              <p className="text-[18px] font-semibold">
                {user.usertype ? user.usertype : "user"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormErrors from "../components/common/FormErrors";
import { setReduxUser } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userInfos, setUserInfos] = useState({
    email: "prabesh@gmail.com",
    password: "prabesh123"
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    const url = "http://localhost:8000/api/users/login";
    let formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post(url, formData)
      .then((res) => {

        // setUser(res.data); 
        try {
          dispatch(setReduxUser(res.data))
          localStorage.setItem("token", res.data.token);
          setIsLoading(false);
          navigate("/");

        } catch(err) {
          console.log(err);
        }

      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err.response.data);
        setFormErrors(err.response?.data?.errors);
      });
  }

  return (
    <div>
      <div className="flex h-[400px] items-center justify-center bg-[#C5FBD8] md:h-[440px] lg:h-[480px] xl:h-[520px] xxl:h-[540px]">
        <div className="container mx-4 rounded-md bg-white p-4 sm:w-[400px] sm:p-5 md:w-[450px] md:p-6 lg:w-[500px] lg:p-7 xl:p-8">
          <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleLogin}>
            <p className="mb-4 text-center text-[24px] font-semibold md:text-[28px] lg:text-[32px]">
              Welcome
            </p>
            <div>
              <input
                type="text"
                placeholder="Email Address"
                className="text-box bg-[#EAEAEA]"
                name="email"
                value={userInfos.email}
                onChange={(e)=>{setUserInfos({...userInfos, email: e.target.value})}}
              />
              <FormErrors msg = {formErrors.email?.msg}/>
            </div>
            <div></div>
            <input
              type="password"
              placeholder="Password"
              className="text-box bg-[#EAEAEA]"
              name="password"
              value={userInfos.password}
              onChange={(e) => {setUserInfos({...userInfos, password: e.target.value})}}
            />
            <span className="text-red-500">{formErrors.password?.msg}</span>
            <div className="text-red-500">{formErrors.credentials?.msg}</div>

            <input
              type="submit"
              disabled={isLoading}
              value="Login"
              className="text-box cursor-pointer bg-[#233D2C] text-white hover:bg-[#4f6456] disabled:cursor-not-allowed"
            />
          </form>
          <p className="mt-3 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

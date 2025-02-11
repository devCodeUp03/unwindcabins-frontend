import axios from "axios";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import rootUrl from "../url";

const SignUp = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("user");
  const [fileName, setFileName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [file, setFile] = useState(null);
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const url = `${rootUrl}/api/users/signup`;
  async function handleSignup(e) {
    e.preventDefault();
    setIsLoading(true);


    let formData = {
      usertype: e.target.usertype.value,
      secretkey: e.target.secretkey?.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      age: e.target.age.value,
      gender: gender,
      image: e.target.profile.files[0],
    };
    // console.log("Image:" + formData.file);

    console.log(formData);

    await axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setIsLoading(false);

        navigate("/login");
        toast.success("success");
        console.log(res);
      })
      .catch((err) => {
        setFormErrors(err.response.data.errors);

        console.log(err);
        setIsLoading(false);
        toast.error("bad request");
        console.log(formErrors);
      });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    // setFile(file);
    setFileName(file.name);
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="flex h-[600px] items-center justify-center bg-[#C5FBD8] md:h-[800px] lg:h-[880px] xxl:h-[900px]">
        <div className="container mx-4 rounded-md bg-white p-4 sm:w-[400px] sm:p-5 md:w-[450px] md:p-6 lg:w-[500px] lg:p-7 xl:p-8">
          <form
            className="flex flex-col gap-4 md:gap-6"
            onSubmit={handleSignup}
          >
            <div className="flex flex-col items-center">
              <p className="text-[18px] font-bold">Sign Up</p>
              <p className="text-[16px] font-semibold">Create your account</p>
            </div>
            <div>
              <select
                name="usertype"
                className="text-box bg-[#EAEAEA]"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="" className="">
                  Select usertype
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <span className="text-red-500">{formErrors?.usertype?.msg}</span>
            </div>

            {userType === "admin" && (
              <div>
                <input
                  type="text"
                  placeholder="Secret key"
                  className="text-box bg-[#EAEAEA]"
                  name="secretkey"
                />
                <span className="text-red-500">
                  {formErrors?.secretkey?.msg}
                </span>
              </div>
            )}

            <div>
              <input
                type="text"
                placeholder="Username"
                className="text-box bg-[#EAEAEA]"
                name="username"
              />
              <span className="text-red-500">{formErrors?.username?.msg}</span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Email Address"
                className="text-box bg-[#EAEAEA]"
                name="email"
              />
              <span className="text-red-500">{formErrors?.email?.msg}</span>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="text-box bg-[#EAEAEA]"
                name="password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
              <span className="text-red-500">{formErrors?.password?.msg}</span>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Gender: </p>
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    value="male"
                    onChange={handleGenderChange}
                  />
                  <span>Male</span>
                </div>
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    value="female"
                    onChange={handleGenderChange}
                  />
                  <span>Female</span>
                </div>
              </div>
              <span className="text-red-500">{formErrors?.gender?.msg}</span>
            </div>

            <div>
              <input
                type="number"
                name="age"
                id=""
                placeholder="Enter age"
                min="1"
                className="text-box w-full appearance-none bg-[#EAEAEA] [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
              />
              <span className="text-red-500">{formErrors?.age?.msg}</span>
            </div>
            <div>
              <p className="mb-1">Image File</p>
              <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                <input
                  type="text"
                  className="text-box bg-[#EAEAEA]"
                  readOnly
                  value={fileName}
                />
                <input
                  type="file"
                  id="profile"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="profile"
                  className="text-box flex w-full cursor-pointer items-center justify-center rounded-md border bg-[#EAEAEA] text-black md:w-[160px]"
                >
                  Choose File...
                </label>
              </div>
            </div>

            <input
              type="submit"
              disabled={isLoading}
              value={isLoading ? "loading..." : "Sign Up"}
              className="text-box cursor-pointer bg-[#233D2C] text-white hover:bg-[#4f6456] disabled:cursor-not-allowed"
            />
          </form>
          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import react, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import RootComponent from "./components/common/RootComponent";
import DiscoverCabins from "./components/home/discoverCabin/DiscoverCabins";
import DiscoverSlug from "./components/home/discoverCabin/DiscoverSlug";
import InspirationCabins from "./components/home/inspirationCabin/InspirationCabins";
import InspirationSlug from "./components/home/inspirationCabin/InspirationSlug";
import SignUp from "./pages/SignUp";
import BookedCabins from "./pages/BookedCabins";
import { useDispatch } from "react-redux";
import { setReduxUser } from "./redux/slice/userSlice";
import axios from "axios";
import SearchedCabins from "./components/home/SearchedCabins";
import Admin from "./pages/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetail from "./components/admin/user/UserDetail";
import CabinDetail from "./components/admin/cabin/CabinDetail";
import CabinEdit from "./components/admin/cabin/CabinEdit";
import AddCabin from "./components/admin/cabin/AddCabin";
import BookingDetail from "./components/admin/booking/BookingDetail";
import rootUrl from "./url";


const App = () => {
  const dispatch = useDispatch();

  let token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${rootUrl}/api/users/getuser`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        let user = {
          user: res.data,
        };
        dispatch(setReduxUser(user));
      });
  }, []);

  const [user, setUser] = useState(null);
  const router = createHashRouter([
    {
      path: "",
      element: <RootComponent />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/admin",
          children: [
            {
              path: "",
              element: <Admin />,
            },
            {
              path: "userdetails/:id",
              element: <UserDetail />,
            },

            {
              path: "cabindetails/:id",
              element: <CabinDetail />,
            },
            {
              path: "cabinedit/:id",
              element: <CabinEdit />,
            },
            {
              path: "addcabin",
              element: <AddCabin />,
            },
            {
              path: "bookingdetail/:id",
              element: <BookingDetail />,
            },
          ],
        },

        {
          path: "/cabins",
          children: [
            {
              path: "",
              element: <DiscoverCabins />,
            },
            {
              path: "searchedcabins",
              element: <SearchedCabins />,
            },

            {
              path: ":slug",
              element: <DiscoverSlug />,
            },
            {
              path: "bookedcabins",
              element: <BookedCabins />,
            },
          ],
        },
        {
          path: "/inspirationcabins",
          children: [
            {
              path: "",
              element: <InspirationCabins />,
            },

            {
              path: ":slug",
              element: <InspirationSlug />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;

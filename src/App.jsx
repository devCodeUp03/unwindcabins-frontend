import react, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const App = () => {
  const dispatch = useDispatch();

  let token = localStorage.getItem("token");


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/getuser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        let user = {
          user: res.data
        }
        dispatch(setReduxUser(user))
      });
  }, []);
  // const [user, setUser] = useState(null);
  const router = createBrowserRouter([
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
          path: "/cabins",
          children: [
            {
              path: "",
              element: <DiscoverCabins />,
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
    </div>
  );
};

export default App;

import react from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import RootComponent from "./components/common/RootComponent";
import DiscoverCabins from "./components/home/discoverCabin/DiscoverCabins";
import DiscoverSlug from "./components/home/discoverCabin/DiscoverSlug";
import InspirationCabins from "./components/home/inspirationCabin/InspirationCabins";
import InspirationSlug from "./components/home/inspirationCabin/InspirationSlug";

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

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

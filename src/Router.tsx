import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./_layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./_layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <div>404 Not Found</div>,
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

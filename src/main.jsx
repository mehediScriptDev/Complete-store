import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Components/Banner.jsx";
import Error from "./Components/Error.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import Faq from "./Components/Faq.jsx";
import Addvisa from "./Components/Addvisa.jsx";
import Allpost from "./Components/Allpost.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider, { AuthContext } from "../Auth/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/addvisa",
        element: <Addvisa></Addvisa>,
      },
      {
        path: "/allvisa",
        element: <Allpost></Allpost>,
        loader: () => fetch("http://localhost:5000/visas"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

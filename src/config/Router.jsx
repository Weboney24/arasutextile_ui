import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ContactLanding from "../landing/ContactLanding";
import AboutLanding from "../landing/AboutLanding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/aboutus",
    element: <Layout />,
    children: [{ path: "/aboutus", element: <AboutLanding /> }],
  },
  {
    path: "/contact",
    element: <Layout />,
    children: [{ path: "/contact", element: <ContactLanding /> }],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ContactLanding from "../landing/ContactLanding";
import AboutLanding from "../landing/AboutLanding";
import CollectionLanding from "../landing/CollectionLanding";
import BlogLanding from "../landing/BlogLanding";
import BlogSingle from "../landing/BlogSingle";
import Login from "../components/auth/Login";
import Blogs from "../Admin/pages/blogs/Blogs";
import AdminLayout from "../Admin/AdminLayout";
import Changepassword from "../Admin/pages/profile/Changepassword";
import Products from "../landing/Products";

let client_routes = [
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
  {
    path: "/collections",
    element: <Layout />,
    children: [{ path: "/collections", element: <CollectionLanding /> }],
  },
  {
    path: "/products",
    element: <Layout />,
    children: [{ path: "/products", element: <Products /> }],
  },
  {
    path: "/blogs",
    element: <Layout />,
    children: [{ path: "/blogs", element: <BlogSingle /> }],
  },
  {
    path: "/blogsdetails",
    element: <Layout />,
    children: [{ path: "/blogsdetails/:id", element: <BlogLanding /> }],
  },
];

let admin_routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin-blogs",
    element: <AdminLayout />,
    children: [{ path: "/admin-blogs", element: <Blogs /> }],
  },
  {
    path: "/change-password",
    element: <AdminLayout />,
    children: [{ path: "/change-password", element: <Changepassword /> }],
  },
  // {
  //   path: "/profile",
  //   element: <AdminLayout />,
  //   children: [{ path: "/profile", element: <Profile /> }],
  // },
];

const router = createBrowserRouter([...client_routes, ...admin_routes]);

export default router;

import React from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import Order from "./pages/Order/Order";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "./store/productsSlice";
import Loader from "./components/Loader/Loader";
import Page404 from "./pages/404/Page404";
import About from "./pages/About/About";

export default function App() {
  const navigate = useNavigate();
  const client = window.location.href;
  const dispatch = useDispatch();
 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:type" element={<Category />} />
        {/* <Route path="/order" element={<Order />} /> */}
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

import React from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import Order from "./pages/Order/Order";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/productsSlice";
export default function App() {
  const navigate = useNavigate();
  const client = window.location.href;
  const dispatch = useDispatch();
  if (client.includes("scan/")) {
    sessionStorage.setItem(
      "client",
      client.slice(client.indexOf("scan/") + 5, client.length)
    );
  }
  React.useEffect(() => {
    dispatch(checkAuth());
    navigate("/");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

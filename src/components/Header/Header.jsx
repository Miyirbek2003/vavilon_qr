import "./header.css";
import { FaAngleDown } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLangg } from "../../store/productsSlice";
import logo from "../../assets/logo.png";
export default function Header() {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="container"></div>
     
    </header>
  );
}

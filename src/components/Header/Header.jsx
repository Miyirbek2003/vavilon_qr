import "./header.css";
import { FaAngleDown } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLangg } from "../../store/productsSlice";
import logo from '../../assets/logo.svg'
export default function Header() {
  const [lang, setLang] = React.useState(
    localStorage.getItem("lang") === "uz"
      ? "O`zbek"
      : localStorage.getItem("lang") === "qr"
      ? "Qaraqalpaqsha"
      : localStorage.getItem("lang") === "ru"
      ? "Русский"
      : localStorage.getItem("lang") === "en" && "English"
  );
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="container">
        <div className="lang">
          <button
            onClick={() => {
              const drop = document.querySelector(".drop");
              drop.classList.toggle("active");
            }}
          >
            {lang} <FaAngleDown />{" "}
          </button>
          <ul className="drop">
            <li
              onClick={() => {
                const drop = document.querySelector(".drop");
                drop.classList.toggle("active");
                setLang("Qaraqalpaqsha");
                dispatch(setLangg("qr"));
              }}
            >
              Qaraqalpaqsha
            </li>
            <li
              onClick={() => {
                const drop = document.querySelector(".drop");
                drop.classList.toggle("active");
                setLang("English");
                dispatch(setLangg("en"));
              }}
            >
              English
            </li>
            <li
              onClick={() => {
                const drop = document.querySelector(".drop");
                drop.classList.toggle("active");
                setLang("O'zbek");
                dispatch(setLangg("uz"));
              }}
            >
              O'zbek
            </li>
            <li
              onClick={() => {
                const drop = document.querySelector(".drop");
                drop.classList.toggle("active");
                setLang("Русский");
                dispatch(setLangg("ru"));
              }}
            >
              Русский
            </li>
          </ul>
        </div>
      </div>
      <div className="btm"></div>
    </header>
  );
}

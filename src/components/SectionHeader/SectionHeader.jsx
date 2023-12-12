import "./secheader.css";
import off from "../../assets/off.svg";
import check from "../../assets/check.svg";
import wifi from "../../assets/wifi.svg";
import phone from "../../assets/phone.svg";
import map from "../../assets/map.svg";
import { checkAuth } from "../../store/productsSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import React from "react";
export default function SectionHeader() {
  const { isAuth, lang } = useSelector((state) => state.productsSlice);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = React.useState(false);
  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  React.useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <div className="section-header">
      {modalOpen && <Modal />}

      {isAuth && (
        <div className="buttons">
          <button
            onClick={() => {
              fetch("https://qr-menu.premierlounge.uz/api/call?type=waiter", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  uuid: sessionStorage.getItem("client"),
                },
                params: {
                  type: "waiter",
                },
              });
              setModalOpen(true);
              setTimeout(() => {
                setModalOpen(false);
              }, 3000);
            }}
          >
            {" "}
            <img src={off} alt="" />{" "}
            {localStorage.getItem("lang") == "ru"
              ? "Официант"
              : localStorage.getItem("lang") == "uz"
              ? "Ofisiant"
              : localStorage.getItem("lang") == "qr"
              ? "Oficiant"
              : localStorage.getItem("lang") == "en" && "Waiter"}
          </button>
          <button
            onClick={() => {
              fetch("https://qr-menu.premierlounge.uz/api/call?type=bill", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  uuid: sessionStorage.getItem("client"),
                },
                params: {
                  type: "bill",
                },
              });
              setModalOpen(true);
              setTimeout(() => {
                setModalOpen(false);
              }, 3000);
            }}
          >
            {" "}
            <img src={check} alt="" />{" "}
            {localStorage.getItem("lang") == "ru"
              ? "Счет"
              : localStorage.getItem("lang") == "uz"
              ? "Hisob"
              : localStorage.getItem("lang") == "qr"
              ? "Esap"
              : localStorage.getItem("lang") == "en" && "Bill"}
          </button>
        </div>
      )}
      <div className="infos">
        <div className="infos-top">
          <span>
            <img src={wifi} alt="" />
            Wifi : 123456
          </span>
          <span>
            <img src={phone} alt="" />
            <a href="tel:+998973587007">+998973587007</a>
          </span>
        </div>
        <div className="infos-btm">
          <span>
            <img src={map} alt="" />
            {localStorage.getItem("lang") == "ru"
              ? "г.Нукус  Жолмурза Аймурзаев б/н, MixMarket"
              : localStorage.getItem("lang") == "uz"
              ? "Nukus, Jolmurza Aymurzaev r/u , MixMarket"
              : localStorage.getItem("lang") == "qr"
              ? "Nókis, Jolmurza Aymurzaev n/ú, MixMarket "
              : localStorage.getItem("lang") == "en" &&
                "Nukus, Jolmurza Aymurzaev street , MixMartket"}
          </span>
        </div>
      </div>
    </div>
  );
}

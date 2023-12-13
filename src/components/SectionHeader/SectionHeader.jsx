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

      <div className="infos">
        <div>
          <div className="infos-top">
            <span>
              <img src={phone} alt="" />
              <a href="tel:+998973587007">+998 97 358 70 07</a>
            </span>
          </div>
          <div className="infos-btm">
            <span>
              <img src={map} alt="" />
              Нукус, улица <br /> А.Досназаров 319/1
            </span>
          </div>  
        </div>
        <button className="btn">Оставить отзыв</button>
      </div>
    </div>
  );
}

import "./secheader.css";
import off from "../../assets/off.svg";
import check from "../../assets/check.svg";
import wifi from "../../assets/wifi.svg";
import phone from "../../assets/phone.svg";
import map from "../../assets/map.svg";

import Modal from "../Modal/Modal";
import React from "react";
import ModalFeed from "../Modal/ModalFeed";
export default function SectionHeader() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [feedModalOpen, setFeedModalOpen] = React.useState(false);
  if (modalOpen || feedModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="section-header">
      {modalOpen && <Modal />}
      {feedModalOpen && (
        <ModalFeed
          setModalOpen={setModalOpen}
          setFeedModalOpen={setFeedModalOpen}
        />
      )}

      <div className="infos">
        <div>
          <div className="infos-top">
            <span>
              <img src={phone} alt="" />
              <a href="tel:+998904246060">+998 90 424 60 60</a>
            </span>
          </div>
          <div className="infos-btm">
            <span>
              <img src={map} alt="" />
              Нукус, улица <br /> А.Досназаров 319/1
            </span>
          </div>
        </div>
        <button className="btn" onClick={() => setFeedModalOpen(true)}>
          Оставить отзыв
        </button>
      </div>
    </div>
  );
}

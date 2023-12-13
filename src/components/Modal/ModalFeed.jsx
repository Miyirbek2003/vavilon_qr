import React from "react";
import "./modal.css";
import { VscTriangleDown } from "react-icons/vsc";

export default function ModalFeed({ setFeedModalOpen }) {
  const [selected1, setSelected1] = React.useState("");
  const [selected2, setSelected2] = React.useState("");
  const [selected3, setSelected3] = React.useState("");
  return (
    <div className="modal feed">
      <div className="modal-back">
        <span className="exit" onClick={() => setFeedModalOpen(false)}>
          &times;
        </span>
        <div className="container">
          <div className="modal-inner">
            <h3 style={{ textAlign: "center" }}>Отзыв гостей</h3>
            <div className="form-inner">
              <div className="form-item">
                <div className="form-title">
                  <p>
                    1. Было ли приветствие официанта и познакомил ли он/она
                    себя?
                  </p>
                  <div className="drop-down">
                    {selected1 ? (
                      <div className="select-btn">
                        <span>{selected1}</span>
                        <VscTriangleDown />
                      </div>
                    ) : (
                      <div className="select-btn">
                        <span>Выберите</span>
                        <VscTriangleDown />
                      </div>
                    )}
                    <ul>
                      <li onClick={(e) => setSelected1(e.target.innerHTML)}>
                        Да
                      </li>

                      <li onClick={(e) => setSelected1(e.target.innerHTML)}>
                        Нет
                      </li>

                      <li onClick={(e) => setSelected1(e.target.innerHTML)}>
                        Не знаю
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-item">
                <div className="form-title">
                  <p>
                    1. Было ли приветствие официанта и познакомил ли он/она
                    себя?
                  </p>
                  <div className="drop-down">
                    {selected2 ? (
                      <div className="select-btn">
                        <span>{selected2}</span>
                        <VscTriangleDown />
                      </div>
                    ) : (
                      <div className="select-btn">
                        <span>Выберите</span>
                        <VscTriangleDown />
                      </div>
                    )}
                    <ul>
                      <li onClick={(e) => setSelected2(e.target.innerHTML)}>
                        Да
                      </li>

                      <li onClick={(e) => setSelected2(e.target.innerHTML)}>
                        Нет
                      </li>

                      <li onClick={(e) => setSelected2(e.target.innerHTML)}>
                        Не знаю
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-item">
                <div className="form-title">
                  <p>
                    1. Было ли приветствие официанта и познакомил ли он/она
                    себя?
                  </p>
                  <div className="drop-down">
                    {selected3 ? (
                      <div className="select-btn">
                        <span>{selected3}</span>
                        <VscTriangleDown />
                      </div>
                    ) : (
                      <div className="select-btn">
                        <span>Выберите</span>
                        <VscTriangleDown />
                      </div>
                    )}
                    <ul>
                      <li onClick={(e) => setSelected3(e.target.innerHTML)}>
                        Да
                      </li>

                      <li onClick={(e) => setSelected3(e.target.innerHTML)}>
                        Нет
                      </li>

                      <li onClick={(e) => setSelected3(e.target.innerHTML)}>
                        Не знаю
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-item">
                <div className="form-title">
                  <p>
                    1. Было ли приветствие официанта и познакомил ли он/она
                    себя?
                  </p>
                  <textarea name="comment" id="coment" rows={4}></textarea>
                </div>
              </div>

              <button className="btn">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

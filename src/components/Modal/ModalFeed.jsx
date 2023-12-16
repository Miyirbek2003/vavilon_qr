import React from "react";
import "./modal.css";
import { VscTriangleDown } from "react-icons/vsc";

export default function ModalFeed({ setFeedModalOpen, setModalOpen }) {
  const [selected1, setSelected1] = React.useState("");
  const [selected2, setSelected2] = React.useState("");
  const [selected3, setSelected3] = React.useState("");
  return (
    <div
      className="modal feed"
      onClick={(e) => {
        e.stopPropagation();
        setFeedModalOpen(false);
      }}
    >
      <div
        className="modal-back"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
                  <div
                    className="drop-down"
                    onClick={(e) => {
                      e.stopPropagation();
                      let dr1 = document.querySelector(".dr1");
                      dr1.classList.add("active");
                    }}
                  >
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
                    <ul className="dr1">
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected1(e.target.innerHTML);
                          let dr1 = document.querySelector(".dr1");
                          dr1.classList.remove("active");
                        }}
                      >
                        Да
                      </li>

                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected1(e.target.innerHTML);
                          let dr1 = document.querySelector(".dr1");
                          dr1.classList.remove("active");
                        }}
                      >
                        Нет
                      </li>

                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected1(e.target.innerHTML);
                          let dr1 = document.querySelector(".dr1");
                          dr1.classList.remove("active");
                        }}
                      >
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
                  <div
                    className="drop-down"
                    onClick={() => {
                      let dr1 = document.querySelector(".dr2");
                      dr1.classList.add("active");
                    }}
                  >
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
                    <ul className="dr2">
                      <li
                        onClick={(e) => {
                          setSelected2(e.target.innerHTML);
                          e.stopPropagation();

                          let dr1 = document.querySelector(".dr2");
                          dr1.classList.remove("active");
                        }}
                      >
                        Да
                      </li>

                      <li
                        onClick={(e) => {
                          setSelected2(e.target.innerHTML);
                          e.stopPropagation();
                          let dr1 = document.querySelector(".dr2");
                          dr1.classList.remove("active");
                        }}
                      >
                        Нет
                      </li>

                      <li
                        onClick={(e) => {
                          setSelected2(e.target.innerHTML);
                          let dr1 = document.querySelector(".dr2");
                          e.stopPropagation();
                          dr1.classList.remove("active");
                        }}
                      >
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
                  <div
                    className="drop-down"
                    onClick={(e) => {
                      e.stopPropagation();
                      let dr1 = document.querySelector(".dr3");
                      dr1.classList.add("active");
                    }}
                  >
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
                    <ul className="dr3">
                      <li
                        onClick={(e) => {
                          setSelected3(e.target.innerHTML);
                          e.stopPropagation();
                          let dr1 = document.querySelector(".dr3");
                          dr1.classList.remove("active");
                        }}
                      >
                        Да
                      </li>

                      <li
                        onClick={(e) => {
                          setSelected3(e.target.innerHTML);
                          e.stopPropagation();
                          let dr1 = document.querySelector(".dr3");
                          dr1.classList.remove("active");
                        }}
                      >
                        Нет
                      </li>

                      <li
                        onClick={(e) => {
                          setSelected3(e.target.innerHTML);
                          e.stopPropagation();
                          let dr1 = document.querySelector(".dr3");
                          dr1.classList.remove("active");
                        }}
                      >
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
                  <textarea
                    name="comment"
                    placeholder="Объяснение"
                    id="coment"
                    rows={4}
                  ></textarea>
                </div>
              </div>

              <button
                className="btn"
                onClick={() => {
                  setFeedModalOpen(false), setModalOpen(true);
                  setTimeout(() => {
                    setModalOpen(false);
                  }, 2000);
                }}
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

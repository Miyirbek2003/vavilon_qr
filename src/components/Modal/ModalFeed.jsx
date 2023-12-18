import React from "react";
import "./modal.css";
import { VscTriangleDown } from "react-icons/vsc";
import axios from "axios";

export default function ModalFeed({ setFeedModalOpen, setModalOpen }) {
  const [selected1, setSelected1] = React.useState("");
  const [selected2, setSelected2] = React.useState("");
  const [selected3, setSelected3] = React.useState("");
  const [coment, setComent] = React.useState("");

  async function onSent(e) {
    e.preventDefault();

    if (selected1 && selected2 && selected3) {
      try {
        const response = await axios.post(
          "https://admin-vavilon.webclub.uz/api/feedback",
          {
            question_1: selected1.id,
            question_2: selected2.id,
            question_3: selected3.id,
            question_4: coment,
          }
        );

        setFeedModalOpen(false),
          setModalOpen(true),
          setTimeout(() => {
            setModalOpen(false);
          }, 2000);
      } catch (error) {
        console.log(error);
      }
    }

    if (!selected1) {
      document.querySelector(".error1").style.display = "block";
    }
    if (!selected2) {
      document.querySelector(".error2").style.display = "block";
    }
    if (!selected3) {
      document.querySelector(".error3").style.display = "block";
    }
  }
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
            <form onSubmit={onSent} className="form-inner">
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
                        <span>{selected1.text}</span>
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
                          setSelected1({
                            id: "1",
                            text: "Да",
                          });
                          let dr1 = document.querySelector(".dr1");
                          dr1.classList.remove("active");
                          document.querySelector(".error1").style.display =
                            "none";
                        }}
                      >
                        Да
                      </li>

                      <li
                        onClick={(e) => {
                          e.stopPropagation();

                          setSelected1({
                            id: "0",
                            text: "Нет",
                          });
                          let dr1 = document.querySelector(".dr1");
                          dr1.classList.remove("active");
                          document.querySelector(".error1").style.display =
                            "none";
                        }}
                      >
                        Нет
                      </li>
                    </ul>
                  </div>
                  <span className="error1">Выберите один вариант</span>
                </div>
              </div>
              <div className="form-item">
                <div className="form-title">
                  <p>2. Понравилось ли обслуживание официанта?</p>
                  <div
                    className="drop-down"
                    onClick={() => {
                      let dr1 = document.querySelector(".dr2");
                      dr1.classList.add("active");
                    }}
                  >
                    {selected2 ? (
                      <div className="select-btn">
                        <span>{selected2.text}</span>
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
                          setSelected2("1");
                          setSelected2({
                            id: "1",
                            text: "Да",
                          });
                          e.stopPropagation();

                          let dr1 = document.querySelector(".dr2");
                          dr1.classList.remove("active");
                          document.querySelector(".error2").style.display =
                            "none";
                        }}
                      >
                        Да
                      </li>

                      <li
                        onClick={(e) => {
                          setSelected2({
                            id: "0",
                            text: "Нет",
                          });
                          e.stopPropagation();
                          let dr1 = document.querySelector(".dr2");
                          dr1.classList.remove("active");
                          document.querySelector(".error2").style.display =
                            "none";
                        }}
                      >
                        Нет
                      </li>
                    </ul>
                  </div>
                  <span className="error2">Выберите один вариант</span>
                </div>
              </div>
              <div className="form-item">
                <div className="form-title">
                  <p>3. Понравились ли Вам блюда ?</p>
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
                        <span>{selected3.text}</span>
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
                          setSelected3("1");
                          setSelected3({
                            id: "1",
                            text: "Да",
                          });
                          e.stopPropagation();
                          let dr1 = document.querySelector(".dr3");
                          dr1.classList.remove("active");
                          document.querySelector(".error3").style.display =
                            "none";
                        }}
                      >
                        Да
                      </li>

                      <li
                        onClick={(e) => {
                          setSelected3("0");
                          e.stopPropagation();
                          setSelected3({
                            id: "0",
                            text: "Нет",
                          });
                          let dr1 = document.querySelector(".dr3");
                          dr1.classList.remove("active");
                          document.querySelector(".error3").style.display =
                            "none";
                        }}
                      >
                        Нет
                      </li>
                    </ul>
                  </div>
                  <span className="error3">Выберите один вариант</span>
                </div>
              </div>
              <div className="form-item">
                <div className="form-title">
                  <p>4. Ваше предложения и жалобы</p>
                  <textarea
                    name="comment"
                    placeholder="Объяснение"
                    id="coment"
                    value={coment}
                    rows={4}
                    onChange={(e) => {
                      setComent(e.target.value),
                        (document.querySelector(".error4").style.display =
                          "none");
                    }}
                  ></textarea>
                </div>
              </div>

              <button className="btn" type="submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

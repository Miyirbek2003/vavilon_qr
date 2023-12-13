import "./homeb.css";
import { Link, NavLink, useParams } from "react-router-dom";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function HomeB({ category }) {
  const { id } = useParams();
  return (
    <section className="homeb">
      <div className="home-body-inner">
        {category?.map((cat, index) => (
          <div key={cat.id} className="category">
            <div className="img">
              <img src={`${cat.img_url}`} alt="" />
            </div>
            <NavLink to={`/category/${cat.id}`}>
              {
                cat.translations.filter(
                  (lang) => lang.locale == localStorage.getItem("lang")
                )[0].name
              }
            </NavLink>
          </div>
        ))}
      </div>
      <div className="scrollTop">
        <button
          onClick={() => {
            window.scroll({
              left: 0,
              top: 0,
            });
          }}
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    </section>
  );
}

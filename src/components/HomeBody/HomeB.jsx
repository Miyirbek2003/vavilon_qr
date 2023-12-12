import "./homeb.css";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function HomeB({ category }) {
  const { id } = useParams();
  return (
    <section className="homeb">
      <div className="btm"></div>
      <div className="home-body-inner">
        {category?.map((cat, index) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className="category"
            style={
              index >= 10
                ? {
                    backgroundImage: `url(${cat.img_url})`,
                    backgroundSize: "contain",
                    backgroundColor: "white",
                  }
                : {
                    backgroundImage: `url(${cat.img_url})`,
                  }
            }
          >
            <h2>
              {
                cat.translations.filter(
                  (lang) => lang.locale == localStorage.getItem("lang")
                )[0].name
              }
            </h2>
          </Link>
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

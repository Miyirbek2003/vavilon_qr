import "./homeb.css";
import { Link, NavLink, useParams } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineArrowUp } from "react-icons/ai";
import ItemLoader from "../Loader/ItemLoader";
export default function HomeB({ category }) {
  const { id } = useParams();
  const { itemLoading } = useSelector((state) => state.productsSlice);
  return (
    <section className="homeb">
      <div className="home-body-inner">
        {itemLoading
          ? Array(4)
              .fill()
              .map(() => <ItemLoader />)
          : category?.map((cat, index) => (
              <NavLink
                to={`/category/${cat.id}`}
                key={cat.id}
                className="category"
              >
                <div className="img">
                  <img src={`${cat.img_url}`} alt="" />
                </div>

                <span>
                  {
                    cat.translations.filter(
                      (lang) => lang.locale == localStorage.getItem("lang")
                    )[0].name
                  }
                </span>
              </NavLink>
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

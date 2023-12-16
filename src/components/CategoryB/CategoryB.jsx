import React from "react";
import { useParams } from "react-router-dom";
import "./categoryb.css";
import { useSelector } from "react-redux";
export default function CategoryB({ products }) {
  const { type } = useParams();
  const lang = localStorage.getItem("lang");
  const { category, itemLoadind } = useSelector((state) => state.productsSlice);

  return (
    <div className="categoryb">
      <h2 style={{ marginBottom: "20px" }}>
        {
          category
            ?.filter((item) => item.id == type)[0]
            ?.translations.filter((langg) => langg.locale == lang)[0].name
        }{" "}
      </h2>
      <div className="category-card">
        {products
          ?.filter((item) => item.category_id == type)
          .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
          .map((pr) => (
            <div key={pr.id} className="category-item">
              <div className="img">
                <img src={`${pr.img_url}`} alt="" />
              </div>
              <div className="category-text">
                <div className="category-title">
                  <h2>
                    {
                      pr?.translations.filter(
                        (langg) => langg.locale == lang
                      )[0]?.name
                    }
                  </h2>
                  <span className="price">
                    {pr.price} <span>{lang == "ru" ? "сум" : "sum"}</span>
                  </span>
                </div>
                <div className="category-body">
                  <p>
                    {
                      pr?.translations.filter(
                        (langg) => langg.locale == lang
                      )[0]?.description
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";
import "./categoryb.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/productsSlice";
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
        {category
          ?.filter((item) => item.id == type)[0]
          ?.translations.filter((langg) => langg.locale == lang)[0].name !=
        "Бой пасуды"
          ? products?.map((pr, index) => (
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
                      {pr.price.toLocaleString()}{" "}
                      <span>{lang == "ru" ? "сум" : "sum"}</span>
                    </span>
                  </div>
                  <div className="category-body">
                    <p>
                      {pr?.translations
                        .filter((langg) => langg.locale == lang)[0]
                        ?.description?.split(", ")
                        .join(" * ")}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : products?.map((pr, index) => (
              <div key={pr.id} className="category-item">
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
                      {pr.price.toLocaleString()}{" "}
                      <span>{lang == "ru" ? "сум" : "sum"}</span>
                    </span>
                  </div>
                  <div className="category-body">
                    <p>
                      {pr?.translations
                        .filter((langg) => langg.locale == lang)[0]
                        ?.description?.split(", ")
                        .join(" * ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

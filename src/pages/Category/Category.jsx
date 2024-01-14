import "./category.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CategoryB from "../../components/CategoryB/CategoryB";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getProducts } from "../../store/productsSlice";
import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import ProductLoader from "../../components/Loader/ProductLoader";
export default function Category() {
  const dispatch = useDispatch();
  const { type } = useParams();
  const { products, itemLoading, category } = useSelector(
    (state) => state.productsSlice
  );
  React.useEffect(() => {
    // if (products.length == 0) {
    dispatch(getProducts(type));
    // }
    if (category.length == 0) {
      dispatch(getCategory());
    }
    window.scroll({
      left: 0,
      top: 0,
    });
  }, [type]);

  const navigate = useNavigate();
  return (
    <section className="cat-sc">
      <div className="container">
        <SectionHeader />
        {itemLoading ? (
          <div style={{ marginTop: "25px" }}>
            {Array(4)
              .fill()
              .map(() => (
                <ProductLoader key={Math.random()} />
              ))}
          </div>
        ) : (
          <CategoryB products={products} />
        )}
        {type && (
          <div className="scrollTop back">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              <AiOutlineArrowLeft />
            </button>
          </div>
        )}
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
      </div>
    </section>
  );
}

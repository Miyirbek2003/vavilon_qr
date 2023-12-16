import HomeB from "../../components/HomeBody/HomeB";
import { useSelector, useDispatch } from "react-redux";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { getCategory } from "../../store/productsSlice";
import "./home.css";
import React from "react";
import Loader from "../../components/Loader/Loader";
import ItemLoader from "../../components/Loader/ItemLoader";

export default function Home() {
  const dispatch = useDispatch();
  const { category, loading } = useSelector((state) => state.productsSlice);
  React.useEffect(() => {
    dispatch(getCategory());
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <section className="main-home">
      <div className="container">
        <SectionHeader />
        {loading ? (
          <div style={{ marginTop: "25px" }}>
            {Array(4)
              .fill()
              .map(() => (
                <ItemLoader key={Math.random()} />
              ))}
          </div>
        ) : (
          <HomeB category={category} />
        )}
      </div>
    </section>
  );
}

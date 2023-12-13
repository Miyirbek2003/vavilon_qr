import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";
export default function Layout() {
  if (true) {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

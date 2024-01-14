import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/vorota.jpg";
export default function About() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ maxWidth: "80%", margin: "25px", borderRadius: "10px" }}
          src={logo}
          alt=""
        />

        <p style={{ fontWeight: "400", textAlign: "justify" }}>
          &nbsp;&nbsp;&nbsp;&nbsp; Этот логотип выполнен в виде одних из восьми
          ворот Вавилона <b>«Ворота Иштар»</b> которые сохранились до наших
          времен. Так же две буквы стали частью графического изображения в виде
          арки.
        </p>
      </div>
      <div className="scrollTop back">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <AiOutlineArrowLeft />
        </button>
      </div>
    </div>
  );
}

import pre_logo from "../../assets/pre_logo.png";
export default function Page404() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        background: "#2B2B2A",
      }}
    >
      <img src={pre_logo} alt="" />
      <h3
        style={{
          fontWeight: "500",
          position: "relative",
          fontSize: "35px",
          letterSpacing: "1.5px",
        }}
      >
        <div className="sign">
          <span className="fast-flicker">V</span>avi
          <span className="flicker">l</span>on
        </div>
      </h3>
    </section>
  );
}

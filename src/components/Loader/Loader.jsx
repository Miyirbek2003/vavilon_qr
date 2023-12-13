import pre_logo from "../../assets/pre_logo.png";
export default function Loader() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
        <div class="sign">
          <span class="fast-flicker">V</span>avi<span class="flicker">l</span>on
        </div>
      </h3>
    </section>
  );
}

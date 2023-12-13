import pre_logo from "../../assets/pre_logo.png";
export default function Loader() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:'column'
      }}
    >
      <img src={pre_logo} alt="" />
      <h3 style={{fontWeight:'500', fontSize:'35px', letterSpacing:'1.5px'}}>Vavilon</h3>
    </section>
  );
}

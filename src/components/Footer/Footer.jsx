export default function Footer() {
  return (
    <div className="container">
      <span style={{ color: "white", marginTop:'15px', marginBottom:'10px' }}>
        Разработчик:{" "}
        <a
          href="https://www.dbc24.uz/"
          target={"_blank"}
          style={{ color: "white", textDecoration: "underline" }}
        >
          {" "}
          DBC24.uz
        </a>
      </span>
    </div>
  );
}

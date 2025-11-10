import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        padding: "1rem",
        backgroundColor: "#1e3c72",
        color: "white",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        Home
      </Link>
      <Link to="/introduction" style={{ color: "white", textDecoration: "none" }}>
        Introduction
      </Link>
      <Link to="/contract" style={{ color: "white", textDecoration: "none" }}>
        Contract
      </Link>
      <a
        href="https://thomasblackford.github.io/itsc3135/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#b3c6ff", textDecoration: "none" }}
      >
        React3
      </a>
    </nav>
  );
}

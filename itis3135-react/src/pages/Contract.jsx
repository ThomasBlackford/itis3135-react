import { Link } from "react-router-dom";

export default function Contract() {
  return (
    <main>
      <h2>Course Contract Agreement</h2>

      <p>I, <strong>Thomas Blackford</strong>, agree and sign the course contract.</p>
      <p>Date: 8/25/25</p>

      <section>
        <h3>Academic Integrity Pledge</h3>
        <p>
          I pledge to uphold academic integrity in all my coursework. I will not give or receive unauthorized aid,
          and I will complete my assignments honestly and responsibly.
        </p>
      </section>

      <nav>
        <Link to="/Introduction" className="btn">
          Back to Introduction
        </Link>
      </nav>
    </main>
  );
}

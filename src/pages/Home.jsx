import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>ITSC 3135</h1>
      <h2>Front End Web Development</h2>

      <p>
        Welcome! Here you'll find all my projects and assignments for ITSC 3135.<br />
        Check back soon for updates.
      </p>

      <ul>
        <li>
          <a href="/Contract" target="_blank" rel="noopener noreferrer">
            Contract
          </a>
        </li>
        <li>
          <a href="/Introduction" target="_blank" rel="noopener noreferrer">
            Introduction
          </a>
        </li>
      </ul>
    </div>
  );
}

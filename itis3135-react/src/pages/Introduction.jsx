import { Link } from "react-router-dom";
import headshot from "../images/headshot.jpg";

export default function Introduction() {
  return (
    <main>
      <h2>Thomas Blackford</h2>

      <figure>
        <img src={headshot} alt="Professional image of Thomas Blackford" width="250" />
        <figcaption>Image of Me in Montana in 2024</figcaption>
      </figure>

      <section>
        <h3>Background</h3>
        <p>
          Hello! My name is Thomas Blackford. I am a dedicated student with a passion for technology and learning.
          Academically, I am pursuing a degree in Computer Science, focusing on software development and web design.
          Professionally, I have experience working on web development projects and game design. Personally, I enjoy
          writing stories, volleyball, and piano.
        </p>
      </section>

      <section>
        <h3>Current Courses</h3>
        <ul>
          <li>
            ITSC 3135 - Front End Web Development
            <ul>
              <li>Required for my concentration and also useful skills for my field.</li>
            </ul>
          </li>
          <li>
            ITSC 3146 - Intro to Operating Systems
            <ul>
              <li>Required for my major.</li>
            </ul>
          </li>
          <li>
            ITSC 3166 - Intro to Computer Networks
            <ul>
              <li>Technical elective to strengthen my networking understanding.</li>
            </ul>
          </li>
          <li>
            ITSC 3155 - Software Engineering
            <ul>
              <li>Required for my major and I want to learn more about the SDLC.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h3>Memorable Personal Item</h3>
        <p>
          One memorable item I own is my dogs' tags. They are special to me because they represent my bond with my pets.
        </p>
      </section>

      <div className="btn-group">
        <a href="/" className="btn">Back to Default Page</a>
        <Link to="/contract" className="btn">Contract</Link>
      </div>
    </main>
  );
}

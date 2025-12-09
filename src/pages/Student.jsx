import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [show, setShow] = useState({
    name: true,
    mascot: true,
    image: true,
    personal: true,
    backgrounds: true,
    classes: true,
    extra: true,
    quote: true,
    links: true,
  });

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error("Failed to load students:", err));
  }, []);

  const filteredStudents = students.filter(s => {
    const nameObj = s.name || {};
    const fullName = `${nameObj.first || ""} ${nameObj.last || ""}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  const currentStudent = filteredStudents[currentIndex];

  function nextStudent() {
    setCurrentIndex(prev =>
      prev + 1 >= filteredStudents.length ? 0 : prev + 1
    );
  }

  function prevStudent() {
    setCurrentIndex(prev =>
      prev - 1 < 0 ? filteredStudents.length - 1 : prev - 1
    );
  }

  function toggle(key) {
    setShow(prev => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Student Introductions</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by first or last name..."
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setCurrentIndex(0);
        }}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />

      {/* Counter */}
      <p><strong>Students Found:</strong> {filteredStudents.length}</p>

      {/* Checkboxes */}
      <div style={{ marginBottom: "1rem" }}>
        <label><input type="checkbox" checked={show.name} onChange={() => toggle("name")} /> Name</label>{" "}
        <label><input type="checkbox" checked={show.mascot} onChange={() => toggle("mascot")} /> Mascot</label>{" "}
        <label><input type="checkbox" checked={show.image} onChange={() => toggle("image")} /> Image</label>{" "}
        <label><input type="checkbox" checked={show.personal} onChange={() => toggle("personal")} /> Personal</label>{" "}
        <label><input type="checkbox" checked={show.backgrounds} onChange={() => toggle("backgrounds")} /> Backgrounds</label>{" "}
        <label><input type="checkbox" checked={show.classes} onChange={() => toggle("classes")} /> Classes</label>{" "}
        <label><input type="checkbox" checked={show.extra} onChange={() => toggle("extra")} /> Extra</label>{" "}
        <label><input type="checkbox" checked={show.quote} onChange={() => toggle("quote")} /> Quote</label>{" "}
        <label><input type="checkbox" checked={show.links} onChange={() => toggle("links")} /> Links</label>
      </div>

      {/* Slideshow Buttons */}
      {filteredStudents.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          <button onClick={prevStudent}>Previous</button>{" "}
          <button onClick={nextStudent}>Next</button>
        </div>
      )}

      {/* Student Display */}
      {currentStudent && (
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem" }}>
          {show.name && (
            <h2>
              {[currentStudent.name?.first, currentStudent.name?.middleInitial, currentStudent.name?.last]
                .filter(Boolean)
                .join(" ")}
            </h2>
          )}

          {show.mascot && <p><strong>Mascot:</strong> {currentStudent.mascot}</p>}

          {show.image && currentStudent.media?.hasImage && (
            <img
              src={currentStudent.media.src}
              alt={currentStudent.media.caption}
              style={{ maxWidth: "200px", marginBottom: "1rem" }}
            />
          )}

          {show.personal && (
            <p><strong>Personal Statement:</strong> {currentStudent.personalStatement}</p>
          )}

          {/* ✅ FIXED BACKGROUNDS OBJECT */}
          {show.backgrounds && currentStudent.backgrounds && (
            <div>
              <strong>Backgrounds:</strong>
              <p>Personal: {currentStudent.backgrounds.personal}</p>
              <p>Professional: {currentStudent.backgrounds.professional}</p>
              <p>Academic: {currentStudent.backgrounds.academic}</p>
              <p>Subject: {currentStudent.backgrounds.subject}</p>
            </div>
          )}

          {/* ✅ FIXED CLASSES ARRAY */}
          {show.classes && Array.isArray(currentStudent.classes) && (
            <p>
              <strong>Classes:</strong> {currentStudent.classes.join(", ")}
            </p>
          )}

          {/* ✅ FIXED EXTRA OBJECT */}
          {show.extra && (
            <>
              {typeof currentStudent.computer === "string" && (
                <p><strong>Computer:</strong> {currentStudent.computer}</p>
              )}
              <p><strong>Fun Fact:</strong> {currentStudent.funFact}</p>
            </>
          )}

          {/* ✅ FIXED QUOTE OBJECT */}
          {show.quote && currentStudent.quote && (
            <p>
              <strong>Quote:</strong> "{currentStudent.quote.text}" — {currentStudent.quote.author}
            </p>
          )}

          {show.links && (
            <p>
              <a href={currentStudent.links?.charlotte} target="_blank" rel="noreferrer">Webpage</a> |{" "}
              <a href={currentStudent.links?.github} target="_blank" rel="noreferrer">GitHub</a> |{" "}
              <a href={currentStudent.links?.githubio} target="_blank" rel="noreferrer">Portfolio</a>
            </p>
          )}
        </div>
      )}

      {filteredStudents.length === 0 && <p>No students found.</p>}
    </div>
  );
}

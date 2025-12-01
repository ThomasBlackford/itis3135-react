import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error("Failed to load students:", err));
  }, []);

  const filteredStudents = students.filter(s => {
    const nameObj = s.name || {};
    const fullName = [nameObj.first, nameObj.middleInitial, nameObj.last]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const searchTerm = search.toLowerCase();
    return fullName.includes(searchTerm);
  });

  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Student Introductions</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />

      {filteredStudents.map((s, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h2>
            {[s.name.first, s.name.middleInitial, s.name.last]
              .filter(Boolean)
              .join(" ")}
          </h2>
          {s.media?.hasImage && (
            <img
              src={s.media.src}
              alt={s.media.caption}
              style={{ maxWidth: "200px", marginBottom: "1rem" }}
            />
          )}
          <p><strong>Personal Statement:</strong> {s.personalStatement}</p>
          <p><strong>Quote:</strong> "{s.quote?.text}" — {s.quote?.author}</p>
          <p><strong>Fun Fact:</strong> {s.funFact}</p>
          <p>
            <a href={s.links.charlotte} target="_blank" rel="noreferrer">Webpage</a> |{" "}
            <a href={s.links.github} target="_blank" rel="noreferrer">GitHub</a> |{" "}
            <a href={s.links.githubio} target="_blank" rel="noreferrer">Portfolio</a>
          </p>
        </div>
      ))}

      {filteredStudents.length === 0 && <p>No students found.</p>}
    </div>
  );
}

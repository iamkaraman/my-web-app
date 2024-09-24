export default function Skills() {
  const mySkills = [
    "JavaScript",
    "TypeScript",
    "CSS3",
    "React",
    "Angular",
    " Angular Material",
    "Bootstrap",
    "Python",
    "AWS",
    "Azure",
    "Git",
  ];

  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <h1 className="paragraph-header">Technical Skills</h1>
        <div className="text-center" style={{ width: "700px" }}>
          {mySkills.map((skill) => {
            return (
              <span
                className="badge rounded-pill fs-5 button-text p-3 m-1"
                style={{ background: "#375AAB" }}
                key={skill}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

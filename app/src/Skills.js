import React from 'react'

function Skills(props) {
  return (
    <div
      className="skills"
      onClick={() => {
        if (props.empHistoryDisplay) {
          props.setEmpHistoryDisplay();
        }
        if(!props.skillsDisplay){props.setSkillsDisplay()};
      }}
    >
      {" "}
      Skills{" "}
    </div>
  );
}

function SkillsChunkFront(){
  return (
    <>
    <h1>
      Skills:
    </h1>
    <h4>
      Frontend
    </h4>
    <p>JavaScript, HTML, CSS, API integration, React</p>
    </>
  )
}

function SkillsChunkBack(){
  return (
    <>
    <h4>
      Backend
    </h4>
    <p>SQL, Postgres, RESTful APIs, CRUD</p>
    </>
  )
}

export {Skills, SkillsChunkFront, SkillsChunkBack}
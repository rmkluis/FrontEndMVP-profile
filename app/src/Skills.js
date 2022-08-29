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
    </>
  )
}

function SkillsChunkBack(){
  return (
    <>
    <h4>
      Backend
    </h4>
    </>
  )
}

export {Skills, SkillsChunkFront, SkillsChunkBack}
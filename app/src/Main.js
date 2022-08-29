import React from 'react'
import {Display} from './Display.js'
import SubMain from './SubMain.js'

function Main(props) {
  return (
    <>
      <div className="main">
        <SubMain
          submain={"SubMain"}
          setSkillsDisplay={props.setSkillsDisplay}
          skillsDisplay={props.skillsDisplay}
          setEmpHistoryDisplay={props.setEmpHistoryDisplay}
          empHistoryDisplay={props.empHistoryDisplay}
        />
        <Display skillsDisplay={props.skillsDisplay} empHistoryDisplay={props.empHistoryDisplay} />
      </div>
    </>
  );
}

export default Main
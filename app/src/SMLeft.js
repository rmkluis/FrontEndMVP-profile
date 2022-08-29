import React from 'react'
import {EmpHistory} from './EmpHistory.js'
import Personal from './Personal.js'

function SMLeft(props) {
  return (
    <>
      <div className="smleft">
        <EmpHistory
          empHistory="EmpHistory"
          setSkillsDisplay={props.setSkillsDisplay}
          skillsDisplay={props.skillsDisplay}
          setEmpHistoryDisplay={props.setEmpHistoryDisplay}
          empHistoryDisplay={props.empHistoryDisplay}        />
        <Personal
          personal="Personal"
          setSkillsDisplay={props.setSkillsDisplay}
          skillsDisplay={props.skillsDisplay}
          setEmpHistoryDisplay={props.setEmpHistoryDisplay}
          empHistoryDisplay={props.empHistoryDisplay}        />
      </div>
    </>
  );
}

export default SMLeft
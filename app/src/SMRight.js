import React from 'react'
import Misc from './Misc.js'
import {Skills} from './Skills.js';

function SMRight(props) {
  return (
    <>
      <div className="smright">
        <Skills
          skills="Skills"
          setSkillsDisplay={props.setSkillsDisplay}
          skillsDisplay={props.skillsDisplay}
          setEmpHistoryDisplay={props.setEmpHistoryDisplay}
          empHistoryDisplay={props.empHistoryDisplay}        />
        <Misc
          misc="Misc"
          setEmpHistoryDisplay={props.setEmpHistoryDisplay}
          empHistoryDisplay={props.empHistoryDisplay}        />
      </div>
    </>
  );
}

export default SMRight
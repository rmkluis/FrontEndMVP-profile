import React from 'react'
import SMLeft from './SMLeft.js'
import SMRight from './SMRight.js'
import Center from './Center.js'

function SubMain(props) {
  return (
    <>
      <div className="submain">
        <SMLeft
          smleft="SMLeft"
          setSkillsDisplay={props.setSkillsDisplay}
          skillsDisplay={props.skillsDisplay}
          setEmpHistoryDisplay={props.setEmpHistoryDisplay}
          empHistoryDisplay={props.empHistoryDisplay}        />
        <Center center="Center" />
        <SMRight
          smright="SMRight"
          setSkillsDisplay={props.setSkillsDisplay}
          skillsDisplay={props.skillsDisplay}
          setEmpHistoryDisplay={props.setEmpHistoryDisplay}
          empHistoryDisplay={props.empHistoryDisplay}        />
      </div>
    </>
  );
}

export default SubMain
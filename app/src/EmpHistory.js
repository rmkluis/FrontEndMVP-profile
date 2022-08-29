import React from 'react'

function EmpHistory(props) {
  return (
    <div className='emphistory' onClick={()=>{
      if(props.skillsDisplay){props.setSkillsDisplay()};
      if(!props.empHistoryDisplay){props.setEmpHistoryDisplay()};
      // console.log("empHistory clicked ", props.empHistoryDisplay)
    }}>EmpHistory</div>
  )
}

///////////////////////////////////////// Draw EmpHistory Start
function EmpHistoryChunk(){
  return(
  <>
  <div className='empHistoryChunk'>
    <h2>Robin Kluis - Employment History</h2>
    <h4 className='chunk'>
    Program Manager, US Army; San Antonio, TX — 2021-2022
    <p>
    Supervised, enrolled, and tracked the annual and weekly skills training of 150+ personnel. Ensured compliance with multiple levels of organizational guidance and regulations. Worked directly with executive leadership to develop training events, resulting in increased training opportunities and convenience for personnel. Led a staff of 4 personnel that supervised all operations and human resources issues within the organization. Led company’s rebranding effort, resulting in noticeably increased morale and participation in organizational events.
    </p>
    </h4>
    <h4 className='chunk'>
    Supervisor, US Army; Monterey, CA &#38; San Angelo, TX — 2018-2020
    <p>
    Selected to lead multiple teams, between 8 and 15 personnel, in a training environment. Ensured accountability, punctuality, and mediated interpersonal dilemmas in a high pressure environment, worsened by the rise of COVID-era limitations. Both locations resulted in above average training completion. 
    </p>
    </h4>
    <h4 className='chunk'>
    Inventory Supervisor, US Army; Fort Polk, LA — 2015-2018
    <p>
    Managed accountability of $1 Million+ in supplies and equipment. Ensured work areas were safe and hazardous materials were stored in accordance with all OSHA, EPA, and DOD regulations, resulting in 0 workplace accidents. Distributed and collected supplies and equipment, ensuring loss prevention and organizational readiness. Developed systems and operations that were elevated and integrated across multiple sister organizations. 
    </p>
    </h4>
    </div>
  </>
  )
}
///////////////////////////////////////// Draw EmpHistory End

export  {EmpHistory, EmpHistoryChunk}
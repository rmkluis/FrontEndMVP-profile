import React from 'react'
import EmpHistory from './EmpHistory.js'
import Personal from './Personal.js'

function SMLeft(props) {
  return (
    <>
    <div className='smleft'>    
    <EmpHistory empHistory='EmpHistory'/>
    <Personal personal="Personal"/>
    </div>

    </>
  )
}

export default SMLeft
import React from 'react'
import Display from './Display.js'
import SubMain from './SubMain.js'

function Main(props) {
  return (
    <>
    <div className='main'>           
      <SubMain submain={"SubMain"} />
      <Display />
    </div>
    </>
  )
}

export default Main
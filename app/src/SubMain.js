import React from 'react'
import SMLeft from './SMLeft.js'
import SMRight from './SMRight.js'
import Center from './Center.js'

function SubMain(props) {
  return (
    <>
    <div className="submain">    
    <SMLeft smleft="SMLeft"/>
    <Center center="Center"/>
    <SMRight smright="SMRight"/></div>

    </>
  )
}

export default SubMain
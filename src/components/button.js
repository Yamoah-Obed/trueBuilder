import React from 'react'
import "../Allcss/button.css"

const button = ({btntxt,btncolor}) => {
  return (
    <div >
        <button className='btn' style={{backgroundColor: btncolor }}>{btntxt}</button>
    </div>
  )
}

export default button
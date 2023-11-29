import React from 'react'
import "../Allcss/project.css"

const projectItem = ({image,Heading}) => {
  return (
    <>
        <div className='projectItem'>
            <img className='pimg' src={image} alt="" />
            <h3>{Heading}</h3>
        </div>
    </>
  )
}

export default projectItem
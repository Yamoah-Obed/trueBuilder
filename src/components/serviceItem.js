import React from 'react'
import "../Allcss/services.css"

const serviceItem = ({image,Heading,txt}) => {
  return (
    <>
        <div className='serviceItem'>
            <img className='img' src={image} alt="" />
            <h3>{Heading}</h3>
            <p>{txt}</p>
        </div>

    </>
  )
}

export default serviceItem
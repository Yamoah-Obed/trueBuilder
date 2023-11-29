import React from 'react'

const client = ({client}) => {
  return (
    <div>
        <div className='client' style={{padding:"20px"}}>
            <img src={client} alt="client" style={{width:"200px",borderRadius:"50%"}} />
        </div>
        

    </div>
  )
}

export default client
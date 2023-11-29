import React from 'react'
import "../Allcss/footers.css"

const footer = () => {
  return (
    <>
        <footer style={{backgroundColor:"black",color:"white"}}>
            <div className='footer' style={{display:"flex", justifyContent:"center",padding:"20px"}}>
                <div className='F1' style={{maxWidth:"30%",padding:"20px"}}>
                    <p>call now</p>
                    <h1>+233 45 0327 4673</h1>
                    <p >Let us hear from you on our services. We are on standbyto answer all your finance and investment questions.</p>
                </div>

                <div className='F1' style={{maxWidth:"30%",padding:"20px"}}>
                    <p>OUR ADDRESS</p>
                    <h3>P.o. Box 156 Ghana</h3>
                    <h3>@gmail.com</h3>
                </div>

                <div className='F1' style={{maxWidth:"20%",padding:"20px"}}>
                    <p>SOCIAL MEDIA</p>
                    <p>Connect with us on social and we will get in touch:</p>
                    <div>

                    </div>
                </div>
            </div>

            <div>©2021 True-Builders construction co. All Rights Reserved</div>
            
        </footer>
    </>
  )
}

export default footer
import React from 'react'
import "../Allcss/contact.css"
import Buttonn from '../components/button'
import TopTitle from '../components/topTitle'
import gg from '../Assets/1403962.jpg';

const Contact = () => {
  return (
    <>
        <TopTitle   toptxt={'CONTACT US'} topimg={gg}/>
        <div style={{color:"blue",justifyContent:"center",alignItems:"center",display:"flex",padding:"20px"}}>
        <h2 style={{color:"blue",maxWidth:"600px",alignItems:"center"}}>GET IN TOUCH WITH US ABOUT YOUR NEXT CONSTRUCTION PROJECT</h2>
        </div>
        <hr style={{width:"80%"}}></hr>
      <div className='cont' style={{display:"flex",alignItem:"center",padding:"30px 150px",height:"auto",justifyContent:"space-between"}}>
        <div >
        <div className="Contact" id="Contact">
                <div>
                  <h2 style={{color:"blue"}}>SEND US A MESSAGE</h2>
                  <form id="contact-form">
                    <div><input className='input'  style={{width:"400px",padding:"10px",marginBottom: "20px"}}
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                    </div>
                    
                    <div ><input className='input' style={{width:"400px",padding:"10px",marginBottom: "20px"}}
                      placeholder="E-mail"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                    </div>
                    
                    <div>
                    <textarea className='input' style={{width:"400px",padding:"10px",marginBottom: "20px"}}
                      placeholder="Text......"
                      id="message"
                      name="message"
                      rows="9"
                      required
                    ></textarea>
                    </div>
                    <Buttonn btntxt={"Submit"} btncolor={'blue'} type={SubmitEvent} />
                    
                  </form>
                </div>
              </div>

        </div>
        <div className='vertical'></div>
        <div style={{width:""}}>
          <h2 style={{color:"blue"}}>CONTACT INFORMATION</h2>
          <div>
            <h3>Phone</h3>
            <p>+233 456 3735</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>True-Builders@gmail.com</p>
          </div>
          <div>
            <h3>Head Office</h3>
            <p>Greater Accra, GC-151-4595</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
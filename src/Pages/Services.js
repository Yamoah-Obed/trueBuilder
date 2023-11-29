import React from 'react'
import "../Allcss/services.css"
import TopTitle from '../components/topTitle'
import gg from "../Assets/1403962.jpg"
import ServiceItem from '../components/serviceItem'
import { serviceList } from '../components/servicesList'

const Services = () => {
  return (
    <div>
        <div style={{alignItems:"center"}}>
        <TopTitle toptxt={"SERVICES"} topimg={gg} />
        <h2 style={{padding:"30px",color:"blue",fontSize:"30px"}}>We Offer a Range of Services to Meet Your Needs</h2>
          <hr style={{width:"80%"}}></hr>
        <div className='servicecontainer'>
        <div className='servicetxt'><p>At vero eoberunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p></div>
        </div>
        </div>
        
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            {serviceList.map((service,key) => {
                return(<ServiceItem key={service.key} image={service.image} Heading={service.Heading} txt={service.txt}/> )
            } )}
        </div>
        

    </div>
  )
}

export default Services
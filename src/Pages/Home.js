import { Button } from '@mui/material';
import React from 'react';
import '../Allcss/home.css';
import "../Allcss/services.css";
import ServiceItem from '../components/serviceItem';
import { serviceList } from '../components/servicesList';
import Buttonn from '../components/button';
import Management from './Management';
import { Link } from 'react-router-dom';
import { clientslist } from '../components/clientslist';
import Client from '../components/client';

const Home = () => {
  return (
    <>
      <div className='background'>
        <div>
          <div className='hometext'>
            <h1 style={{ fontSize: "50px", color: "blue" }}>BUILD YOUR FUTURE WITH US</h1>
            <p style={{ fontSize: "20px", color: "black" }}>-Bringing dreams to reality is our Job-</p>
            <Link to="/services"><Buttonn btntxt={"learn more"} btncolor={'blue'} /></Link>
          </div>
        </div>
      </div>

      <div>
      <div className='whatwedo' style={{ textAlign: "center", justifyContent: "center" }}>
  <h1> <span style={{ color: "blue" }}>What</span> We Do </h1>
  <div className='wdcont'>
  <div className='wdtxt' >
    <p>
    We provide ‘end-to-end’ design and build services for loft conversions, basement conversions, and kitchen extensions. We successfully completed bespoke home extension, high-end home renovation projects to achieve extra space;
  </p>
  </div>
  </div>
  
  
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
    {serviceList.slice(0, 3).map((service, key) => {
      return (<ServiceItem key={service.key} image={service.image} Heading={service.Heading} txt={service.txt} />)
    })}
  </div>
  <Buttonn btntxt={"view more"} btncolor={'blue'} />
</div>
      </div>

      <div style={{ backgroundColor: "black", alignItems: "center", padding: "28vh 0" }}>
        <div style={{ maxWidth: "750px", margin: 'auto auto' }}>
          <h1 style={{ color: "blue" }}>We are a commercial construction company and we can tailor a space that works for you</h1>
          <p style={{ color: "white" }}>We are a commercial construction company with expertise in design & build solutions. Our flexible approach ensures that you get the best designers for your new space; our methods ensure that it’s delivered on time and to budget. All you do is turn the key.</p>
        </div>
      </div>

      <div style={{ padding: "25px" }}>
        <h1>Our Clients</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {clientslist.map((clients, key) => {
            return (<Client key={clients.key} client={clients.clients} />)
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
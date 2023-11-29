import React from 'react';
import '../Allcss/about.css';
import gg from '../Assets/1403962.jpg';
import TopTitle from '../components/topTitle';


const About = () => {
  return (
    <>
      <div>
        <TopTitle toptxt={'ABOUT US'} topimg={gg} />
        <div style={{ padding: '20px' }}>
          <div style={{ padding: '20px' }}>
            <h2>OVERVIEW</h2>
          </div>
          <hr style={{ width: '50%', height: '2px', backgroundColor: 'blue' }} />
          <div className='abt'
            style={{
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='abttxt' style={{ maxWidth: '40%' }}>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>
            <div>
              <img style={{ width: '80%', height: '500px', borderRadius: '30px' }} src={gg} alt='' />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
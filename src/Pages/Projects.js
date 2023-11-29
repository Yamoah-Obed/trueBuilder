import React from 'react'
import TopTitle from "../components/topTitle"
import gg from "../Assets/1403962.jpg"
import { projectList } from '../components/projectList'
import ProjectItem from '../components/projectItem'

const Projects = () => {
  return (
    <>
        <div>
        <div style={{alignItems:"center"}}>
        <TopTitle toptxt={"PROJECTS"} topimg={gg} />

        <h2 style={{padding:"30px",color:"blue",fontSize:"30px"}}>Our latest Projects</h2>
          <hr style={{width:"80%"}}></hr>
        <div className='servicecontainer'>
        </div>
        
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap",padding:"20px"}}>
            {projectList.map((project,key) => {
                return(<ProjectItem key={project.key} image={project.image} Heading={project.Heading} /> )
            } )}
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Projects
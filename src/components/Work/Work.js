import React from 'react';
import './Work.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import Data from '../../Data.json'
// import img1 from '../../assets/Project 1.PNG'
// import img2 from '../../assets/Project_2.PNG'

const Work = () => {
  return (
    <div className='projects d-flex  flex-column align-items-center  ' id='project'>
      <h1 className=' my-4 display-1 fw-bold'>Projects </h1>

      {Data.projects.map((project) => (
            <div key={project.id} className='col'>
              
              <ProjectCard title={project.title} 
              skills={project.skills}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              img ={project.img}
              
              description={project.description}
              />
            </div>
          ))}
      
     
      
    </div>
  )
}

export default Work

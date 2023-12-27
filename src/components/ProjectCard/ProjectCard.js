import React from 'react';
import './ProjectCard.css';
import '@fortawesome/fontawesome-free/css/all.css';


const ProjectCard = ({title,skills,description,githubLink,demoLink,img} ) => {

 
  
  return (
    

    <div className='container-lg mb-4 mt-4 p-0 '>
       
       <div className='project_Img m-0 p-0 d-flex '>
       <h1 className='project_Title bg-light '>{title}</h1></div>
        <img className='project_poster ' src={require(`../../assets/${img}`)} alt={title} />

      
        

        

       <div className='project_Description   d-flex flex-row-reverse '>
        <div className=' bg-light '>
        <p  >{description}</p>
        
          <strong>
  <ul className='d-flex flex-wrap '>
    {skills.map((skill) => (
      <li className='mx-4' key={skill}>
        {skill}
      </li>
    ))}
  </ul>
</strong>

<button className='bg-primary m-2 p-2 projectbtn'><a target="_blank" rel="noreferrer" href={githubLink} >Github <i className="fa-brands fa-github"></i></a></button>
<button className='bg-warning m-2 p-2 projectbtn'><a target="_blank" rel="noreferrer" href={demoLink} >Demo <i className="fa-solid fa-square-arrow-up-right"></i></a></button>
          
        

      
        </div>
       
       </div>
    </div>
  );
};

export default ProjectCard;

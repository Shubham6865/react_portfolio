import React, { useState } from 'react';
import './Work.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import Data from '../../Data.json';

const Work = () => {
  const projectsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = Data.projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(Data.projects.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='projects d-flex  flex-column align-items-center' id='project'>
      <h1 className='my-4 display-1 fw-bold title'>Projects </h1>

      {currentProjects.map((project) => (
        <div key={project.id} className='col'>
          <ProjectCard
            title={project.title}
            skills={project.skills}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
            img={project.img}
            description={project.description}
          />
        </div>
      ))}

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage - 1)} tabIndex="-1" aria-disabled="true">Previous</button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Work;

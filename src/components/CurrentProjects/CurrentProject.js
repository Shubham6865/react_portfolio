import { Container, Row } from 'react-bootstrap';
import './CurrentProject.css';
import data from '../../Data.json';
import ProjectCard from '../ProjectCard/ProjectCard';

const CurrentProject = () => {
    return (

        <>

            <Container className=' d-flex flex-column justify-content-center align-items-center h-100 p-0 my-4 '>
                <Row>
                    <span className=' title display-1 fw-bold my-4'>Current Working On</span>
                </Row>
            </Container>
            <Row>

                {data.Inprogressproject.map((project) => (
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
            </Row>
        </>
        // </Container>
    )
}

export default CurrentProject

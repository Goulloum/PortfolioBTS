import dataProject from '../dataProject.json';
import ProjectCard from './ProjectCard';
import {Link} from 'react-router-dom';

function Projects(){
    return(
        <div className="projects-container">
            <div className="grid-container-project">
                {dataProject.Projects.map((project) => <Link key={project.id} to={{pathname: "/Details", state: project}}><ProjectCard onclick={project} key={project.id} name={project.name} desc={project.description} langages={project.langages} img={project.img} date={project.date} /></Link>)}
            </div>
        </div>
    )
}

export default Projects;
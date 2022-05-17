import dataProject from "../dataProject.json";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from 'axios'



function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState();

  useEffect(() =>{
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/situation/getAllSituations',

    }).then((data) => {
      setProjects(data.data)
      setLoading(false)
    })
  }, [])

  if(loading){
    return(
      <div className="loading">Chargement en cours ...</div>
    )
  }else{

  
  return (
    <div className="projects-container">
      <div className="grid-container-project">
        {projects.map((project) => (
          <Link key={project.id} to={{ pathname: "/Details", state: project }}>
            <ProjectCard
              key={project.id}
              name={project.name}
              desc={project.description}
              langages={project.langages}
              img={project.img}
              date={project.date}
            />
          </Link>
        ))}
      </div>
    </div>
  )}
}

export default Projects;

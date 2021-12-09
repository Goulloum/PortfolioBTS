

function ProjectCard(props){

    return(
        <div className="projectcard-container">
            <div className="project-title">{props.name}</div>
            <div className="langages-title">{props.langages.map((langage, i) => <i className={langage + " icon-langage"} key={i} ></i>)}</div>
            
        </div>
    )
}

export default ProjectCard;
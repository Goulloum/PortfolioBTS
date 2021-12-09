import {useLocation, Link} from 'react-router-dom';
import listReactFiles from 'list-react-files';



function ProjectDetails(){
    var location = useLocation();
    


    return(
        <div className="projectdetails-container">
            <div className="project-name">{location.state.name}</div>

            {location.state.documents.map((document, i) => <Link to={"/files/" + document} target="_blank" download key={i}><div key={i} className="click">{document}</div></Link>)}
            {location.state.productions.map((document, i) => <Link to={"/files/" + document} target="_blank" download key={i}><div key={i} className="click">{document}</div></Link>)}
            
        </div>
    );
}

export default ProjectDetails;
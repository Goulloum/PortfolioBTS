import {useLocation, Link} from 'react-router-dom';
import {useState} from 'react';




function ProjectDetails(){
    var location = useLocation();
    
    const [table, setTable] = useState("doc");


    return(
        <div className="projectdetails-container">
            <div className="header-projectdetails">
                <div className="project-name">{location.state.name}</div>
            </div>
            <div className="table-container">
                <div className="table-document-header">
                    <div className="title-document" style={{opacity: table == "doc"? "1": "0.7"}} onClick={() => setTable("doc")}>Documents</div>
                    <div className="title-document" onClick={() => setTable("prod")} style={{opacity: table == "prod"? "1": "0.7"}}>Productions</div>
                </div>
                <table className="table-document">

                    {table == "doc"? location.state.documents.map((document, i) => <tr key={i} style={{backgroundColor: i%2 == 0? "#cddae2": "#D5E7F2"}}><Link to={"/files/" + document} target="_blank" download key={i}><div key={i} className="click">{document}<span class="material-icons pdf-icon">picture_as_pdf</span></div></Link></tr>):
                    location.state.productions.map((document, i) => <tr key={i} style={{backgroundColor: i%2 == 0? "#cddae2": "#D5E7F2"}}><Link to={"/files/" + document} target="_blank" download key={i}><div key={i} className="click">{document}<span class="material-icons pdf-icon">picture_as_pdf</span></div></Link></tr>)
                    }

                    
                    
                </table>
            </div>

            
        </div>
    );
}

export default ProjectDetails;
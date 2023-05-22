import { Link } from "react-router-dom";
import { useState } from "react";
function TableauDocumentProd(props) {
    const [table, setTable] = useState("doc");
    return (
        <div className="table-container">
            <div className="table-document-header">
                <div className="title-document" style={{ opacity: table === "doc" ? "1" : "0.7" }} onClick={() => setTable("doc")}>
                    Documents
                </div>
                <div className="title-document" onClick={() => setTable("prod")} style={{ opacity: table === "prod" ? "1" : "0.7" }}>
                    Productions
                </div>
            </div>
            <table className="table-document">
                {table === "doc"
                    ? props.project.documents?.split(";").map((document, i) => (
                          <tr
                              key={i}
                              style={{
                                  backgroundColor: i % 2 === 0 ? "#cddae2" : "#D5E7F2",
                              }}>
                              <Link to={"/files/" + props.project.name + "/documents/" + document} target="_blank" key={i}>
                                  <div key={i} className="click">
                                      {document}
                                      <span className="material-icons pdf-icon">picture_as_pdf</span>
                                  </div>
                              </Link>
                          </tr>
                      ))
                    : props.project.productions?.split(";").map((document, i) => (
                          <tr
                              key={i}
                              style={{
                                  backgroundColor: i % 2 === 0 ? "#cddae2" : "#D5E7F2",
                              }}>
                              <Link to={"/files/" + props.project.name + "/productions/" + document} target="_blank" download key={i}>
                                  <div key={i} className="click">
                                      {document}
                                      <span className="material-icons pdf-icon">picture_as_pdf</span>
                                  </div>
                              </Link>
                          </tr>
                      ))}
            </table>
        </div>
    );
}

export default TableauDocumentProd;

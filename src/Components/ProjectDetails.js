import { useLocation } from "react-router-dom";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TableauDocumentProd from "./TableauDocumentProd";

function ProjectDetails() {
  var location = useLocation();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWIdth: true,
  };

  return (
    <div className="projectdetails-container">
      <div className="header-projectdetails">
        <div className="project-name">{location.state.name}</div>
      </div>
      <div className="top-project-detail">
        <TableauDocumentProd project={location.state} />
        <div className="project-description">{location.state.description}</div>
      </div>
      <div className="slider-container">
          <Slider {...settings} style={{width: "90%", marginLeft: '5%'}}>
            {location.state.img.map((img, i) => (
              <img
                key={i}
                src={"/files/" + location.state.name + "/imgs/" + img}
                alt=""
                className="project-img"
              />
            ))}
          </Slider>
        </div>
    </div>
  );
}

export default ProjectDetails;

import Ryan from "../img/ryanbg.jpg";
import { useEffect, useState } from "react";
import Timeline from "./Timeline";
import Xarrow from "react-xarrows";


function About() {
  

  const value_timeline = ["2020-07-07", "2020-12-21", "2021-09-01"];

  const description_timeline = [
    "Optention du baccalauréat S option SI",
    "CDD de 2 mois en tant qu'employé polyvant chez Géant Casino",
    "-Debut du BTS SIO <br/> -Début de contrat d'apprentissage chez Alize SFL",
  ];



  return (
    <div className="about-container">
      <div className="about-me-container">
        <div className="img-about-me-container">
          <img src={Ryan} alt="" className="about-me-picture" id="about-me-picture"/>
          <div className="img-about-me-text" id="img-about-me-text">mon faciès</div>
          <Xarrow
                start="img-about-me-text" //can be react ref
                end="about-me-picture"
                color="#000" //or an id
            />
        </div>
        <div className="about-me-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          earum quidem ut excepturi culpa quod nihil nam perferendis. Quisquam
          accusantium consequuntur deserunt nesciunt reprehenderit laborum
          maxime id debitis quis corrupti. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Porro harum fugiat nobis repudiandae
          deserunt rem maiores excepturi iste voluptatum. Nesciunt tempore quasi
          veniam. Perferendis sit praesentium omnis earum nobis sint!
        </div>
      </div>
      <div className="experience-container">
        <Timeline />
      </div>
      <div className="bts-sio-container"></div>
    </div>
  );
}

export default About;

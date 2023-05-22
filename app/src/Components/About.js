// import Ryan from "../img/ryanbg.jpg";
import Timeline from "./Timeline";
// import Xarrow from "react-xarrows";

function About() {
    return (
        <div className="about-container">
            <div className="about-me-container">
                {/* <div className="img-about-me-container">
                    <img src={Ryan} alt="" className="about-me-picture" id="about-me-picture" />
                    <div className="img-about-me-text" id="img-about-me-text">
                        mon faciès
                    </div>
                    <Xarrow
                        start="img-about-me-text" //can be react ref
                        end="about-me-picture"
                        color="#000" //or an id
                    />
                </div> */}
                <div className="about-me-text">
                    <span>Bonjour !</span> <br />
                    Je suis un apprenti developpeur web et je suis en formation dans un BTS SIO en alternance. Mon école est l'ISCIO et je suis
                    actuellement en option SLAM qui est l'option orientée pour les développeurs. Au terme de ce diplôme j'aimerais me lancer en tant
                    que développeur web.
                </div>
            </div>
            <div className="experience-container">
                <div className="main-title-about">Expériences</div>
                <Timeline />
            </div>
            {/* <div className="bts-sio-container">
        <div className="main-title-about">Qu'est-ce que le BTS SIO ?</div>
        <div className="bts-sio-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero
          exercitationem distinctio hic. Error similique, totam incidunt porro
          maiores atque molestias ab quaerat dolor harum quod, a debitis quas.
          Tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          maxime repudiandae facere, neque dolorem aliquam saepe ipsa accusamus
          ipsam nemo, corrupti aperiam numquam, sapiente repellendus amet quo
          facilis vero. Incidunt.
        </div>
        <div className="bts-sio-option-container">
          <div className="bts-sio-slam-container">
            <div className="bts-sio-slam-title">Option SLAM</div>
            <div className="bts-sio-slam">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              est quam voluptate ipsam cum maxime saepe hic id aut deleniti
              consequatur cumque amet dolor non, quos odio. Consequatur, quos
              voluptatem.
            </div>
          </div>
          <div className="bts-sio-sisr-container">
            <div className="bts-sio-sisr-title">Option SISR</div>
            <div className="bts-sio-sisr">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              magni fugiat placeat quia quibusdam illum possimus est obcaecati
              sit minus ut similique repellat facere omnis vel nihil, quae
              molestias nam!
            </div>
          </div>
        </div>
      </div> */}
        </div>
    );
}

export default About;

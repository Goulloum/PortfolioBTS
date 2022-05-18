import FeedlyLogo from "../img/Feedly_Logo.png";
import { useState } from "react";

function Veille() {
  const [sujetOpen, setSujetOpen] = useState();

  const handleOpenArticle = (article) => {
      if(sujetOpen !== article){
          setSujetOpen(article)
      }else if(sujetOpen == article){
          setSujetOpen()
      }
  }
  return (
    <div className="veille-container">
      <div className="main-title-veille">Ma veille informationnelle</div>
      <div className="outils-sources-veille-container">
        <div className="outils-veille-container">
          <div className="outils-veille-title">Outils de veille :</div>
          <ul>
            <li>
              FEEDLY
              {/* <img src={FeedlyLogo} alt="LogoFeedly" /> */}
              <div className="li-element-sub-text">
                Un aggregateur de flux RSS qui me permet de suivre certain sujet
                comme le développement web ou encore la sécurité web
              </div>
            </li>
            <li>
              Google Alert
              <div className="li-element-sub-text">
                Un outil permettant de suivre certain mots-clés directemment sur
                Google et permettant aussi de sortir un flux RSS au format JSON
                afin de créer son propre gestionnaire
              </div>
            </li>
          </ul>
        </div>
        <div className="sources-veille-container">
          <div className="sources-veille-title">Sources :</div>
          <ul>
            <li>
              Youtube
              <div className="li-element-sub-text">
                Suivi de certaines chaines comme{" "}
                <a href="https://www.youtube.com/channel/UCWedHS9qKebauVIK2J7383g">
                  Underscore
                </a>{" "}
                ou <a href="https://www.youtube.com/c/Fireship">Fireship</a> qui
                postent régulièrement du contenu par rapport à l'actualité des
                nouvelles technologies
              </div>
            </li>
            <li>
              Twitter
              <div className="li-element-sub-text">
                Réseau social permettant de suivre l'actualité mondiale, de
                suivre certain compte d'atualités spécialisés dans les nouvelles
                technologies
              </div>
            </li>
            <li>
              Reddit
              <div className="li-element-sub-text">
                Via son système de communautés, ce réseau social permet de
                recevoir beaucoup d'actualités centrées sur des sujets précis
                comme le développement web ou les technologies WEB3
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sujets-veille-container">
        <div className="sujets-veille-title">Sujets veillés</div>
        <ul>
          <li>
            <div className="top-section-sujet">
              <div className="btn-open-article" onClick={() => handleOpenArticle(1)}>
                <span class="material-icons" style={{fontSize: "4vh"}}>{sujetOpen == 1 ?"expand_more": "chevron_right"}</span>
              </div>
              <div className="sujet-element-title">WEB3</div>
            </div>
            <div className="articles-sujet-container" style={{display: sujetOpen == 1? "block": "none"}}>
              <ul>
                <li>
                  <a href="https://journalducoin.com/defi/google-revolution-web3-equipe-choc/">GOOGLE NE VEUT PAS RATER LA RÉVOLUTION DU WEB3</a>
                  <div className="li-element-sub-text">
                    Face au développement fulgurant du web 3, Google décide de monter une équipe pour ne pas être laisser dérrière par ses concurrent comme Amazon ou META avec le Meta-verse
                  </div>
                </li>

              </ul>
            </div>
          </li>
          <li>
            <div className="top-section-sujet">
              <div className="btn-open-article" onClick={() => handleOpenArticle(2)}>
                <span class="material-icons" style={{fontSize: "4vh"}}>{sujetOpen == 2 ?"expand_more": "chevron_right"}</span>
              </div>
              <div className="sujet-element-title">Cyber-securité</div>
            </div>
            <div className="articles-sujet-container" style={{display: sujetOpen == 2? "block": "none"}}>
              <ul>
                <li>
                  <a href="https://journalducoin.com/defi/google-revolution-web3-equipe-choc/">Introducing Microsoft Security Experts</a>
                  <div className="li-element-sub-text">
                    Microsoft dévoile une amélioration à son service Microsoft Security, Microsoft Security Expert
                  </div>
                </li>
                
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Veille;

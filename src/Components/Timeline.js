import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <div className="timeline-container">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1c418c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1c418c" }}
          date="01/09/2021 - maintenant"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">BTS SIO et Alize SFL</h3>
          <h4 className="vertical-timeline-element-subtitle">Orsay et Wissous</h4>
          <p>
            Début de l'apprentissage en BTS SIO et en alternance dans l'entreprise Alize SFL.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1c418c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1c418c" }}
          date="21/08/2020 - 21/02/2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Employé polyvalent Géant Casino</h3>
          <h4 className="vertical-timeline-element-subtitle">Saint-Michel sur Orge</h4>
          <p>
            CDD de deux mois en tant qu'employé polyvalent, première expérience du monde du travail.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1c418c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1c418c" }}
          date="07/07/2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Baccalauréat S option SI</h3>
          <h4 className="vertical-timeline-element-subtitle">Saint-Michel sur Orge</h4>
          <p>
              Optention du baccalauréat scientifique avec option sciences de l'ingénieur.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    
  />
        
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;

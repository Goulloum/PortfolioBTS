import CardHome from "./CardHome";
import { Link, Element } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import { useSpring, animated, easings } from "react-spring";

function HomePage() {


  const anim = useSpring({
    from: { y: -1000 },
    config: { duration: 600, easing: easings.easeOutQuad },
    loop: {
      y: 0,
    },
  });
  const anim2 = useSpring({
    from: { y: -1000 },
    delay: 100,
    config: { duration: 600, easing: easings.easeOutQuad },
    loop: {
      y: 0,
    },
  });

  return (
    <div className="homepage-container">
      
      <div className="banner">
        <div className="main-title-banner-container">
          <animated.div style={anim}>
            <div className="main-title-banner">Bienvenue</div>
          </animated.div>
        </div>

        <div className="sub-title-banner-container">
          <animated.div style={anim2}>
            <div className="sub-title-banner">
              Portfolio de Mathieu GUILLEMIN
            </div>
          </animated.div>
        </div>

        <Link smooth={true} to="/About">
          <div className="arrow-banner">
            <span className="material-icons">expand_more</span>
          </div>
        </Link>
      </div>
      
      {/* <Element name="HomeNavBar">
        <div className="page-selector">
          {cardData.map((item, i) => (
            <LinkRoute to={"/" + item.link}>
              <a href={"/" + item.link} key={i}>
              <CardHome
                className="cardhome"
                key={i}
                name={item.name}
                img={item.img}
              />
              <div className={"cloud-parent cloud" + i}>
                <div
                  className={"cloud-nav-bar"}
                  key={i}
                  style={{ transform: "translateX(" + i * 10 + "%)" }}
                >
                  <div className="text-cloud-container">
                  {item.name}
                  </div>
                  
                </div>
              </div>
            </LinkRoute>

            //  </a>
          ))}
        </div>
      </Element> */}
    </div>
  );
}

export default HomePage;

import CardHome from "./CardHome";
import $ from 'jquery';
import {useEffect} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Link} from "react-router-dom";




function HomePage(){

    
    useEffect(() => {
        $(document).ready(function(){
            $("html, body").animate({scrollTop: '0'}, 'slow');
        })


        $('.arrow-banner span').click(function(){
            $("html, body").animate({scrollTop: '1000'}, 'slow');
        })
    }, [])

    const cardData = [
        {
            name: "Qui suis-je ?",
            link: "About"
        },
        {
            name: "Projets",
            link: "Projects"
        },
        {
            name: "Compétences",
            link: "Skills"
        },
        {
            name: "Veille technologique",
            link: "Veille"
        },
        {
            name: "Contact",
            link: "Contact"
        }
    ];

    return(
        <div className="homepage-container">
            <div className="banner">
                <div className="main-title-banner">Bienvenue</div>
                <div className="sub-title-banner">Portfolio de Mathieu GUILLEMIN</div>
                <div className="arrow-banner"><span className="material-icons">expand_more</span></div>
            </div>
            <div className="page-selector">

                {cardData.map((item, i) => <Link to={"/" + item.link} key={i}><CardHome className="cardhome" key={i} name={item.name} img={item.img}/></Link>)}
                



            </div>
        </div>
    );

    
}

export default HomePage;
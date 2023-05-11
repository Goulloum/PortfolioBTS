import { useState, useLayoutEffect, useRef } from "react";
import { useSpring, animated, easings } from "react-spring";

function Veille() {
    const [sujetOpen, setSujetOpen] = useState();
    const domRef = useRef();

    const [isVisible, setVisible] = useState(false);

    const handleOpenArticle = (article) => {
        if (sujetOpen !== article) {
            setSujetOpen(article);
        } else if (sujetOpen === article) {
            setSujetOpen();
        }
    };

    const anim = useSpring({
        from: { x: -1000 },
        config: { duration: 600, easing: easings.easeOutQuad },
        loop: {
            x: isVisible ? 0 : -1000,
        },
    });

    useLayoutEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // In your case there's only one element to observe:

            setVisible(entries[0].isIntersecting);
        });

        observer.observe(domRef.current);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div className="veille-container">
            <div className="main-title-veille">Ma veille informationnelle</div>
            <div className="outils-sources-veille-container">
                <div className="outils-veille-container" ref={domRef}>
                    <div className="outils-veille-title">Outils de veille :</div>
                    <ul>
                        <animated.div style={anim}>
                            <li>
                                FEEDLY
                                {/* <img src={FeedlyLogo} alt="LogoFeedly" /> */}
                                <div className="li-element-sub-text">
                                    Un aggregateur de flux RSS qui me permet de suivre certain sujet comme le développement web ou encore la sécurité
                                    web
                                </div>
                            </li>
                        </animated.div>
                        <animated.div style={anim}>
                            <li>
                                Notion
                                <div className="li-element-sub-text">
                                    Un outil permettant d'organiser les articles me semblant important par rapport aux thèmes de ma veilles
                                    informationnelle afin de pouvoir les retrouver si besoin.
                                </div>
                            </li>
                        </animated.div>
                    </ul>
                </div>
                <div className="sources-veille-container">
                    <div className="sources-veille-title">Sources :</div>
                    <ul>
                        <animated.div style={anim}>
                            <li>
                                Youtube
                                <div className="li-element-sub-text">
                                    Suivi de certaines chaines comme <a href="https://www.youtube.com/channel/UCWedHS9qKebauVIK2J7383g">Underscore</a>{" "}
                                    ou <a href="https://www.youtube.com/c/Fireship">Fireship</a> qui postent régulièrement du contenu par rapport à
                                    l'actualité des nouvelles technologies
                                </div>
                            </li>
                        </animated.div>
                        <animated.div style={anim}>
                            <li>
                                Twitter
                                <div className="li-element-sub-text">
                                    Réseau social permettant de suivre l'actualité mondiale, de suivre certain compte d'atualités spécialisés dans les
                                    nouvelles technologies
                                </div>
                            </li>
                        </animated.div>
                        <animated.div style={anim}>
                            <li>
                                Reddit
                                <div className="li-element-sub-text">
                                    Via son système de communautés, ce réseau social permet de recevoir beaucoup d'actualités centrées sur des sujets
                                    précis comme le développement web ou les technologies WEB3
                                </div>
                            </li>
                        </animated.div>
                    </ul>
                </div>
            </div>
            <div className="sujets-veille-container">
                <div className="sujets-veille-title">Sujets veillés</div>
                <ul>
                    <li>
                        <div className="top-section-sujet">
                            <div className="btn-open-article" onClick={() => handleOpenArticle(1)}>
                                <span class="material-icons" style={{ fontSize: "4vh" }}>
                                    {sujetOpen === 1 ? "expand_more" : "chevron_right"}
                                </span>
                            </div>
                            <div className="sujet-element-title">IA dans le développement</div>
                        </div>
                        <div className="articles-sujet-container" style={{ display: sujetOpen === 1 ? "block" : "none" }}>
                            <ul>
                                <li>
                                    <a href="https://www.blogdumoderateur.com/google-devoile-bard/">Google dévoile Bard</a>
                                    <div className="li-element-sub-text">
                                        En réponse à l'assistant artificiel créé par OpenAI, Goodgle décide de sortir sa propre IA en développement
                                        depuis des années nommée Bard.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="top-section-sujet">
                            <div className="btn-open-article" onClick={() => handleOpenArticle(2)}>
                                <span class="material-icons" style={{ fontSize: "4vh" }}>
                                    {sujetOpen === 2 ? "expand_more" : "chevron_right"}
                                </span>
                            </div>
                            <div className="sujet-element-title">Technologies utilisées</div>
                        </div>
                        <div className="articles-sujet-container" style={{ display: sujetOpen === 2 ? "block" : "none" }}>
                            <ul>
                                <li>
                                    <a href="https://php.watch/articles/PHP-8.2">PHP 8.2</a>
                                    <div className="li-element-sub-text">
                                        PHP lance sa version 8.2 apportant de nouveaux fonctionnement au langages.
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

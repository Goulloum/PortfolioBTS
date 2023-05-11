import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import axios from "axios";
import { useSpring, animated, easings } from "react-spring";

function Projects() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState();
    const domRef = useRef();

    const [isVisible, setVisible] = useState(false);

    //ANIM

    const anim = useSpring({
        from: { scale: 0 },
        config: { duration: 600, easing: easings.easeOutQuad },
        loop: {
            scale: isVisible ? 1 : 0,
        },
        reset: isVisible,
    });

    //OBSERVER

    useLayoutEffect(() => {
        if (!loading) {
            const observer = new IntersectionObserver((entries) => {
                // In your case there's only one element to observe:

                setVisible(entries[0].isIntersecting);
            });

            observer.observe(domRef.current);

            // eslint-disable-next-line react-hooks/exhaustive-deps
            return () => observer.unobserve(domRef.current);
        }
    }, [loading]);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8080/api/situation/getAllSituations",
        }).then((data) => {
            setProjects(data.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="loading">Chargement en cours ...</div>;
    } else {
        return (
            <div className="projects-container">
                <animated.div>
                    <div className="project-container-title">Projets</div>
                </animated.div>
                <div className="grid-container-project" ref={domRef}>
                    {projects.map((project, i) => (
                        <Link key={project.id} to={{ pathname: "/Details", state: project }}>
                            <animated.div style={anim}>
                                <ProjectCard
                                    key={project.id}
                                    name={project.name}
                                    desc={project.description}
                                    langages={project.langages}
                                    img={project.img}
                                    date={project.date}
                                />
                            </animated.div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;

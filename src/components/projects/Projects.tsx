import './Projects.scss';
import { AiOutlineLink } from "@react-icons/all-files/ai/AiOutlineLink";
import * as projectData from '../../data/data';

function Projects() {
    const project = projectData.getAllProjects();
  return (
    <>
             <section className="section-projects" id="projects">
                <div className="u-center-text">
                    <h2 className="heading-secondary">
                        Projects
                    </h2>
                </div>
                    <div className="col-1-of-3">
                        {project.map(projectData => (
                        <div key={projectData.id} className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1" >
                                    <div className='image' style={{ backgroundImage:  `url(${projectData.img})`, WebkitBackgroundSize: "cover"}}></div>
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">{projectData.title}</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>HTML <div className="html">{projectData.html}</div></li>
                                        <li>SASS <div className="css">{projectData.css}</div></li>
                                        <li>TYPESCRIPT <div className="type">{projectData.typescript}</div></li>
                                        <li>HANDLEBARS <div className="handle">{projectData.handlebars}</div></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__github-box">
                                        <p className="card__github-git">View on GitHub</p>
                                    </div>
                                    <a href={projectData.github_url} className="btn btn--white"><AiOutlineLink /></a>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
            </section>
    </>
  )
}

export default Projects

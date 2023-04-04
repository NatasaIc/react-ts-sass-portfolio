import './Projects.scss';

function Projects() {
  return (
    <>
    <section className="section-projects">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Projects
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">Webshop</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>HTML</li>
                                        <li>SCSS</li>
                                        <li>TYPESCRIPT</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                     <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <a href="https://github.com/sergejsvoronins/webbshop.git" className="btn btn--white">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">Todo List</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>HTML</li>
                                        <li>SCSS</li>
                                        <li>REACT</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                   <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                    <a href="https://github.com/sergejsvoronins/webbshop.git" className="btn btn--white">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">Restaurant</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>HTML</li>
                                        <li>SCSS</li>
                                        <li>REACT</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                    <a href="https://github.com/sergejsvoronins/webbshop.git" className="btn btn--white">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Projects

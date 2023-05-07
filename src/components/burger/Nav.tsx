import "./Nav.scss";

const Nav = () => {

  return (
    <div className="navigation">
            {/* <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div> */}

            <nav className="nav">
                <ul className="nav__list">
                <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                </ul>
            </nav>
        </div>
  )
}

export default Nav

import "./Header.scss";
import Social from "./Social";

function Header() {
  return (
    <header className="header" id="home">
    <Social />
    <div className="header__img"></div>
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Natasa Iconomou</span>
                <span className="heading-primary--sub"> I'm a Software developer student.</span>
            </h1>
            <a href="https://github.com/NatasaIc/fullstack-applikation-express.git" className="btn btn--dark">Download CV</a>
        </div>
    </header>
  )
}

export default Header

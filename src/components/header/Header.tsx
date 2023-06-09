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
            <a href="https://drive.google.com/file/d/11IcRsIGlyRo0OFrTMNq3NKsKHtp1brlf/view?usp=sharing" className="btn btn--dark">View CV</a>
        </div>
    </header>
  )
}

export default Header

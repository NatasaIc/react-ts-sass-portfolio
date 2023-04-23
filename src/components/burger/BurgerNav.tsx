import { Link } from 'react-router-dom';
import './BurgerNav.scss';

function BurgerNav() {
  return (
    <>
    <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            
            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                <li className='navigation__item'><Link to='/about' className='navigation__link'>About me</Link></li>
                <li className='navigation__item'><Link to='/projects' className='navigation__link'>Projects</Link></li>
                <li className='navigation__item'><Link to='/contact' className='navigation__link'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default BurgerNav

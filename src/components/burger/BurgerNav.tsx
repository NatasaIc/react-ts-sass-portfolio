import { Link } from 'react-router-dom';
import { useState } from 'react';
import './BurgerNav.scss';

function BurgerNav() {
  const [toggleMenu, setShowMenu] = useState(false);

  return (
    <>
    <div className='burger'>
      <input type='checkbox' className='burger__checkbox' id='bur-toggle' />

      <label htmlFor='bur-toggle' className='burger__button'>
        <span className='burger__icon'>&nbsp;</span>
      </label>

      <div className='burger__background'>&nbsp;</div>

      <nav className='burger__nav'>
          <ul className='burger__list'>
            <li className='burger__item'><Link to='' className='burger__link'>About me</Link></li>
            <li className='burger__item'><Link to='' className='burger__link'>Projects</Link></li>
            <li className='burger__item'><Link to='' className='burger__link'>Contact</Link></li>
          </ul>
      </nav>
    </div>
    </>
  )
}

export default BurgerNav

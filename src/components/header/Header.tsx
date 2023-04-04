import React from 'react'
import './Header.scss';
import BurgerNav from '../burger/BurgerNav';
import Social from '../socials/Social';

function Header() {
  return (
    <>
    <header className='header'>
    <Social />
    <div className="header__img"></div>
        <div className='header__text-box'>
            <h1 className='heading-primary'>
                <span className='heading-primary--main'>Natasa Iconomou</span>
                <span className='heading-primary--sub'> I'm a creative developer based in Stockholm,<br />
                and I'm very passionate and <br /> dedicated to my work.</span>
            </h1>
        </div>
    </header>
    </>
  )
}

export default Header

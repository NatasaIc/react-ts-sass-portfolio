import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Social() {
  return (
    <div className="header__social">
      <Link 
      to='/contact'>
      <FaTelegramPlane className='header__social-icon'/>
      </Link>

      <Link
        to="https://github.com/NatasaIc"
        className="header__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </Link>

      <Link
        to="https://www.linkedin.com/in/natasa-iconomou-066b6125a/"
        className="header__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin />
      </Link>
    </div>
  );
}

export default Social;
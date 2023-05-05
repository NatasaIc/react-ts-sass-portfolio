import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

function Social() {
  return (
    <div className="header__social">
      <a
      href='#contact'>
      <FaTelegramPlane className='header__social-icon'/>
      </a>

      <a
        href="https://github.com/NatasaIc"
        className="header__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/natasa-iconomou-066b6125a/"
        className="header__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin />
      </a>
    </div>
  );
}

export default Social;
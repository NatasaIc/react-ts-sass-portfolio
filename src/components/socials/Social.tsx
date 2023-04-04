import React from "react";
import { AiFillGithub, AiFillInstagram, AiOutlineLinkedin } from 'react-icons/ai';

function Social() {
  return (
    <div className="header__social">
      <a
        href="https://github.com/NatasaIc"
        className="header__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram />
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
        href="https://github.com/NatasaIc"
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
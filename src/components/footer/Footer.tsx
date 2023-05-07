
import './Footer.scss';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
      <footer className="footer" id="footer">
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__icons">
                        <p className="paragraph p-footer">Web Developer Student</p>
                    <div className="footer__icons">
                    <Link
                        to="https://github.com/NatasaIc"
                        className="footer__icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillGithub />
                    </Link>

                    <Link
                        to="https://www.linkedin.com/in/natasa-iconomou-066b6125a/"
                        className="footer__icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiOutlineLinkedin />
                    </Link>
                    </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="email">
                    <p><strong>contact:</strong> iconomou.ng@gmail.com</p>
                    </div>
                    <p className="footer__copyright">
                    &copy; <a href="#about" className="footer__link">Natasa Iconomou</a> 2023
                    </p>
                </div>
            </div>
        </footer>
  )
}

export default Footer

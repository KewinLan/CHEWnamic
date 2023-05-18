import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <>
      <div className="bgFooter">
        <div className='footer-logo'>
          <nav>
            © 2023
            <div className="bgFooterLogo">
              <Link to="/" className='logo-text1'>
                CHEW
              </Link>
              <Link to="/" className='logo-text2'>
                namic
              </Link>
              All Rights Reserved
            </div>
          </nav>
        </div>
      


        <div className='footer-links'>
          <div className="terms-link">
            <Link to="/terms">
              Terms of Use
            </Link>
          </div>
          <div className="privacy-link">
            <Link to="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="copyright">
          Copyright Pulpy Seed, 2023
        </div>
      </div>
    </>
  );
};
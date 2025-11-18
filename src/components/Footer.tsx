import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <h3 className="footer__brand-name">Tobias Freire</h3>
              <p className="footer__brand-tagline">
                Crafting digital experiences with passion
              </p>
            </div>

            <div className="footer__links">
              <div className="footer__link-group">
                <h4 className="footer__link-title">Navigation</h4>
                <div className="footer__link-list">
                  <button 
                    className="footer__link"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    About
                  </button>
                  <button 
                    className="footer__link"
                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Skills
                  </button>
                  <button 
                    className="footer__link"
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Experience
                  </button>
                  <button 
                    className="footer__link"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="footer__link-group">
                <h4 className="footer__link-title">Connect</h4>
                <div className="footer__link-list">
                  <a 
                    href="https://github.com/Tobias-Freire" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/tobias-freire" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:tobiasfreire.dev@gmail.com"
                    className="footer__link"
                  >
                    Email
                  </a>
                </div>
              </div>

              <div className="footer__link-group">
                <h4 className="footer__link-title">Academic</h4>
                <div className="footer__link-list">
                  <span className="footer__text">Federal University of Paraíba</span>
                  <span className="footer__text">Bachelor in Computer Science</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copy">
              <p className="footer__copy-text">
                © {currentYear} Tobias Freire. All rights reserved.
              </p>
            </div>

            <div className="footer__tech">
              <span className="footer__tech-text">
                Built with React + TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
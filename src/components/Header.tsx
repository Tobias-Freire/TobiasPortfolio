import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import Button from './ui/Button';
import './Header.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <span className="header__logo-text">Tobias Freire</span>
            <span className="header__logo-subtitle">Software Enginner & CS student</span>
          </div>
          
          <nav className="header__nav">
            <button 
              className="header__nav-link" 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className="header__nav-link" 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button 
              className="header__nav-link" 
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </button>
            <button 
              className="header__nav-link" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>

          <div className="header__actions">
            <div className="header__social">
              <a 
                href="https://github.com/Tobias-Freire" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header__social-link"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/tobias-freire" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header__social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:tobiasfreire005@gmail.com"
                className="header__social-link"
                aria-label="Email"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:tobiasfreire005@gmail.com";
                }}
              >
                <FaEnvelope size={20} />
              </a>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              icon={<FaDownload size={16} />}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/tobias_freire_en.pdf';
                link.download = 'tobias_freire_en.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
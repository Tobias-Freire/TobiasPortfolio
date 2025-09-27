import React from 'react';
import { FaArrowDown, FaCode, FaStar } from 'react-icons/fa';
import Button from './ui/Button';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__grid"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__greeting">
              <FaStar className="hero__greeting-icon" size={20} />
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero__title">
              <span className="hero__title-main">Tobias Freire</span>
              <span className="hero__title-sub">Technology entusiast</span>
            </h1>
            
            <p className="hero__description">
              Computer Science student at Federal University of Paraíba (UFPB), passionate about creating 
              innovative solutions and building exceptional digital experiences. 
              Currently focused on backend development with modern technologies.
            </p>
            
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">20</span>
                <span className="hero__stat-label">Years Old</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">5th</span>
                <span className="hero__stat-label">University Semester</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">2+</span>
                <span className="hero__stat-label">Years Experience</span>
              </div>
            </div>
            
            <div className="hero__actions">
              <Button 
                variant="primary" 
                size="lg"
                icon={<FaCode size={20} />}
                onClick={scrollToAbout}
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="hero__image">
            <div className="hero__image-container">
              <img 
                src="/TobiasPortfolio/me.jpg" 
                alt="Tobias Freire" 
                className="hero__photo"
              />
              <div className="hero__image-bg"></div>
            </div>
            
            <div className="hero__badges">
              <img src="/TobiasPortfolio/brazil.png" alt="Brazil" className="hero__badge" />
              <img src="/TobiasPortfolio/paraiba.png" alt="Paraíba" className="hero__badge" />
              <img src="/TobiasPortfolio/UFPB-Brasao.png" alt="UFPB" className="hero__badge" />
            </div>
          </div>
        </div>
        
        <div className="hero__scroll">
          <button className="hero__scroll-btn" onClick={scrollToAbout}>
            <FaArrowDown size={20} />
            <span>Scroll to explore</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
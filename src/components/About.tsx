import React from 'react';
import Card from './ui/Card';
import './About.css';

const About: React.FC = () => {
  const facts = [
    {
      label: "Age",
      value: "20 years old"
    },
    {
      label: "Location",
      value: "Paraíba, Brazil"
    },
    {
      label: "Education",
      value: "Computer Science at UFPB"
    },
    {
      label: "Current Semester",
      value: "5th Semester"
    },
    {
      label: "Focus",
      value: "Backend Development"
    },
    {
      label: "Goal",
      value: "Backend Software Engineer & Solutions Architect"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__header">
          <h2 className="about__title">About Me</h2>
          <p className="about__subtitle">
            Get to know more about my journey and aspirations
          </p>
        </div>

        <div className="about__content">
          <Card variant="glass" className="about__story">
            <div className="about__story-content">
              <h3 className="about__story-title">My Journey</h3>
              <div className="about__story-text">
                <p>
                  Hello! My name is <strong>Tobias Freire</strong>, and I'm passionate about 
                  technology and software development. I'm currently pursuing my Bachelor in Computer Science 
                  degree at the Federal University of Paraíba (UFPB).
                </p>
                
                <p>
                  I discovered my love for programming when I was around 17 years old, and it has 
                  been an incredible journey of learning and growth ever since. The field of 
                  Information Technology never ceases to amaze me, constantly opening new 
                  opportunities for me to grow as a learner, professional, and human being.
                </p>

                <p>
                  I'm proudly Brazilian, born and raised in the beautiful state of Paraíba. 
                  My goal is to become a skilled Software Engineer, creating innovative solutions 
                  that make a positive impact on people's lives.
                </p>

                <p>
                  Currently, I'm focused on backend development, working with technologies
                  like Java, Spring Boot, React, TypeScript, Node.js, LLMs and databases. I enjoy 
                  building applications, always keeping user experience and code quality as
                  top priorities.
                </p>
              </div>
            </div>
          </Card>

          <div className="about__facts">
            <h3 className="about__facts-title">Quick Facts</h3>
            <div className="about__facts-grid">
              {facts.map((fact, index) => (
                <Card key={index} variant="default" className="about__fact">
                  <div className="about__fact-content">
                    <span className="about__fact-label">{fact.label}</span>
                    <span className="about__fact-value">{fact.value}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="about__values">
          <Card variant="gradient" className="about__values-card">
            <h3 className="about__values-title">What Drives Me</h3>
            <div className="about__values-grid">
              <div className="about__value">
                <div className="about__value-icon">🚀</div>
                <div className="about__value-content">
                  <h4>Innovation</h4>
                  <p>Always seeking creative solutions to complex problems</p>
                </div>
              </div>
              
              <div className="about__value">
                <div className="about__value-icon">📚</div>
                <div className="about__value-content">
                  <h4>Continuous Learning</h4>
                  <p>Committed to staying updated with latest technologies</p>
                </div>
              </div>
              
              <div className="about__value">
                <div className="about__value-icon">🤝</div>
                <div className="about__value-content">
                  <h4>Collaboration</h4>
                  <p>Believing in the power of teamwork and knowledge sharing</p>
                </div>
              </div>
              
              <div className="about__value">
                <div className="about__value-icon">💡</div>
                <div className="about__value-content">
                  <h4>Problem Solving</h4>
                  <p>Passionate about turning challenges into opportunities</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  skills: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "CortechX",
      position: "Active Member",
      startDate: "Jul 2025",
      endDate: "Present",
      location: "João Pessoa, PB",
      description:
        "Research and development in Human-Computer Interaction, focusing on AI, Machine Learning, LLMs and emerging technologies at UFPB.",
      skills: ["Python", "Django", "LLMs", "AI/ML"],
    },
    {
      company: "Synchro - Tax Solution",
      position: "Software Engineering Intern",
      startDate: "May 2025",
      endDate: "Present",
      location: "Remote",
      description:
        "Developing tax solutions with Java, Spring Boot, React and TypeScript in an agile, remote environment.",
      skills: ["Java", "Spring Boot", "TypeScript", "React", "Relational Databases", "Agile", "Docker"],
    },
    {
      company: "INOVATEC-JP",
      position: "Software Development Intern",
      startDate: "Jul 2024",
      endDate: "Jun 2025",
      location: "João Pessoa, PB",
      description:
        "Created impactful systems for João Pessoa City Hall, including humanitarian aid management, price research automation, and high-performance report generation using Oracle APEX, Spring Boot, and Docker.",
      skills: ["Oracle APEX", "Oracle Database", "Spring Boot", "RESTful APIs", "Jasper Reports", "Docker", "Postman"],
    },
    {
      company: "LUMO Laboratory",
      position: "Fullstack Intern",
      startDate: "Mar 2024",
      endDate: "Jun 2024",
      location: "João Pessoa, PB",
      description:
        "Led frontend team and developed new features for SisEnex, supporting 700+ research projects at UFPB. Enhanced legacy code and documentation using React, Node, and Docker.",
      skills: ["Docker", "React", "Node", "TypeScript", "PostgreSQL", "GraphQL", "Scrum"],
    },
  ];

  const formatDate = (date: string) => {
    return date === "Present" ? date : date;
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience__header">
          <h2 className="experience__title">Work Experience</h2>
          <p className="experience__subtitle">
            My professional journey and the projects I've contributed to
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__timeline-marker">
                <div className="experience__timeline-dot"></div>
                {index < experiences.length - 1 && (
                  <div className="experience__timeline-line"></div>
                )}
              </div>

              <Card className="experience__card">
                <div className="experience__header-info">
                  <div className="experience__main-info">
                    <h3 className="experience__position">{exp.position}</h3>
                    <div className="experience__company">
                      <span className="experience__company-name">{exp.company}</span>
                    </div>
                  </div>

                  <div className="experience__meta">
                    <div className="experience__date">
                      <FaCalendar size={16} />
                      <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                    </div>
                    
                    <div className="experience__location">
                      <FaMapMarkerAlt size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="experience__description">
                  {exp.description}
                </p>

                <div className="experience__skills">
                  <h4 className="experience__skills-title">Technologies Used:</h4>
                  <div className="experience__skills-list">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant={skillIndex % 2 === 0 ? 'accent' : 'blue'}
                        size="sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <Card variant="gradient" className="experience__summary">
          <div className="experience__summary-content">
            <h3 className="experience__summary-title">What I've Learned</h3>
            <div className="experience__summary-grid">
              <div className="experience__learning">
                <div className="experience__learning-icon">💻</div>
                <div>
                  <h4>Technical Skills</h4>
                  <p>Gained experience in full-stack development, database management, and modern web technologies.</p>
                </div>
              </div>
              
              <div className="experience__learning">
                <div className="experience__learning-icon">👥</div>
                <div>
                  <h4>Teamwork</h4>
                  <p>Collaborated with diverse teams in academic and professional environments.</p>
                </div>
              </div>
              
              <div className="experience__learning">
                <div className="experience__learning-icon">🎯</div>
                <div>
                  <h4>Problem Solving</h4>
                  <p>Developed strong analytical skills and ability to tackle complex challenges.</p>
                </div>
              </div>
              
              <div className="experience__learning">
                <div className="experience__learning-icon">🚀</div>
                <div>
                  <h4>Professional Growth</h4>
                  <p>Learned to adapt to different work environments and deliver quality results.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
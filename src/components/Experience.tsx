import React from 'react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

interface Position {
  title: string;
  startDate: string;
  endDate: string;
  description: string | React.ReactNode;  // Permite string ou JSX
  skills: string[];
}

interface ExperienceItem {
  company: string;
  location: string;
  positions: Position[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "CortechX",
      location: "João Pessoa, PB",
      positions: [
        {
          title: "Team Leader",
          startDate: "Nov 2025",
          endDate: "Present",
          description:
            "Leading the web development team.",
          skills: ["Leadership", "Project Management", "Communication"],
        },
        {
          title: "Active Member",
          startDate: "Jul 2025",
          endDate: "Present",
          description:
            "CortechX is the Human-Computer Interaction Academi League at UFPB, focused on research and development, and using diverse technologies to make user digital experiences more intuitive and engaging.",
          skills: ["Python", "Django", "LLMs", "AI/ML"],
        }
      ]
    },
    {
      company: "Synchro - Tax Solution",
      location: "Remote",
      positions: [
        {
          title: "Software Engineering Intern",
          startDate: "May 2025",
          endDate: "Present",
          description:
            "Developing tax solutions with Java, Spring Boot, React and TypeScript in an agile, remote environment.",
          skills: ["Java", "Spring Boot", "TypeScript", "React", "Relational Databases", "Agile", "Docker"],
        }
      ]
    },
    {
      company: "INOVATEC-JP",
      location: "João Pessoa, PB",
      positions: [
        {
          title: "Software Development Intern",
          startDate: "Jul 2024",
          endDate: "Jun 2025",
          description: (
            <>
              Created impactful systems for João Pessoa City Hall, including humanitarian aid management, price research automation, and high-performance report generation using Oracle APEX, Java, Spring Boot, Oracle database, and Docker.
              <br />
              <a 
                href="https://blogs.oracle.com/apex/joao-pessoa-city-hall-revolutionizes-public-services-with-apex" 
                target="_blank"
                rel="noopener noreferrer"
                className="experience__link"
              >
                See this Oracle international blog about these projects.
              </a>
            </>
          ),
          skills: ["Oracle APEX", "Oracle Database", "Java", "Spring Boot", "RESTful APIs", "Jasper Reports", "Docker", "Postman"],
        }
      ]
    },
    {
      company: "LUMO Laboratory",
      location: "João Pessoa, PB",
      positions: [
        {
          title: "Fullstack Intern",
          startDate: "Mar 2024",
          endDate: "Jun 2024",
          description:
            "Led frontend team and developed new features for SisEnex, supporting 700+ research projects at UFPB. Enhanced legacy code and documentation using React, Node, and Docker.",
          skills: ["Docker", "React", "Node", "TypeScript", "PostgreSQL", "GraphQL", "Scrum"],
        }
      ]
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
                <div className="experience__company-header">
                  <h3 className="experience__company-name">{exp.company}</h3>
                  <div className="experience__location">
                    <FaMapMarkerAlt size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="experience__positions">
                  {exp.positions.map((position, posIndex) => (
                    <div key={posIndex} className={`experience__position-item ${posIndex > 0 ? 'experience__position-item--secondary' : ''}`}>
                      <div className="experience__position-header">
                        <h4 className="experience__position-title">{position.title}</h4>
                        <div className="experience__date">
                          <FaCalendar size={14} />
                          <span>{formatDate(position.startDate)} - {formatDate(position.endDate)}</span>
                        </div>
                      </div>

                      <p className="experience__description">
                        {position.description}
                      </p>

                      <div className="experience__skills">
                        <h5 className="experience__skills-title">Technologies Used:</h5>
                        <div className="experience__skills-list">
                          {position.skills.map((skill, skillIndex) => (
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
                    </div>
                  ))}
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
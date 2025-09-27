import React from 'react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import './Skills.css';

interface Skill {
  name: string;
  icon: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: '/TobiasPortfolio/habilities-icons/react.png', level: 'Intermediate', category: 'Frontend' },
    { name: 'TypeScript', icon: '/TobiasPortfolio/habilities-icons/typescript.png', level: 'Intermediate', category: 'Frontend' },
    { name: 'Next.js', icon: '/TobiasPortfolio/habilities-icons/nextjs-icon.png', level: 'Intermediate', category: 'Frontend' },
    
    // Backend
    { name: 'Java', icon: '/TobiasPortfolio/habilities-icons/java.png', level: 'Advanced', category: 'Backend' },
    { name: 'Spring', icon: '/TobiasPortfolio/habilities-icons/spring.png', level: 'Intermediate', category: 'Backend' },
    { name: 'Python', icon: '/TobiasPortfolio/habilities-icons/python.png', level: 'Intermediate', category: 'Backend' },
    { name: 'FastAPI', icon: '/TobiasPortfolio/habilities-icons/fastapi.png', level: 'Intermediate', category: 'Backend' },
    { name: 'Django', icon: '/TobiasPortfolio/habilities-icons/django.png', level: 'Beginner', category: 'Backend' },
    
    // Database
    { name: 'PostgreSQL', icon: '/TobiasPortfolio/habilities-icons/postgres.png', level: 'Intermediate', category: 'Database' },
    { name: 'Oracle', icon: '/TobiasPortfolio/habilities-icons/oracle.png', level: 'Intermediate', category: 'Database' },
    { name: 'MongoDB', icon: '/TobiasPortfolio/habilities-icons/mongodb.png', level: 'Beginner', category: 'Database' },
    
    // Tools
    { name: 'Git', icon: '/TobiasPortfolio/habilities-icons/git.png', level: 'Advanced', category: 'Tools' },
    { name: 'GitHub', icon: '/TobiasPortfolio/habilities-icons/github.png', level: 'Advanced', category: 'Tools' },
    { name: 'Linux', icon: '/TobiasPortfolio/habilities-icons/linux.png', level: 'Intermediate', category: 'Tools' },
    
    // Other
    { name: 'Agile', icon: '/TobiasPortfolio/habilities-icons/agile.png', level: 'Intermediate', category: 'Other' },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'warning';
      case 'Intermediate': return 'blue';
      case 'Advanced': return 'accent';
      default: return 'default';
    }
  };

  const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Other'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <h2 className="skills__title">Skills & Technologies</h2>
          <p className="skills__subtitle">
            Technologies I work with and tools I use to build amazing applications
          </p>
        </div>

        <div className="skills__content">
          {categories.map((category) => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;

            return (
              <Card key={category} className="skills__category">
                <div className="skills__category-header">
                  <h3 className="skills__category-title">{category}</h3>
                  <span className="skills__category-count">
                    {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>

                <div className="skills__grid">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="skill">
                      <div className="skill__icon">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          onError={(e) => {
                            // Fallback for missing icons
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="skill__info">
                        <span className="skill__name">{skill.name}</span>
                        <Badge 
                          variant={getLevelColor(skill.level) as any}
                          size="sm"
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <Card variant="gradient" className="skills__learning">
          <div className="skills__learning-content">
            <h3 className="skills__learning-title">Currently Learning</h3>
            <p className="skills__learning-description">
              I'm always expanding my skillset. Here are some technologies I'm currently exploring:
            </p>
            <div className="skills__learning-list">
              <Badge variant="purple">AWS</Badge>
              <Badge variant="purple">LLMs</Badge>
              <Badge variant="purple">Messaging Systems (Kafka & RabbitMQ)</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
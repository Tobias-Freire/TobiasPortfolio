import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  const [emailCopiedIndex, setEmailCopiedIndex] = useState<number | null>(null);
  const handleEmailClick = (event: React.MouseEvent, idx: number) => {
    event.preventDefault();
    const email = 'tobiasfreire005@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        setEmailCopiedIndex(idx);
        setTimeout(() => setEmailCopiedIndex(null), 2000);
      })
      .catch(() => {
        prompt('Copy the email:', email);
      });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      label: 'Email',
      value: 'tobiasfreire005@gmail.com',
      href: 'mailto:tobiasfreire005@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      value: '@Tobias-Freire',
      href: 'https://github.com/Tobias-Freire',
      description: 'Check out my repositories'
    },
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'Tobias Freire',
      href: 'https://linkedin.com/in/tobias-freire',
      description: 'Connect with me professionally'
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header">
          <h2 className="contact__title">Let's Work Together</h2>
          <p className="contact__subtitle">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and create something amazing!
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <Card variant="glass" className="contact__card">
              <h3 className="contact__card-title">Get In Touch</h3>
              <p className="contact__card-description">
                Whether you have a project in mind, want to collaborate, or just say hello, 
                I'd love to hear from you. Choose your preferred way to connect:
              </p>

              <div className="contact__methods">
                {contactInfo.map((contact, index) => (
                  contact.label === 'Email' ? (
                    <div key={index} className="contact__method" style={{ position: 'relative', cursor: 'pointer' }} onClick={() => handleEmailClick({ preventDefault: () => {} } as React.MouseEvent<HTMLDivElement>, index)}>
                      <div className="contact__method-icon"><FaEnvelope size={24} /></div>
                      <div className="contact__method-info" style={{ textAlign: 'left' }}>
                        <span className="contact__method-label">{contact.label}</span>
                        <span className="contact__method-value">{contact.value}</span>
                        <span className="contact__method-description">{contact.description}</span>
                      </div>
                      {emailCopiedIndex === index && (
                        <span className="contact__email-copied">Email copied!</span>
                      )}
                    </div>
                  ) : (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__method"
                    >
                      <div className="contact__method-icon">{contact.icon}</div>
                      <div className="contact__method-info">
                        <span className="contact__method-label">{contact.label}</span>
                        <span className="contact__method-value">{contact.value}</span>
                        <span className="contact__method-description">{contact.description}</span>
                      </div>
                    </a>
                  )
                ))}
              </div>
            </Card>
          </div>

          <div className="contact__cta">
            <Card variant="gradient" className="contact__cta-card">
              <div className="contact__cta-content">
                <h3 className="contact__cta-title">Ready to Start a Project?</h3>
                <p className="contact__cta-description">
                  I'm always available for new opportunities and excited to work on 
                  innovative projects. Let's discuss how I can contribute to your team!
                </p>

                <div className="contact__cta-stats">
                  <div className="contact__stat">
                    <span className="contact__stat-number">24h</span>
                    <span className="contact__stat-label">Response Time</span>
                  </div>
                  <div className="contact__stat">
                    <span className="contact__stat-number">100%</span>
                    <span className="contact__stat-label">Commitment</span>
                  </div>
                  <div className="contact__stat">
                    <span className="contact__stat-number">∞</span>
                    <span className="contact__stat-label">Enthusiasm</span>
                  </div>
                </div>

                <div className="contact__cta-actions">
                  <Button 
                    variant="primary"
                    size="lg"
                    onClick={() => handleEmailClick({ preventDefault: () => {} } as React.MouseEvent<HTMLButtonElement>, -1)}
                    icon={<FaPaperPlane size={20} />}
                  >
                    <span style={{ position: 'relative', display: 'inline-block' }}>
                      Send Me an Email
                    </span>
                  {emailCopiedIndex === -1 && (
                    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                      <span className="contact__email-copied">Email copied!</span>
                    </div>
                  )}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    href="https://linkedin.com/in/tobias-freire"
                    target="_blank"
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="contact__availability">
              <div className="contact__availability-content">
                <div className="contact__availability-status">
                  <div className="contact__status-indicator"></div>
                  <span className="contact__status-text">Available for work</span>
                </div>

                <div className="contact__interests">
                  <span className="contact__interest">Full-stack Development</span>
                  <span className="contact__interest">Backend Development</span>
                  <span className="contact__interest">Software Architecture</span>
                  <span className="contact__interest">Web Applications</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
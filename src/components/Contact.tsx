import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  const [emailCopiedIndex, setEmailCopiedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar o link mailto com os dados do formulário
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:tobiasfreire005@gmail.com?subject=${subject}&body=${body}`;
    
    // Abrir o cliente de email
    window.location.href = mailtoLink;
    
    // Mostrar mensagem de sucesso
    setFormStatus('success');
    
    // Resetar o formulário após 2 segundos
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('idle');
    }, 2000);
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
                <h3 className="contact__cta-title">Send Me a Message</h3>
                <p className="contact__cta-description">
                  Fill out the form below and I'll get back to you as soon as possible. 
                  Looking forward to hearing from you!
                </p>

                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__form-group">
                    <label htmlFor="name" className="contact__form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact__form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="email" className="contact__form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact__form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="message" className="contact__form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="contact__form-textarea"
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      required
                    />
                  </div>

                  {formStatus === 'success' && (
                    <div className="contact__form-success">
                      Message sent successfully! Opening your email client...
                    </div>
                  )}

                  <Button 
                    variant="primary"
                    size="lg"
                    icon={<FaPaperPlane size={20} />}
                    className="contact__form-submit"
                  >
                    Send Message
                  </Button>
                </form>
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const redirect = (pageName: string) => {
    navigate(`/${pageName}`);
  };

  const navItems = [
    { name: 'Home', page: '' },
    { name: 'About me', page: 'about' },
    { name: 'Contact', page: 'contact' },
    { name: 'Work experience', page: 'work-experience' },
    { name: 'Projects', page: 'projects' },
  ];

  return (
    <nav style={styles.navContainer} className='NavBar'>
      <div style={styles.navList} className='NavList'>
        {navItems.map((item, index) => (
          <button
            key={index}
            style={styles.navItem(hoveredIndex === index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => redirect(item.page)}
            className='NavItem'
          >
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  navContainer: {
    display: 'flex',
    padding: '1.5rem',
    backgroundColor: 'transparent', // Fundo transparente
    backdropFilter: 'blur(10px)', // Efeito de desfoque
    alignItems: 'center',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    padding: 0,
    maxWidth: '100%',
  },
  navItem: (isHovered: boolean) => ({
    cursor: 'pointer',
    backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.2)' : 'transparent', // Fundo mais escuro ao passar o mouse
    transition: 'background-color 0.3s ease',
    color: 'white',
    padding: '1.5rem 2rem',
    border: 'none',
    fontSize: '1.2rem',
  }),
};

export default NavBar;

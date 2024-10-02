import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const redirect = (pageName: string) => {
    navigate(`/${pageName}`);
  };

  const styles = {
    navContainer: {
      display: 'flex',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
    },
    navList: {
      listStyleType: 'none',
      display: 'flex',
      padding: 0,
      maxWidth: '100%',
      //marginLeft: 'auto',
    },
    navItem: (isHovered: boolean) => ({
      cursor: 'pointer',
      backgroundColor: isHovered ? 'black' : 'transparent',
      transition: 'background-color 0.3s ease',
      color: isHovered ? 'white' : 'black',
      padding: '1rem',
      border: 'none',
    }),
  };
  
  

  const navItems = [
    { name: 'Home', page: ''},
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
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

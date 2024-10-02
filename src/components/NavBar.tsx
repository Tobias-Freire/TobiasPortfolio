import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const styles = {
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
    },
    navList: {
      listStyleType: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },
    navItem: (isHovered: boolean) => ({
      marginLeft: '2rem',
      cursor: 'pointer',
      backgroundColor: isHovered ? 'black' : 'transparent',
      transition: 'background-color 0.3s ease',
    }),
  };

  return (
    <nav style={styles.navContainer}>
      <div style={styles.navList}>
        {['About me', 'Work experience', 'Projects', 'Contact'].map((item, index) => (
          <button
            key={index}
            style={styles.navItem(hoveredIndex === index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

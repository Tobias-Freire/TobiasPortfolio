import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  animate = true 
}) => {
  const cardClass = `card card--${variant} ${hover ? 'card--hover' : ''} ${className}`;

  return (
    <div className={cardClass}>
      {children}
    </div>
  );
};

export default Card;
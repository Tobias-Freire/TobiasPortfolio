import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'blue' | 'purple' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const badgeClass = `badge badge--${variant} badge--${size} ${className}`;

  return (
    <span className={badgeClass}>
      {children}
    </span>
  );
};

export default Badge;
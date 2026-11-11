import React from 'react';
import './Badge.css';

const Badge = ({ children, variant = 'default', size = 'sm', icon: Icon, className = '' }) => {
  return (
    <span className={`badge badge--${variant} badge--${size} ${className}`.trim()}>
      {Icon && <Icon size={size === 'sm' ? 12 : 14} className="badge-icon" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;


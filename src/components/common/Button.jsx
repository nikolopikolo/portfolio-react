import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  target,
  rel,
  type = 'button',
  ...rest
}) => {
  const baseClasses = `btn btn--${variant} btn--${size} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="btn-icon btn-icon--left" size={size === 'sm' ? 14 : 18} />}
      <span className="btn-text">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn-icon btn-icon--right" size={size === 'sm' ? 14 : 18} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export default Button;


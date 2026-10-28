import React from 'react';
import { Link } from 'react-router-dom';

interface PrimaryButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'gold' | 'forest' | 'outline-gold' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'gold',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  icon,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 rounded-none text-xs md:text-sm select-none focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-5 py-2.5 space-x-2 text-xs",
    md: "px-7 py-3.5 space-x-2.5 text-xs md:text-sm",
    lg: "px-9 py-4 space-x-3 text-sm tracking-widest",
  };

  const variantStyles = {
    gold: "bg-gold text-forest-900 hover:bg-gold-300 shadow-sm hover:shadow-md active:translate-y-0.5",
    forest: "bg-forest text-ivory hover:bg-forest-800 shadow-sm hover:shadow-md active:translate-y-0.5",
    'outline-gold': "border border-gold text-gold hover:bg-gold hover:text-forest-900 active:translate-y-0.5",
    'outline-white': "border border-white/80 text-white hover:bg-white hover:text-forest-900 active:translate-y-0.5",
    ghost: "text-forest hover:text-gold hover:underline underline-offset-8 px-2 py-1",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        <span>{children}</span>
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass}>
        <span>{children}</span>
        {icon && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClass}>
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

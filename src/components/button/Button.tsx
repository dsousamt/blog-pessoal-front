import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ category = 'primary', children, ...props }) => {
  const classes = category === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700';

  return (
    <button
      className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

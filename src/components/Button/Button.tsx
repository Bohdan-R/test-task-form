import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={clsx(styles['button'], className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;

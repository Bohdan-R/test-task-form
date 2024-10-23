import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
import { ReactSVG } from 'react-svg';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  ref?: React.Ref<HTMLInputElement>;
  label: string;
  iconSrc?: string;
  onIconClick?: () => void;
  error?: string;
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, iconSrc, onIconClick, error, className, ...rest }, ref) => {
    return (
      <div className={clsx(styles['input-wrapper'], className)}>
        <input ref={ref} type={type} className={styles['input']} {...rest} />
        <span className={styles['input-label']}>{label}</span>
        <span className={styles['input-error']}>{error}</span>
        {iconSrc && <ReactSVG className={styles['input-icon']} wrapper="span" src={iconSrc} onClick={onIconClick} />}
      </div>
    );
  },
);

export default Input;

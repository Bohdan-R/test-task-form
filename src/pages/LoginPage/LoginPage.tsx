import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Button from '../../components/Button/Button';
import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['wrapper-form']}>
        <span className={styles.title}>Вітаємо!</span>
        <span className={styles.subtitle}>З поверненням</span>
        <LoginForm />
        <div className={styles['group']}>
          <span className={styles['group-label']}>Не маєте акаунту?</span>
          <Button type="button" className={styles['group-button']}>
            Зареєструватись
          </Button>
        </div>
        <div className={styles['group']}>
          <span className={styles['group-label']}>Забули пароль?</span>
          <Button type="button" className={styles['group-button']}>
            Відновити
          </Button>
        </div>
      </div>
      <div className={styles['slogan']}>
        <div className={styles['slogan-wrapper']}>
          <span className={styles['slogan-title']}>ЗДОРОВА УКРАЇНА</span>
          <span className={styles['slogan-subtitle']}>ПРОГРАМА ПРЕЗИДЕНТА УКРАЇНИ</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

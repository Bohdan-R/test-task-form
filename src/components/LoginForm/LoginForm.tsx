import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import styles from './LoginForm.module.scss';

const loginSchema = z.object({
  email: z.string().email('Неправильний формат електронної пошти'),
  password: z.string().min(6, 'Мінімальна довжина пароля 6 символів'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: LoginFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.form)}>
      <Input label="Email" type="text" {...register('email')} autoComplete="off" error={errors.email?.message} />
      <Input
        label="Password"
        type={showPassword ? 'text' : 'password'}
        {...register('password')}
        iconSrc={showPassword ? 'src/assets/icons/hide.svg' : 'src/assets/icons/show.svg'}
        autoComplete="off"
        error={errors.password?.message}
        onIconClick={() => setShowPassword(!showPassword)}
      />
      <Button type="submit" className={styles['form-button']}>
        {isSubmitting ? <Loader /> : 'Увійти'}
      </Button>
    </form>
  );
};

export default LoginForm;

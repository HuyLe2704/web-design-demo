import { useState } from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UsersRegisterService from '~/ItemService/UsersRegisterService';
import { t } from 'i18next';

const cx = classNames.bind(styles);

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const watchFields = watch(['userName', 'password', 'repassword', 'email']);
    const allFieldsFilled = watchFields.every((field) => field && field.trim() !== '');
    const watchPassword = watch('password');
    const [hasUserMessage, setHasUserMessage] = useState('');
    const navigate = useNavigate();

    // Register
    const onSubmit = async (data) => {
        console.log(data);
        try {
            setHasUserMessage('');

            const dataUserRequest = {
                userName: data.userName,
                userPassword: data.password,
                userEmail: data.email,
            };

            const response = await UsersRegisterService.addUser(dataUserRequest);

            if (response.status === 200) {
                reset();
                navigate('/login');
            }
        } catch (error) {
            console.error('Lỗi đăng ký:', error);
            setHasUserMessage(t('SIGN_UP_ERROR'));

            // setHasUserMessage(t('ACCOUNT_EXISTS_ERROR'));
        }
    };

    return (
        <div style={{ backgroundColor: '#ee4d2d' }}>
            <div className={cx('wrapper')}>
                <div className={cx('register-submit-wrapper')}>
                    <div className={cx('register-submit-left')}></div>
                    <div className={cx('register-submit-right')}>
                        <div className={cx('register-desc-wrapper')}>
                            <div className={cx('register-desc')}>{t('SIGN_UP')}</div>
                        </div>
                        <div className={cx('register-submit-content')}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        {...register('userName', { required: true, minLength: 8, maxLength: 16 })}
                                        className={cx('register-input')}
                                        placeholder={t('USERNAME')}
                                    />
                                </div>
                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        type="password"
                                        {...register('password', {
                                            required: true,
                                            minLength: {
                                                value: 8,
                                                message: `${t('PASSWORD_AT_LEAST')} 8 ${t('CHARACTERS')}`,
                                            },
                                            maxLength: {
                                                value: 16,
                                                message: `${t('PASSWORD_MAXIMUM')} 16 ${t('CHARACTERS')}`,
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                                message: t('PASSWORD_REQUIRED'),
                                            },
                                        })}
                                        className={cx('register-input')}
                                        placeholder={t('PASSWORD')}
                                    />
                                </div>
                                {errors.password && <p className={cx('error')}>{errors.password.message}</p>}
                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        type="password"
                                        {...register('repassword', {
                                            required: true,
                                            validate: (value) => value === watchPassword || t('RE_ENTER_NOT_MATCH'),
                                        })}
                                        className={cx('register-input')}
                                        placeholder={t('REPASSWORD')}
                                    />
                                </div>
                                {errors.repassword && <p className={cx('error')}>{errors.repassword.message}</p>}
                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        {...register('email', {
                                            required: true,
                                            pattern: { value: /^\S+@\S+$/i, message: t('INCORRECT_EMAIL_FORMAT') },
                                        })}
                                        className={cx('register-input')}
                                        placeholder={t('ENTER_EMAIL')}
                                    />
                                </div>
                                {errors.email && <p className={cx('error')}>{errors.email.message}</p>}
                                <p className={cx('error')}>{hasUserMessage}</p>
                                <Button
                                    type="submit"
                                    primary
                                    style={{ width: '340px', height: '40px' }}
                                    disabled={!allFieldsFilled}
                                >
                                    <span style={{ fontWeight: '300', fontSize: '14px' }}>{t('NEXT')}</span>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

import { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(styles);

const Login = () => {
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false);

    // Register
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('userData')) || [];
        setDataUser(storageData);
    }, []);

    // Register

    const onLogin = (data) => {
        const userExists = dataUser.find((user) => user.userName === data.userName && user.password === data.password);
        if (userExists) {
            navigate('/');
        } else {
            setLoginError(true);
        }
    };

    return (
        <div style={{ backgroundColor: '#ee4d2d' }}>
            <div className={cx('wrapper')}>
                <div className={cx('register-submit-wrapper')}>
                    <div className={cx('register-submit-left')}></div>
                    <div className={cx('register-submit-right')}>
                        <div className={cx('register-desc-wrapper')}>
                            <div className={cx('register-desc')}>Đăng Nhập</div>
                        </div>
                        <div className={cx('register-submit-content')}>
                            <form onSubmit={handleSubmit(onLogin)}>
                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        {...register('userName', {
                                            required: true,
                                            minLength: {
                                                value: 8,
                                                message: 'Tài khoản cần ít nhất 8 kí tự và tối đa 16 kí tự',
                                            },
                                            maxLength: {
                                                value: 16,
                                                message: 'Tài khoản cần ít nhất 8 kí tự và tối đa 16 kí tự',
                                            },
                                        })}
                                        className={cx('register-input')}
                                        placeholder="Tên đăng nhập"
                                    />
                                </div>
                                {errors.userName && <p className={cx('error')}>{errors.userName.message}</p>}

                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        type="password"
                                        {...register('password', {
                                            required: true,
                                            minLength: {
                                                value: 8,
                                                message: 'Mật khẩu cần ít nhất 8 kí tự và tối đa 16 kí tự',
                                            },
                                            maxLength: {
                                                value: 16,
                                                message: 'Mật khẩu cần ít nhất 8 kí tự và tối đa 16 kí tự',
                                            },
                                        })}
                                        className={cx('register-input')}
                                        placeholder="Mật khẩu"
                                    />
                                </div>
                                {errors.password && <p className={cx('error')}>{errors.password.message}</p>}

                                {loginError && (
                                    <p className={cx('error')}>
                                        Tài khoản hoặc mật khẩu không chính xác, vui lòng thử đăng nhập lại
                                    </p>
                                )}
                                <Button type="submit" primary style={{ width: '340px', height: '40px' }}>
                                    <span style={{ fontWeight: '300', fontSize: '14px' }}>TIẾP THEO</span>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import { useEffect, useState } from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(styles);

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        trigger,
        formState: { errors },
    } = useForm();

    const watchFields = watch(['userName', 'password', 'repassword', 'email']);
    const allFieldsFilled = watchFields.every((field) => field && field.trim() !== '');
    const watchPassword = watch('password');
    const [hasUserMessage, setHasUserMessage] = useState('');
    const navigate = useNavigate();
    // Register
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('userData')) || [];
        setDataUser(storageData);
        console.log(storageData);
    }, []);

    // Register
    const onSubmit = async (data) => {
        setHasUserMessage('');

        const isFormValid = await trigger();
        if (!isFormValid) return;

        let currentData = JSON.parse(localStorage.getItem('userData')) || [];
        const userExists = currentData.some((user) => user.userName === data.userName);

        if (userExists) {
            setHasUserMessage('Tài khoản đã tồn tại !');
        } else {
            const updatedData = [...currentData, data];
            localStorage.setItem('userData', JSON.stringify(updatedData));
            setDataUser(updatedData);
            reset();
            console.log(dataUser);
            navigate('/login');
        }
    };

    return (
        <div style={{ backgroundColor: '#ee4d2d' }}>
            <div className={cx('wrapper')}>
                <div className={cx('register-submit-wrapper')}>
                    <div className={cx('register-submit-left')}></div>
                    <div className={cx('register-submit-right')}>
                        <div className={cx('register-desc-wrapper')}>
                            <div className={cx('register-desc')}>Đăng ký</div>
                        </div>
                        <div className={cx('register-submit-content')}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        {...register('userName', { required: true, minLength: 8, maxLength: 16 })}
                                        className={cx('register-input')}
                                        placeholder="Tên đăng nhập"
                                    />
                                </div>
                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        type="password"
                                        {...register('password', {
                                            required: true,
                                            minLength: { value: 8, message: 'Mật khẩu cần ít nhất 8 kí tự' },
                                            maxLength: { value: 16, message: 'Mật khẩu tối đa 16 kí tự' },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                                message:
                                                    'Trong mật khẩu phải có chữ cái viết hoa, viết thường và chữ số',
                                            },
                                        })}
                                        className={cx('register-input')}
                                        placeholder="Mật khẩu"
                                    />
                                </div>
                                {errors.password && <p className={cx('error')}>{errors.password.message}</p>}
                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        type="password"
                                        {...register('repassword', {
                                            required: true,
                                            validate: (value) =>
                                                value === watchPassword || 'Mật khẩu nhập lại không khớp',
                                        })}
                                        className={cx('register-input')}
                                        placeholder="Nhập lại mật khẩu"
                                    />
                                </div>
                                {errors.repassword && <p className={cx('error')}>{errors.repassword.message}</p>}
                                <div className={cx('register-username-wrapper')}>
                                    <input
                                        {...register('email', {
                                            required: true,
                                            pattern: { value: /^\S+@\S+$/i, message: 'Không đúng định dạng Email' },
                                        })}
                                        className={cx('register-input')}
                                        placeholder="Nhập Email"
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

export default Register;

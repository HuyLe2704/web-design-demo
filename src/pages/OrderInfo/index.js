import classNames from 'classnames/bind';
import styles from './orderInfo.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import UsersRegisterService from '~/ItemService/UsersRegisterService';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

const cx = classNames.bind(styles);

const OrderInfo = () => {
    const navigate = useNavigate();
    const [currentUsername, setCurrentUserName] = useState();
    const toast = useRef(null);
    useEffect(() => {
        const username = localStorage.getItem('userName');
        setCurrentUserName(username);
    }, []);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await UsersRegisterService.saveCustomer(currentUsername, data);
            toast.current.show({
                severity: 'success',
                summary: 'Thành công',
                detail: 'Thông tin khách hàng đã được lưu thành công.',
                life: 3000,
            });
            localStorage.setItem('customerInfo', JSON.stringify(data));
        } catch (error) {
            toast.current.show({
                severity: 'error',
                summary: 'Thất bại',
                detail: 'Không thể lưu thông tin khách hàng. Vui lòng thử lại.',
                life: 3000,
            });
            console.error('Submit Error:', error);
        }
    };

    useEffect(() => {
        const storedCustomerInfo = localStorage.getItem('customerInfo');
        if (storedCustomerInfo) {
            const customerInfo = JSON.parse(storedCustomerInfo);
            setValue('name', customerInfo.name);
            setValue('email', customerInfo.email);
            setValue('address', customerInfo.address);
            setValue('phone', customerInfo.phone);
        }
    }, [setValue]);

    return (
        <div className={cx('wrapper', 'container-all')}>
            <Toast ref={toast} />
            <h1 className={cx('detail')}>Nhập thông tin bản thân</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('form-group')}>
                    <label htmlFor="name" className={cx('label')}>
                        Tên đầy đủ
                    </label>
                    <InputText
                        id="name"
                        {...register('name', { required: true })}
                        placeholder="Tên đầy đủ"
                        className={cx('input')}
                    />
                    {errors.name && <span className={cx('error')}>Tên là bắt buộc</span>}
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="email" className={cx('label')}>
                        Email
                    </label>
                    <InputText
                        id="email"
                        {...register('email', { required: true })}
                        placeholder="Email"
                        className={cx('input')}
                    />
                    {errors.email && <span className={cx('error')}>Email là bắt buộc</span>}
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="address" className={cx('label')}>
                        Địa chỉ
                    </label>
                    <InputText
                        id="address"
                        {...register('address', { required: true })}
                        placeholder="Địa chỉ"
                        className={cx('input')}
                    />
                    {errors.address && <span className={cx('error')}>Địa chỉ là bắt buộc</span>}
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="phone" className={cx('label')}>
                        Số điện thoại
                    </label>
                    <InputText
                        id="phone"
                        {...register('phone', { required: true })}
                        placeholder="Số điện thoại"
                        className={cx('input')}
                    />
                    {errors.phone && <span className={cx('error')}>Số điện thoại là bắt buộc</span>}
                </div>
                <div style={{ display: 'flex' }}>
                    <Button type="button" onClick={() => navigate('/carts')} className={cx('cancel-button')}>
                        Quay lại
                    </Button>
                    <Button type="submit" className={cx('submit-button')}>
                        Gửi thông tin
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default OrderInfo;

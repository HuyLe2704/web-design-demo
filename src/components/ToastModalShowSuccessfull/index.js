import classNames from 'classnames/bind';
import styles from '../../pages/Products/Products.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

const ToastSuccessfull = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className={cx('shopee-popup-modal')}>
            <div className={cx('shopee-popup__overlay')}></div>
            <div className={cx('shopee-popup__container')}>
                <div className={cx('shopee-popup__card')}>
                    <div className={cx('shopee-popup__message')}>
                        {props.message}
                        <div className={cx('shopee-alert-popup__message-list')}></div>
                    </div>
                    <div className={cx('shopee-alert-popup__btn-layout')}>
                        <Button
                            large
                            primary
                            className={cx('shopee-btn-solid')}
                            style={{ marginLeft: '70px' }}
                            onClick={() => props.setShowToastSuccessfull((prev) => !prev)}
                        >
                            <span>Xác nhận</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToastSuccessfull;

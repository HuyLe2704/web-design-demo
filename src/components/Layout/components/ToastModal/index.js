/* eslint-disable eqeqeq */
import styles from './ToastModal.module.scss';
import classNames from 'classnames/bind';
import { t } from 'i18next';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const ToastModal = (props) => {
    console.log(props);

    const handleCancelToast = () => {
        if (props.handleCancelToast) {
            props.handleCancelToast();
        } else {
            props.setShowToast((prev) => !prev);
        }
    };

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
                        <Button medium className={cx('me-3')} onClick={() => handleCancelToast()}>
                            <span>{t('CANCEL')}</span>
                        </Button>
                        <Button
                            large
                            primary
                            className={cx('shopee-btn-solid')}
                            onClick={() => props.handleConfirmToast()}
                        >
                            <span>{props.confirm}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToastModal;

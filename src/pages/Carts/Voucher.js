import Input from '~/components/Input';
import styles from './Voucher.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useEffect, useMemo, useRef, useState } from 'react';
import { cartVouchers } from '~/data';
import { useForm } from 'react-hook-form';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const Voucher = ({ show, onClose, totalPrice, setPriceAfterDiscount }) => {
    const voucherRef = useRef(null);
    const stardustDropdownRef = useRef(null);
    const { register, handleSubmit, reset } = useForm();
    const [vouchers, setVouchers] = useState([]);

    const handleResetRadio = () => {
        reset({
            voucher: '',
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.button === 0 && voucherRef.current && !voucherRef.current.contains(event.target)) {
                // handleResetRadio();
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClose, reset]);

    function formatNumberCost(num) {
        return num >= 1000 ? (num / 1000).toFixed(0) + 'K' : num.toString();
    }

    useEffect(() => {
        setVouchers(cartVouchers);
    }, []);

    const moreVoucher = () => {
        const updatedVouchers = vouchers.map((voucher) => {
            if (voucher.hidden === 1) {
                return { ...voucher, hidden: 0 };
            }
            return voucher;
        });
        setVouchers(updatedVouchers);
        stardustDropdownRef.current.style.display = 'none';
    };

    const sortedVouchers = useMemo(() => {
        return vouchers
            .filter((item) => item.hidden === 0)
            .sort((a, b) => {
                const aActive = totalPrice >= a.minPrice;
                const bActive = totalPrice >= b.minPrice;
                return aActive === bActive ? 0 : aActive ? -1 : 1;
            });
    }, [totalPrice, vouchers]);

    const voucherItems = (
        <>
            {sortedVouchers.map(
                (item) =>
                    item.hidden === 0 && (
                        <div key={item.id} className={cx('vcCard__wrapper')}>
                            <div className={cx('vcCard__card')}>
                                <div
                                    className={cx('vcCard__card_left')}
                                    style={{ opacity: totalPrice < item.minPrice ? '0.5' : '1' }}
                                >
                                    <div className={cx('Card_sawtooth')}></div>
                                </div>
                                <div className={cx('vcCard__card_right')}></div>
                                <div className={cx('voucher-standard-template')}></div>
                                <div className={cx('voucher-card-wrapper')}>
                                    <div className={cx('voucher-standard-template_left')}>
                                        <div className={cx('vc_logo_imageLogo')}>
                                            <img src={item.img} className={cx('vc-Logo-logo')} alt="voucher-img" />
                                        </div>
                                        <div className={cx('vc_IconText_iconText')}>{item.name}</div>
                                    </div>
                                    <div
                                        className={cx('voucher-standard-template_mid')}
                                        style={{ opacity: totalPrice < item.minPrice ? '0.5' : '1' }}
                                    >
                                        <div className={cx('voucher-standard-template_mid-content')}></div>
                                        <div className={cx('vc_main-title-wrapper')}>
                                            <div className={cx('vc_main-title')}>{`Giảm tối đa ₫${formatNumberCost(
                                                item.maxDiscount,
                                            )}`}</div>
                                        </div>
                                        <div className={cx('vc_sub-title')}>{`Đơn tối thiểu ₫${formatNumberCost(
                                            item.minPrice,
                                        )}`}</div>
                                        <div className={cx('vc-label')}>
                                            <div className={cx('shopee-wallet-label')}>
                                                <div className={cx('shopee-wallet-label-content')}>
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('d-flex')}>
                                            <div className={cx('progressbar-expiry')}>
                                                <div className={cx('progressbar-expiry_usage-limited')}>
                                                    <span className={cx('progressbar-expiry_capitalize')}>
                                                        {`Sắp hết hạn: Còn ${item.timeDiscount} giờ `}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('voucher-standard-template_right')}>
                                        <div className={cx('voucher-standard-template_center')}>
                                            <input
                                                {...register('voucher')}
                                                type="radio"
                                                tabIndex={0}
                                                value={item.maxDiscount}
                                                className={cx('vc_radio-button')}
                                                disabled={totalPrice < item.minPrice}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {totalPrice < item.minPrice && (
                                <div tabIndex={-1} className={cx('warning-banner-wrapper')}>
                                    <div className={cx('warning-banner')}>
                                        <>
                                            <img
                                                src="https://deo.shopeemobile.com/shopee/shopee-webfepromotion-live-sg/voucher-card@stable/images/4c43f638500f17b7.svg"
                                                alt="lazyload"
                                                className="me-2"
                                            />
                                            <span>Sản phẩm bạn chọn chưa đủ điều kiện để sử dụng Mã giảm giá này</span>
                                        </>
                                    </div>
                                </div>
                            )}
                        </div>
                    ),
            )}
            <div className={cx('stardust-dropdown')} onClick={() => moreVoucher()} ref={stardustDropdownRef}>
                <div className={cx('stardust-dropdown__item-header')}>
                    <div tabIndex={0}>
                        <span>Xem thêm</span>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('ms-2')} />
                    </div>
                </div>
            </div>
        </>
    );

    const onSubmit = (data) => {
        if (totalPrice < Number(data.voucher)) {
            setPriceAfterDiscount(totalPrice / 2);
        } else {
            setPriceAfterDiscount(totalPrice - Number(data.voucher));
        }
    };

    if (!show && onClose) {
        return null;
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cx('shopee-modal')}>
            <div className={cx('shopee-popup__overlay')}></div>
            <div className={cx('shopee-popup__container')} ref={voucherRef}>
                <div className={cx('shopee-content__wrapper')}>
                    <div>
                        <div className={cx('shopee-popup-form')}>
                            <div className={cx('shopee-popup-form__header')}>
                                <div className={cx('shopee-popup-form__title')}>
                                    <span tabIndex={0}>Chọn Shopee Voucher</span>
                                </div>
                                <div className={cx('p-relative')} tabIndex={0}>
                                    <div>
                                        <div className={cx('stardust-popover__target')}>
                                            Hỗ trợ
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                className={cx('shopee-svg-icon', 'ms-1')}
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6C11 8.76142 8.76142 11 6 11ZM5.39088 7.5C5.39745 7.12789 5.44184 6.83396 5.52404 6.6182C5.60625 6.40244 5.77394 6.16323 6.02713 5.90056L6.67324 5.26735C6.94945 4.97029 7.08755 4.65135 7.08755 4.31051C7.08755 3.98217 6.99712 3.72499 6.81628 3.53893C6.63543 3.35288 6.37238 3.25985 6.02713 3.25985C5.69174 3.25985 5.42211 3.34428 5.21825 3.51313C5.01438 3.68199 4.91245 4.19325 4.91245 4.19325H4C4 4.19325 4.19646 3.27783 4.56967 2.9667C4.94287 2.65556 5.42869 2.5 6.02713 2.5C6.64859 2.5 7.13276 2.65869 7.47965 2.97608C7.82655 3.29347 8 3.72889 8 4.28236C8 4.82958 7.73366 5.36898 7.20099 5.90056L6.66338 6.40713C6.42334 6.66041 6.30333 7.0247 6.30333 7.5H5.39088ZM5.15 9.00714C5.15 8.79286 5.21278 8.6131 5.33836 8.46786C5.46393 8.32262 5.65 8.25 5.89658 8.25C6.14315 8.25 6.33036 8.32262 6.45822 8.46786C6.58607 8.6131 6.65 8.79286 6.65 9.00714C6.65 9.22143 6.58607 9.39881 6.45822 9.53929C6.33036 9.67976 6.14315 9.75 5.89658 9.75C5.65 9.75 5.46393 9.67976 5.33836 9.53929C5.21278 9.39881 5.15 9.22143 5.15 9.00714Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('shopee-popup-form__main')}>
                                <div className={cx('shopee-popup-form__main-container')}>
                                    <div className={cx('shopee-popup-form__main-content')}>
                                        <span tabIndex={0}>Mã Voucher</span>
                                        <div style={{ flex: '1' }}>
                                            <div className={cx('p-relative', 'ms-3')}>
                                                <div className={cx('input-with-validator')}>
                                                    <Input></Input>
                                                </div>
                                            </div>
                                        </div>
                                        <Button tabIndex="0" className={cx('stardust-button')}>
                                            <span>Áp dụng</span>
                                        </Button>
                                    </div>
                                    <div className={cx('shopee-voucher-wrapper')}>
                                        <div className={cx('shopee-voucher__code-wrapper')}>
                                            <span tabIndex={0}>Mã miễn phí vận chuyển</span>
                                            <span tabIndex={0}>Có thể chọn 1 Voucher</span>
                                        </div>
                                        {voucherItems}
                                    </div>
                                </div>
                            </div>
                            <div className={cx('shopee-popup-form__footer')}>
                                <div className={cx('footer-line')}></div>
                                <Button
                                    className={cx('cancel-btn')}
                                    medium
                                    onClick={() => {
                                        onClose();
                                        // handleResetRadio();
                                    }}
                                >
                                    <span tabIndex={-1}>Trở lại</span>
                                </Button>
                                <Button
                                    type="submit"
                                    className={cx('btn-solid-primary')}
                                    primary
                                    medium
                                    onClick={onClose}
                                >
                                    <span tabIndex={-1}>OK</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Voucher;

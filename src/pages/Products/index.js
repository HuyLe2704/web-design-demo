/* eslint-disable eqeqeq */
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faChevronDown,
    faChevronRight,
    faMinus,
    faPlus,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
import Input from '~/components/Input';
import Context from '~/store/Context';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ToastModal from '~/components/Layout/components/ToastModal';
import { t } from 'i18next';
import ToastModalShow from '~/components/ToastModalShow';
import ToastSuccessfull from '~/components/ToastModalShowSuccessfull';
import CategoriesService from '~/ItemService/CategoriesService';

const cx = classNames.bind(styles);

function Products() {
    const { suggestItems } = useContext(Context);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoriesService.getListCategories()
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function normalizeName(name) {
        return name
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]/g, '')
            .replace(/-+/g, '-');
    }
    let { id } = useParams();
    const navigate = useNavigate();
    const normalizedParam = decodeURIComponent(id);
    const { value, setValue, handleAddQuantity, handleMinusQuantity, handleAddCarts, isLogin } = useContext(Context);
    const [showToast, setShowToast] = useState(false);
    const [showToastBuy, setShowToastBuy] = useState(false);
    const [messageToast, setMessageToast] = useState(t('LOGIN_REQUIRED'));
    const [messageToastBuy, setMessageToastBuy] = useState('');
    const [messageToastSuccessfull, setMessageToastSuccessfull] = useState('');
    const [showToastSuccessfull, setShowToastSuccessfull] = useState(false);

    const svgBackground = (
        <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x="0"
            y="0"
            className={cx('shopee-rating-stars-multiple')}
        >
            <polygon
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            ></polygon>
        </svg>
    );

    const svgImg = (
        <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x="0"
            y="0"
            className={cx('shopee-rating-stars-hollow')}
        >
            <polygon
                fill="none"
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            ></polygon>
        </svg>
    );

    const flashSaleLogo = (
        <a className={cx('flash-sale-logo-container')} href="https://shopee.vn/flash_sale?fromItem=16712728109">
            <svg viewBox="0 0 108 21" height={21} width={108} className={cx('flash-sale-logo')}>
                <g fill="currentColor" fillRule="evenodd">
                    <path d="M0 16.195h3.402v-5.233h4.237V8H3.402V5.037h5.112V2.075H0zm29.784 0l-.855-2.962h-4.335l-.836 2.962H20.26l4.723-14.12h3.576l4.724 14.12zM26.791 5.294h-.04s-.31 1.54-.563 2.43l-.797 2.744h2.74l-.777-2.745c-.252-.889-.563-2.43-.563-2.43zm7.017 9.124s1.807 2.014 5.073 2.014c3.13 0 4.898-2.034 4.898-4.384 0-4.463-6.259-4.147-6.259-5.925 0-.79.778-1.106 1.477-1.106 1.672 0 3.071 1.245 3.071 1.245l1.439-2.824s-1.477-1.6-4.47-1.6c-2.76 0-4.918 1.718-4.918 4.325 0 4.345 6.258 4.285 6.258 5.964 0 .85-.758 1.126-1.457 1.126-1.75 0-3.324-1.462-3.324-1.462zm12.303 1.777h3.402v-5.53h5.054v5.53h3.401V2.075h-3.401v5.648h-5.054V2.075h-3.402zm18.64-1.678s1.692 1.915 4.763 1.915c2.877 0 4.548-1.876 4.548-4.107 0-4.483-6.492-3.871-6.492-6.36 0-.987.914-1.678 2.08-1.678 1.73 0 3.052 1.224 3.052 1.224l1.088-2.073s-1.4-1.501-4.12-1.501c-2.644 0-4.627 1.738-4.627 4.068 0 4.305 6.512 3.87 6.512 6.379 0 1.145-.952 1.698-2.002 1.698-1.944 0-3.44-1.48-3.44-1.48zm19.846 1.678l-1.166-3.594h-4.84l-1.166 3.594H74.84L79.7 2.174h2.623l4.86 14.021zM81.04 4.603h-.039s-.31 1.382-.583 2.172l-1.224 3.752h3.615l-1.224-3.752c-.253-.79-.545-2.172-.545-2.172zm7.911 11.592h8.475v-2.192H91.46V2.173H88.95zm10.477 0H108v-2.192h-6.064v-3.772h4.645V8.04h-4.645V4.366h5.753V2.174h-8.26zM14.255.808l6.142.163-3.391 5.698 3.87 1.086-8.028 12.437.642-8.42-3.613-1.025z" />
                </g>
            </svg>
            <div className={cx('flash-sale-time-discount')}>{t('START_AFTER')} 15:00, 4 Th12</div>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '12px', marginLeft: '12px' }} />
        </a>
    );

    const shopDiscountWrapper = (
        <div className={cx('shopee-shop-discount-wrapper')} tabIndex={0}>
            <div className={cx('shopee-mini-vouchers')}>
                <h3 className={cx('shopee-mini-vouchers__label')}>{t('SHOP_DISCOUNT_CODE')}</h3>
                <div className={cx('shopee-mini-vouchers__wrapper')}>
                    <div className={cx('shopee-mini-vouchers__vouchers')}>
                        <div className={cx('voucher-ticket')}>
                            <div>
                                <span className={cx('voucher-promo-value')}>Giảm ₫3k</span>
                            </div>
                        </div>
                        <div className={cx('voucher-ticket')}>
                            <div>
                                <span className={cx('voucher-promo-value')}>Giảm ₫10k</span>
                            </div>
                        </div>
                        <div className={cx('mini-vouchers__mask')}></div>
                    </div>
                </div>
            </div>
        </div>
    );

    const transpot = (
        <div className={cx('shopee-transpot')}>
            <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                alt=""
                height={20}
            />
            <div className={cx('shopee-free-transpot')}>
                <div className={cx('d-flex', 'align-items-center')} style={{ color: '#222' }}>
                    <div>{t('FREE_SHIPPING')}</div>
                </div>
                <div className={cx('shopee-free-transpot__transpot')}>
                    {`${t('FREE_SHIPPING')} ${t('FOR_ORDERS_OVER')} ₫250.000`}
                </div>
            </div>
            <div className={cx('transpot-logo')}>
                <FontAwesomeIcon icon={faTruck} className={cx('icon-free-shipping-line')} />
            </div>
            <div className={cx('shopee-transpot-location-wrapper')}>
                <div className={cx('shopee-transpot-location')}>
                    <div className={cx('location')}>{t('SHIPPING TO')}</div>
                    <div className={cx('d-flex', 'align-items-center', 'position-relative')}>
                        <div className={cx('d-flex', 'align-items-center')}>
                            <div className={cx('user-location-wrapper')}>
                                <div className={cx('d-flex', 'align-items-center')}>
                                    <span
                                        style={{
                                            color: '#000',
                                            fontWeight: '500',
                                        }}
                                    >
                                        phường Cầu Dền, Quận Hai Bà Trưng
                                    </span>
                                    <FontAwesomeIcon icon={faChevronDown} className={cx('icon-arrow-down')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('d-flex', 'align-items-center')}>
                    <div className={cx('transpot-price-label')}>{t('SHIPPING FEE')}</div>
                    <div>
                        <div className={cx('shopee-drawer')} tabIndex={0}>
                            <div
                                className={cx('d-flex', 'align-items-center')}
                                style={{
                                    color: '#222',
                                    userSelect: 'none',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                }}
                            >
                                ₫16.500
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const inputQuantity = (
        <div className={cx('d-flex', 'align-items-center', 'mt-5')} style={{ color: '#757575' }}>
            <div style={{ fontSize: '14px', width: '110px' }}>{t('QUANTITY')}</div>
            <div className={cx('d-flex', 'align-items-center')}>
                <div style={{ marginRight: '15px' }}>
                    <div className={cx('shopee-input-quantity')}>
                        <Button className={cx('shopee-input-quantity-btn')} onClick={() => handleMinusQuantity()}>
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>
                        <Input quantity setValue={setValue} value={value} className={cx('item-quantity-wrapper')} />
                        <Button className={cx('shopee-input-quantity-btn')} onClick={() => handleAddQuantity()}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    const sharingWrapper = (
        <div className={cx('sharing-like-wrapper')}>
            <div className={cx('sharing-like-left-content')}>
                <div className={cx('sharing-like')}>{t('SHARE')}:</div>
                <button className={cx('sprite-product-sharing', 'sharing-ms')}></button>
                <button className={cx('sprite-product-sharing', 'sharing-fb')}></button>
                <button className={cx('sprite-product-sharing', 'sharing-pt')}></button>
                <button className={cx('sprite-product-sharing', 'sharing-x')}></button>
            </div>
        </div>
    );

    const handleConfirmToast = () => {
        navigate('/login');
    };

    const combinedItems = [
        ...suggestItems.map((item) => ({ ...item, id: `suggest-${item.id}` })),
        ...categories.flatMap((item) =>
            item.itemCorresponding ? item.itemCorresponding.map((cor) => ({ ...cor, id: `category-${cor.id}` })) : [],
        ),
    ];

    const matchedItem = combinedItems.find((item) => normalizeName(item.name) === normalizedParam);

    const handleShowToastBuy = () => {
        setShowToastBuy((prev) => !prev);
        setMessageToastBuy(t('SURE_BUY_ITEM'));
    };

    const ToastBuyModalShow = ({ show, message }) => {
        if (!show) {
            return null;
        }
        return (
            <ToastModal
                message={message}
                setShowToast={setShowToast}
                confirm={t('CONFIRM')}
                handleConfirmToast={handleConfirmToastBuy}
                handleCancelToast={handleCancelToastBuy}
            />
        );
    };

    const handleConfirmToastBuy = () => {
        setShowToastBuy((prev) => !prev);

        setMessageToastSuccessfull(
            <>
                <p>Mua hàng thành công!</p>
                <br />
                <p>Sản phẩm sẽ nhanh chóng được chuyển đến cho bạn!</p>
                <br />
                <p>Bạn có thể xem lại sản phẩm đã mua trong phần Đơn mua</p>
            </>,
        );
        setShowToastSuccessfull(true);
    };

    const handleCancelToastBuy = () => {
        setShowToastBuy(false);
    };

    return (
        <div
            className={cx('products-items-wrapper')}
            style={{ backgroundColor: '#f5f5f5', paddingTop: '30px', marginTop: '-30px' }}
        >
            <ToastModalShow
                show={showToast}
                message={messageToast}
                handleConfirmToast={handleConfirmToast}
                setShowToast={setShowToast}
                confirm={t('LOGIN')}
            />
            <ToastBuyModalShow show={showToastBuy} message={messageToastBuy} />
            <ToastSuccessfull
                show={showToastSuccessfull}
                message={messageToastSuccessfull}
                setShowToastSuccessfull={setShowToastSuccessfull}
            />
            {matchedItem && normalizeName(matchedItem.name) === normalizedParam ? (
                <div key={matchedItem.id} className={cx('wrapper', 'container-all', 'd-flex')}>
                    <div className={cx('image-items-wrapper')}>
                        <div className={cx('d-flex', 'flex-column')}>
                            <div className={cx('position-relative')}>
                                <div className={cx('position-relative')}>
                                    <img src={matchedItem.img} alt="" />
                                </div>
                            </div>
                        </div>
                        {sharingWrapper}
                    </div>
                    <div className={cx('items-info-wrapper')}>
                        <div className={cx('items-info-container')}>
                            {matchedItem.liked && (
                                <div className={cx('items-info-name-wrapper')}>{t('PREFERRED')}+</div>
                            )}
                            <span>{matchedItem.name}</span>
                        </div>
                        <div className={cx('items-rating-stars-wrapper')}>
                            <button className={cx('items-rating-wrapper')}>
                                <div className={cx('items-rating')}>{matchedItem.point}</div>
                                <div className={cx('stars-wrapper')}>
                                    <div className={cx('shopee-rating-stars')}>
                                        <div className={cx('shopee-rating-stars__stars')}>
                                            {[...Array(Math.round(matchedItem.point))].map((_, i) => (
                                                <div className={cx('shopee-rating-stars-wrapper')} key={i}>
                                                    <div className={cx('shopee-rating-stars__lit')}>
                                                        {svgBackground}
                                                    </div>
                                                    {svgImg}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className={cx('quantity-rating-wrapper')}>
                                <div className={cx('quantity-rating-quantity')}>{matchedItem.rating}</div>
                                <div className={cx('quantity-rating')}>{t('RATINGS')}</div>
                            </button>
                            <div className={cx('sold-wrapper')} tabIndex={0}>
                                <div className={cx('sold-quantity')}>{matchedItem.sold}</div>
                                <div className={cx('sold')}>{t('SOLD').toLowerCase()}</div>
                            </div>
                            <button className={cx('report-wrapper')}>{t('REPORT')}</button>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <div className={cx('d-flex', 'flex-column')}>
                                <div className={cx('flash-sale-wrapper')}>
                                    <div className={cx('d-flex', 'align-items-center')}>
                                        <div className={cx('flash-sale-price-section-wrapper')}></div>
                                        <div className={cx('flash-sale-price-section')}>
                                            <div className={cx('flash-sale-price-wrapper')}>
                                                ₫
                                                {(matchedItem.price + (matchedItem.price * 20) / 100).toLocaleString(
                                                    'vi-VN',
                                                )}{' '}
                                                - ₫
                                                {(
                                                    matchedItem.price +
                                                    (matchedItem.price * 20) / 100 +
                                                    15000
                                                ).toLocaleString('vi-VN')}
                                            </div>
                                            <div className={cx('d-flex', 'align-items-center')}>
                                                <div className={cx('flash-sale-price-new-price')}>
                                                    ₫{matchedItem.price.toLocaleString('vi-VN')}
                                                </div>
                                                <div className={cx('flash-sale-price-discount')}>
                                                    25% {t('DISCOUNT')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {flashSaleLogo}
                                </div>
                            </div>
                        </div>
                        <div className={cx('infomation-wrapper')}>
                            <div className={cx('d-flex', 'flex-column')}>
                                {shopDiscountWrapper}
                                <div className={cx('shopee-transpot-section')}>
                                    <h3>{t('SHIPPING')}</h3>
                                    <div className={cx('shopee-transpot-wrapper')}>
                                        <div className={cx('d-flex')}></div>
                                        {transpot}
                                    </div>
                                </div>
                                {inputQuantity}
                                <div style={{ marginTop: '15px' }}>
                                    <div className={cx('shopee-item-cart-wrapper')}>
                                        <div className={cx('d-flex')}>
                                            <Button
                                                leftIcon={
                                                    <FontAwesomeIcon
                                                        icon={faCartShopping}
                                                        style={{ marginRight: '10px' }}
                                                    />
                                                }
                                                className={cx('add-cart-btn')}
                                                onClick={
                                                    isLogin
                                                        ? () => handleAddCarts(matchedItem)
                                                        : () => setShowToast((prev) => !prev)
                                                }
                                            >
                                                <span>{t('ADD_TO_CART')}</span>
                                            </Button>
                                            <Button
                                                primary
                                                className={cx('btn-solid-primary', 'ms-4')}
                                                onClick={() => handleShowToastBuy()}
                                            >
                                                {t('BUY_NOW')}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginTop: '30px',
                                        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                                    }}
                                >
                                    <div className={cx('d-flex', 'flex-column')} style={{ margin: '25px 15px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Products;

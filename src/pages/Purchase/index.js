import Input from '~/components/Input';
import styles from './Purchase.module.scss';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const Purchase = () => {
    const userName = localStorage.getItem('userName');
    const { t } = useTranslation();
    const [itemsHistory, setItemsHistory] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const storedItemsHistory = JSON.parse(localStorage.getItem('itemsBoughtHistory')) || [];
        setItemsHistory(storedItemsHistory);
        setSearchResults(storedItemsHistory);
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length === 0) {
            setSearchResults(itemsHistory);
        } else {
            const filteredItems = itemsHistory.filter((item) => item.name.toLowerCase().includes(searchTerm));
            setSearchResults(filteredItems);
        }
    };

    return (
        <div className={cx('wrapper', 'container-all')}>
            <div className={cx('left-wrapper')}>
                <div className={cx('avatar-wrapper')}>
                    <div className={cx('user-account')}>
                        <div className={cx('shopee-avatar')}>
                            <div className={cx('shopee-avatar__placeholder')}>
                                <svg
                                    enableBackground="new 0 0 15 15"
                                    viewBox="0 0 15 15"
                                    x="0"
                                    y="0"
                                    className={cx('icon-headshot')}
                                >
                                    <g>
                                        <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10}></circle>
                                        <path
                                            d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeMiterlimit={10}
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                            <img
                                src="https://down-vn.img.susercontent.com/file/15f4b05177adc8e584022070059c4997_tn"
                                className={cx('shopee-avatar__img')}
                                alt="avatar"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <div className={cx('username-wrapper')}>
                        <div className={cx('username')}>{userName}</div>
                        <div>
                            <div className={cx('profile')}>Customer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('right-wrapper')}>
                <div className={cx('content-wrapper')}>
                    <section>
                        <div className={cx('searchbar')}>
                            <svg width={19} height={19} viewBox="0 0 19 19">
                                <g strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g transform="translate(-399.000000, -221.000000)">
                                        <g transform="translate(400.000000, 222.000000)">
                                            <circle cx={7} cy={7} r={7}></circle>
                                            <path
                                                d="M12,12 L16.9799555,16.919354"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <Input
                                className={cx('search-input')}
                                placeholder={t('PURCHASE_SEARCH_PLACEHOLDER')}
                                onChange={handleSearch}
                            />
                        </div>
                    </section>
                    <main>
                        {searchResults.length > 0 ? (
                            searchResults.map((item, index) => (
                                <div key={index}>
                                    <div className={cx('main-wrapper')}>
                                        <div>
                                            <div className={cx('purchase-wrapper')}>
                                                <section>
                                                    <div className={cx('purchase-shop-wrapper')}>
                                                        <div className={cx('purchase-shop')}>
                                                            <div className={cx('purchase-shop__name')}></div>
                                                            <div style={{ fontSize: '14px' }}>{`${t('TIME_BUY')} ${
                                                                item.buyTime
                                                            }`}</div>
                                                        </div>
                                                        <div className={cx('purchase-status-main-wrapper')}>
                                                            <div className={cx('purchase-status-wrapper')}>
                                                                <div className={cx('purchase-status')}>
                                                                    <span className={cx('status')}>
                                                                        <FontAwesomeIcon icon={faTruck} />
                                                                        <span style={{ marginLeft: '8px' }}>
                                                                            {t('ORDER_BEING_DELIVERED')}
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div tabIndex={0} className={cx('completed')}>
                                                                {t('COMPLETED')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                <section>
                                                    <div>
                                                        <div className={cx('items-purchase-info-wrapper')}>
                                                            <div className={cx('items-purchase-info')}>
                                                                <div className={cx('items-purchase-img-wrapper')}>
                                                                    <div className={cx('items-purchase-img')}>
                                                                        <img
                                                                            src={item.img}
                                                                            alt="purchase-img"
                                                                            tabIndex={0}
                                                                        />
                                                                        <div
                                                                            className={cx(
                                                                                'items-purchase-desc-wrapper',
                                                                            )}
                                                                        >
                                                                            <div>
                                                                                <div
                                                                                    className={cx(
                                                                                        'items-purchase-name-wrapper',
                                                                                    )}
                                                                                >
                                                                                    <span
                                                                                        className={cx(
                                                                                            'items-purchase-name',
                                                                                        )}
                                                                                    >
                                                                                        {item.name}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div style={{ fontSize: '14px' }}>
                                                                                <div
                                                                                    className={cx(
                                                                                        'items-purchase-variation',
                                                                                    )}
                                                                                    tabIndex={0}
                                                                                >
                                                                                    {t('QUANTITY_BUY')}
                                                                                </div>
                                                                                <div
                                                                                    className={cx(
                                                                                        'items-purchase-quantity',
                                                                                    )}
                                                                                    tabIndex={0}
                                                                                >
                                                                                    {`x${item.quantity}`}
                                                                                </div>
                                                                                <span
                                                                                    className={cx(
                                                                                        'items-purchase-time-left',
                                                                                    )}
                                                                                >
                                                                                    7 Days Return
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={cx('items-purchase-price-wrapper')}
                                                                        tabIndex={0}
                                                                    >
                                                                        <div className={cx('items-purchase-price')}>
                                                                            <span className={cx('old-price')}>
                                                                                ₫{`${item.price * item.quantity}`}
                                                                            </span>
                                                                            <span className={cx('new-price')}>
                                                                                ₫{`${item.newPrice}`}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className={cx('line')}>
                                                <div className={cx('line-1')}></div>
                                                <div className={cx('line-2')}></div>
                                            </div>
                                            <div className={cx('order-total-wrapper')}>
                                                <div className={cx('order-total')}>
                                                    <span className={cx('order-total-svg-wrapper')}>
                                                        <div className={cx('order-total-svg')}>
                                                            <svg></svg>
                                                        </div>
                                                    </span>
                                                    <label className={cx('label-order')}>{t('ORDER_TOTAL')}:</label>
                                                    <div tabIndex={0} className={cx('order-total-price')}>
                                                        ₫{item.newPrice.toLocaleString('VI-vn')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ marginTop: '12px' }}>{t('NO_ITEMS_FOUND')}</div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Purchase;

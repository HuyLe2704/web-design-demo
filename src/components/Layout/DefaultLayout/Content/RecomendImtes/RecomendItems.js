import classNames from 'classnames/bind';
import styles from '../Content.module.scss';
import { NavLink } from 'react-router-dom';
import { suggestItems } from '~/data';

const cx = classNames.bind(styles);

function RecomendItems() {
    function normalizeName(name) {
        return name
            .replace(/đ/g, 'd') // Thay thế "đ" bằng "d"
            .replace(/Đ/g, 'D') // Thay thế "Đ" bằng "D"
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
            .toLowerCase()
            .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch nối
            .replace(/[^\w\-]/g, '') // Loại bỏ ký tự đặc biệt
            .replace(/-+/g, '-');
    }
    return (
        <div className={cx('d-content')}>
            <div>
                <div className={cx('section-recomend-products')}>
                    <div className={cx('stardust-tabs-header-anchor')}></div>
                    <div className={cx('stardust-tabs-header-wrapper')}>
                        <ul className={cx('stardust-tabs-header')}>
                            <li className={cx('stardust-tabs-header__tab', 'stardust-tabs-header__tab--active')}>
                                <div className={cx('stardust-tabs-header__tab-line')}></div>
                                <div className={cx('suggest-wrapper')} tabIndex={0}>
                                    <span>GỢI Ý HÔM NAY</span>
                                </div>
                            </li>
                        </ul>
                        <i className={cx('stardust-tabs-header__tab-indicator')} />
                    </div>
                    <div className={cx('stardust-tabs-panels')}>
                        <section className={cx('stardust-tabs-panels__panel')}>
                            <div className={cx('stardust-tabs-panels-wrapper')}>
                                {suggestItems.map((item) => (
                                    <div key={item.id} className={cx('panel-items')}>
                                        <div className={cx('shopee_ic')}>
                                            <div className={cx('panel-items-active')}>
                                                <div className={cx('panel-items-border')}>
                                                    <NavLink to={`/products/${normalizeName(item.name)}`}>
                                                        <div className={cx('border-shopee-black9', 'bg-white')}>
                                                            <div className={cx('flex-column', 'd-flex')}>
                                                                <div className={cx('shopee_itemcard__panel')}>
                                                                    <div className={cx('shopee_itemcard__content')}>
                                                                        <img src={item.img} alt="" />
                                                                    </div>
                                                                    <div
                                                                        className={cx(
                                                                            'shopee_itemcard__promotion_overlay',
                                                                        )}
                                                                    >
                                                                        <img src={item.imgBackground} alt="" />
                                                                    </div>
                                                                    <div
                                                                        className={cx(
                                                                            'shopee_itemcard__discount-wrapper',
                                                                        )}
                                                                    >
                                                                        <span aria-label="promotion"></span>
                                                                        <span
                                                                            className={cx('shopee_itemcard__discount')}
                                                                        >
                                                                            {`-${item.discount}%`}
                                                                        </span>
                                                                    </div>
                                                                    {item.liked && (
                                                                        <div
                                                                            className={cx(
                                                                                'shopee_itemcard-flag_container',
                                                                            )}
                                                                        >
                                                                            <div
                                                                                className={cx(
                                                                                    'shopee_itemcard-flag_wrapper',
                                                                                )}
                                                                            >
                                                                                <div
                                                                                    className={cx(
                                                                                        'shopee_itemcard-flag',
                                                                                    )}
                                                                                    style={{
                                                                                        backgroundImage:
                                                                                            'url(https://down-vn.img.susercontent.com/file/76c36bd87ff2eb5887d9ad3516111869)',
                                                                                    }}
                                                                                ></div>
                                                                            </div>
                                                                        </div>
                                                                    )}

                                                                    <div className={cx('shopee_itemcard__badge')}>
                                                                        <div className={cx('shopee_itemcard-badge-ad')}>
                                                                            Ad
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('shopee_itemcard__info')}>
                                                                    <div className={cx('shopee_itemcard')}>
                                                                        <div
                                                                            className={cx(
                                                                                'shopee_itemcard-name-wrapper',
                                                                            )}
                                                                        >
                                                                            {item.name}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={cx(
                                                                            'mb-2',
                                                                            'shopee_itemcard-discount-wrapper',
                                                                        )}
                                                                    >
                                                                        <div
                                                                            className={cx(
                                                                                'shopee_itemcard__promotion_label-wrapper',
                                                                            )}
                                                                        >
                                                                            <div
                                                                                className={cx(
                                                                                    'shopee_itemcard__promotion_label',
                                                                                )}
                                                                            >
                                                                                {item.discountPrime && (
                                                                                    <div className={cx('nt-medium')}>
                                                                                        <svg
                                                                                            viewBox="-0.5 -0.5 4 16"
                                                                                            className={cx(
                                                                                                'svg-wrapper-left',
                                                                                            )}
                                                                                        >
                                                                                            <path
                                                                                                d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                                                                                strokeWidth="1"
                                                                                                stroke="currentColor"
                                                                                                fill="rgb(246, 145, 19)"
                                                                                            />
                                                                                        </svg>
                                                                                        <div
                                                                                            className={cx(
                                                                                                'shopee_itemcard__promotion-discount',
                                                                                            )}
                                                                                        >
                                                                                            10% giảm
                                                                                        </div>
                                                                                        <svg
                                                                                            viewBox="-0.5 -0.5 4 16"
                                                                                            className={cx(
                                                                                                'svg-wrapper-right',
                                                                                            )}
                                                                                        >
                                                                                            <path
                                                                                                d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                                                                                strokeWidth="1"
                                                                                                stroke="currentColor"
                                                                                                fill="rgb(246, 145, 19)"
                                                                                            />
                                                                                        </svg>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className={cx(
                                                                            'shopee_itemcard__promotion-price-wrapper',
                                                                        )}
                                                                    >
                                                                        <div
                                                                            className={cx('shopee_itemcard__promotion')}
                                                                        >
                                                                            <div
                                                                                className={cx(
                                                                                    'shopee_itemcard__promotion-container',
                                                                                )}
                                                                            >
                                                                                <div
                                                                                    className={cx(
                                                                                        'shopee_itemcard__promotion-price',
                                                                                    )}
                                                                                >
                                                                                    <span aria-label="current price"></span>
                                                                                    <span className={cx('text-xs')}>
                                                                                        ₫
                                                                                    </span>
                                                                                    <span className={cx('text-base')}>
                                                                                        {item.price.toLocaleString(
                                                                                            'vi-VN',
                                                                                        )}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className={cx(
                                                                                    'shopee_itemcard__sold-wrapper',
                                                                                )}
                                                                            >
                                                                                <span
                                                                                    className={cx(
                                                                                        'shopee_itemcard__sold',
                                                                                    )}
                                                                                >
                                                                                    {`Đã bán ${item.sold}`}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecomendItems;

import classNames from 'classnames/bind';
import styles from '../Content.module.scss';
import { useEffect, useState, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBoltLightning,
    faChevronCircleRight,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { default as CarouselWrapper } from '~/components/CarouselListItem';
import { flashSaleCategoryItems } from '~/data';
import Button from '~/components/Button';
import Context from '~/store/Context';

const cx = classNames.bind(styles);
const total_items = 16;
let visibleItems;
let totalPages;

function FlashSaleListItems(props) {
    const { flashSaleRef } = useContext(Context);
    const itemWidthRef = useRef();

    const [hours, setHours] = useState('12');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        visibleItems = flashSaleRef.current.clientWidth / itemWidthRef.current.clientWidth;
        totalPages = Math.ceil(total_items / visibleItems);
    }, [flashSaleRef]);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const transform = {
        transform: `translateX(-${currentPage * ((100 / visibleItems) * (visibleItems - 1))}%)`,
    };

    useEffect(() => {
        let countdownDate = new Date();
        countdownDate.setHours(countdownDate.getHours() + 12);

        let isMounted = true;

        const interval = setInterval(function () {
            if (isMounted) {
                const now = new Date();
                const diff = countdownDate - now;

                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setHours(hours.toString().padStart(2, '0'));
                setMinutes(minutes.toString().padStart(2, '0'));
                setSeconds(seconds.toString().padStart(2, '0'));

                if (diff <= 0) {
                    clearInterval(interval);
                }
            }
        }, 1000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);

    return (
        <CarouselWrapper>
            <div className={cx('flashSale-logo-wrapper')}>
                <div className={cx('flashSale-logo-and-countdown')}>
                    <div className={cx('flashSale-logo')}></div>
                    <div className={cx('shopee-countdown-timer')}>
                        <div className={cx('shopee-countdown-timer__number')}>
                            <span className={cx('shopee-countdown-timer__number-item')}>{hours}</span>
                        </div>

                        <div className={cx('shopee-countdown-timer__number')}>
                            <span className={cx('shopee-countdown-timer__number-item')}>{minutes}</span>
                        </div>

                        <div className={cx('shopee-countdown-timer__number')}>
                            <span className={cx('shopee-countdown-timer__number-item')}>{seconds}</span>
                        </div>
                    </div>
                </div>
                <a
                    className={cx('see-all')}
                    href="https://shopee.vn/flash_sale?promotionId=187710545526789"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={cx('me-2')}>Xem tất cả</span>
                    <FontAwesomeIcon icon={faChevronCircleRight} className={cx('mt-1')} />
                </a>
            </div>
            {/* Phần sản phẩm */}
            <div className={cx('image-carousel')} style={{ height: '248px' }}>
                <Button
                    small
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    icon={<FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '12px' }} />}
                    className={cx('category_btn-prev')}
                />
                <div className={cx('image-carousel__item-list-wrapper')} style={transform}>
                    <ul
                        className={cx('image-carousel__item-list')}
                        style={{ width: '266.667%', transform: 'translate(0px, 0px)' }}
                    >
                        {flashSaleCategoryItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className={cx('image-carousel__item-flashSale')}
                                    style={{ padding: '0px' }}
                                >
                                    <div style={{ height: '100%' }}>
                                        <div ref={itemWidthRef} className={cx('carousel__item')}>
                                            <Link to="/products">
                                                <div className={cx('image-container', 'p-relative')}>
                                                    <div className={cx('sale-price-wrapper')}>
                                                        <div className={cx('sale-price')}>
                                                            <FontAwesomeIcon
                                                                icon={faBoltLightning}
                                                                className={cx('icon-sale')}
                                                            />
                                                            <span>{`-${item.discount}`}</span>
                                                        </div>
                                                    </div>
                                                    <div className={cx('sale-status-position-wrapper')}>
                                                        <div className={cx('sale-status-position')}>
                                                            <div className={cx('sale-status-wrapper')}>
                                                                <div className={cx('sale-status')}>
                                                                    <span>Yêu thích</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('sale-image-position')}>
                                                            <div
                                                                className={cx('sale-image-bottom')}
                                                                style={{
                                                                    backgroundImage: `url(${item.imgBot})`,
                                                                }}
                                                            ></div>
                                                            <div
                                                                className={cx('sale-image')}
                                                                style={{
                                                                    backgroundImage: `url(${item.img})`,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('price-sold__wrapper')}>
                                                        <div className={cx('price-sold-padding__wrapper')}>
                                                            <div className={cx('price-wrapper')}>
                                                                <div className={cx('price-container')}>
                                                                    <div className={cx('price')}>
                                                                        <span className={cx('currency')}>₫</span>
                                                                        <span>
                                                                            {item.price.toLocaleString('vi-VN')}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={cx('sold-wrapper')}>
                                                                <div
                                                                    className={cx('position-relative', 'w-100')}
                                                                    style={{ height: '16px' }}
                                                                >
                                                                    <div className={cx('sold')}>{item.sold}</div>
                                                                    <div
                                                                        className={cx('sold-progress')}
                                                                        style={{ width: `${item.progress}%` }}
                                                                    ></div>
                                                                    <div className={cx('sold-container')}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <Button
                    small
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                    icon={<FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '12px' }} />}
                    className={cx('category_btn-next')}
                ></Button>
            </div>
        </CarouselWrapper>
    );
}

export default FlashSaleListItems;

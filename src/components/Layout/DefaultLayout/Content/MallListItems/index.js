import classNames from 'classnames/bind';
import styles from '../Content.module.scss';
import { default as CarouselWrapper } from '~/components/CarouselListItem';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { mallItems } from '~/data';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);
let total_items = 16;
let visibleItems;
let totalPages;

function MallListItems() {
    const [currentPage, setCurrentPage] = useState(0);

    const mallItemsWrapperRef = useRef();
    const categoryItemsRef = useRef();

    useEffect(() => {
        visibleItems = (mallItemsWrapperRef.current.clientWidth / categoryItemsRef.current.clientWidth) * 2;
        totalPages = Math.ceil(total_items / visibleItems);
    }, [mallItemsWrapperRef]);

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
        transform: `translateX(-${currentPage * ((100 / visibleItems) * visibleItems)}%)`,
    };

    const headerTitle = (
        <div className={cx('shopee-header-section__header__title')}>
            <div className={cx('d-flex')}>
                <a className={cx('shopee-header__title-link')} href="/">
                    SHOPEE MALL
                </a>
                <div className={cx('shopee-header__title-desc-wrapper')}>
                    <div className={cx('shopee-header__title-desc')} tabIndex={0}>
                        <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/6c502a2641457578b0d5f5153b53dd5d.png"
                            alt=""
                            className={cx('shopee-header__title-icon')}
                        />
                        <span>7 ngày miễn phí trả hàng</span>
                    </div>
                    <div className={cx('shopee-header__title-desc')} tabIndex={0}>
                        <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/511aca04cc3ba9234ab0e4fcf20768a2.png"
                            alt=""
                            className={cx('shopee-header__title-icon')}
                        />
                        Hàng chính hãng 100%
                    </div>
                    <div className={cx('shopee-header__title-desc')} tabIndex={0}>
                        <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/16ead7e0a68c3cff9f32910e4be08122.png"
                            alt=""
                            className={cx('shopee-header__title-icon')}
                        />
                        Miễn Phí Vận Chuyển
                    </div>
                </div>
            </div>
        </div>
    );

    const imgCarouselItemList = (
        <ul className={cx('image-carousel__item-list', 'image-carousel__item-list2')}>
            {mallItems.map((item) => {
                return (
                    <li
                        ref={categoryItemsRef}
                        key={item.id}
                        className={cx('image-carousel__item', 'image-carousel__item2')}
                    >
                        <div style={{ height: '100%' }}>
                            <div className={cx('ofs-carousel__item')}>
                                <Link to="/unilever-hb" className={cx('ofs-carousel__shop-cover-image')}>
                                    <div className={cx('position-relative')}>
                                        <div
                                            className={cx('ofs-carousel__cover-image')}
                                            style={{ backgroundImage: `url(${item.img})` }}
                                        ></div>
                                    </div>
                                </Link>
                                <div className={cx('ofs-carousel__item__text')}>{item.desc}</div>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <div className={cx('shopee-header-section--simple')}>
            <div className={cx('shopee-header-section__header')}>
                {headerTitle}
                <div className={cx('shopee-header-section__header-link')}>
                    <Button
                        primary
                        noOutline
                        rightIcon={<FontAwesomeIcon icon={faCircleChevronRight} />}
                        className={cx('shopee-header-section__header-btn')}
                    >
                        <Link to="/mall">
                            <div className={cx('shop-mall__open')}>
                                <span style={{ fontSize: '14px' }}>Xem tất cả</span>
                            </div>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className={cx('shopee-header-section__content')}>
                <div className={cx('shopee-header-section__content-img-wrapper')}>
                    <div style={{ width: '100%' }}>
                        <div className={cx('position-relative')}>
                            <div className={cx('stardust-carousel__item-list-wrapper')}>
                                <img
                                    src="https://cf.shopee.vn/file/vn-50009109-e2a30da034cf0775aae4cfb9bdbb3cdc"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <CarouselWrapper>
                    <div ref={mallItemsWrapperRef} className={cx('shopee-header-section__items')}>
                        <div className={cx('image-carousel')}>
                            <Button
                                small
                                onClick={handlePrev}
                                disabled={currentPage === 0}
                                icon={<FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '12px' }} />}
                                className={cx('category_btn-prev')}
                            />
                            <div style={transform} className={cx('image-carousel__item-list-wrapper')}>
                                {imgCarouselItemList}
                            </div>
                            <Button
                                small
                                onClick={handleNext}
                                disabled={currentPage === totalPages - 1}
                                icon={<FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '12px' }} />}
                                className={cx('category_btn-next', 'category_btn-next2')}
                            ></Button>
                        </div>
                    </div>
                </CarouselWrapper>
            </div>
        </div>
    );
}

export default MallListItems;

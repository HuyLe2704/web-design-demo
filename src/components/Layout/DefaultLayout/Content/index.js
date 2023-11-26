/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Carousels from '~/components/Carousels';
import { Link } from 'react-router-dom';
import { promotionalIcons } from '~/data';
import CategoryListItems from './CategoryListItem';
import { default as CarouselWrapper } from '~/components/CarouselListItem';
import { useState } from 'react';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FlashSaleListItems from './FlashSaleListItems';
import MallListItems from './MallListItems';

const cx = classNames.bind(styles);
const total_items = 23;
const visible_items = 20;

function Content() {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(total_items / visible_items);

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
        transform: `translateX(-${currentPage * 40}%)`,
    };
    return (
        <>
            <Carousels />
            <div className={cx('wrapper')}>
                <div className={cx('wrapper__promotional-icon')}>
                    {promotionalIcons.map((item, index) => {
                        return (
                            <Link to="/products" key={index} style={{ color: 'inherit' }}>
                                <div className={cx('icon-wrapper')}>
                                    <div className={cx('icon-container')}>
                                        <div className={cx('icon')}>
                                            <div
                                                className={cx('icon-img-container')}
                                                style={{ backgroundImage: `url(${item.img})` }}
                                            ></div>
                                        </div>
                                        <div className={cx('icon-desc')}>{item.name}</div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div style={{ backgroundColor: '#f5f5f5' }}>
                    <div style={{ height: '20px' }}></div>
                    <div className={cx('main', 'container-all')}>
                        <CarouselWrapper>
                            <div className={cx('section-below-the-flow')}>
                                <div className={cx('home-category-list')}>
                                    <div className={cx('shopee-header-section')}>
                                        <div className={cx('shopee-header-section__header')}>
                                            <div className={cx('shopee-header-section__title')}>DANH MỤC</div>
                                        </div>
                                        <div className={cx('shopee-header-section__content')}>
                                            <div className={cx('image-carousel', 'p-relative')}>
                                                <Button
                                                    small
                                                    onClick={handlePrev}
                                                    disabled={currentPage === 0}
                                                    icon={
                                                        <FontAwesomeIcon
                                                            icon={faChevronLeft}
                                                            style={{ fontSize: '12px' }}
                                                        />
                                                    }
                                                    className={cx('category_btn-prev')}
                                                />
                                                <div
                                                    className={cx('image-carousel__item-list-wrapper')}
                                                    style={transform}
                                                >
                                                    <ul className={cx('image-carousel__item-list')}>
                                                        <CategoryListItems />
                                                    </ul>
                                                </div>
                                                <Button
                                                    small
                                                    onClick={handleNext}
                                                    disabled={currentPage === totalPages - 1}
                                                    icon={
                                                        <FontAwesomeIcon
                                                            icon={faChevronRight}
                                                            style={{ fontSize: '12px' }}
                                                        />
                                                    }
                                                    className={cx('category_btn-next')}
                                                ></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselWrapper>
                    </div>
                    <div className={cx('flashSale-wrapper', 'container-all')}>
                        <FlashSaleListItems />
                    </div>
                    <div className={cx('container-all')} style={{ height: '110px', marginTop: '20px' }}>
                        <div>
                            <div className={cx('shopee-stack-banner')}>
                                <ul className={cx('stack-banner__banner-list')}>
                                    <li>
                                        <div className={cx('simple-banner')}>
                                            <img
                                                src="https://cf.shopee.vn/file/sg-50009109-38818b241ac87cf753f191c49dd77e81"
                                                alt=""
                                                className={cx('banner-image')}
                                            />
                                            <div className={cx('click-sections-wrapper')}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('container-all', 'homepage-mall-section')}>
                        <MallListItems />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;

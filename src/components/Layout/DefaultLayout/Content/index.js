/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Carousels from '~/components/Carousels';
import { Link } from 'react-router-dom';
import { promotionalIcons } from '~/data';
import CategoryListItems from './CategoryListItem';
import { default as CarouselWrapper } from '~/components/CarouselListItem';
import { useState, useRef, useEffect, useContext } from 'react';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FlashSaleListItems from './FlashSaleListItems';
import MallListItems from './MallListItems';
import Context from '~/store/Context';
import RecomendItems from './RecomendImtes/RecomendItems';
import { t } from 'i18next';
import CarouselItemsService from '~/ItemService/CarouselItemsService';

const cx = classNames.bind(styles);
let total_items = 27;
let visibleItems;
let totalPages;

const Content = () => {
    const { flashSaleRef } = useContext(Context);
    const [currentPage, setCurrentPage] = useState(0);
    const { suggestItems } = useContext(Context);
    const mainCategoryRef = useRef();
    const categoryItemsRef = useRef();
    const [moreItems, setMoreItems] = useState();
    const [carouselItems, setCarouselItems] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

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

    useEffect(() => {
        if (isDataLoaded && categoryItemsRef.current) {
            visibleItems = (mainCategoryRef.current.clientWidth / categoryItemsRef.current.clientWidth) * 2;
            totalPages = Math.ceil(total_items / visibleItems);
        }
    }, [isDataLoaded]);

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

    const handleAddMoreItems = () => {
        const updatedSuggestItems = suggestItems.map((suggestItem) => {
            if (suggestItem.hidden === true) {
                return { ...suggestItem, hidden: false };
            }
            return suggestItem;
        });

        setMoreItems(updatedSuggestItems);
    };

    const transform = {
        transform: `translateX(-${currentPage * ((100 / visibleItems) * (visibleItems - 12))}%)`,
    };

    useEffect(() => {
        CarouselItemsService.getListCarouselItems()
            .then((res) => {
                const updateData = res.data.map((item) => {
                    return {
                        ...item,
                    };
                });
                setCarouselItems(updateData);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const salePicture = (
        <div className={cx('salePicture')}>
            <a href="https://shopee.vn/m/shopee-thoi-trang" className={cx('salePicture-link')}>
                <div>
                    <img src="https://cf.shopee.vn/file/vn-50009109-a9c08cdd5ec196e6499ef3551d9c6c91_xhdpi" alt="" />
                </div>
            </a>
            <a href="https://shopee.vn/m/shopee-thoi-trang" className={cx('salePicture-link')}>
                <div>
                    <img src="https://cf.shopee.vn/file/vn-50009109-c7ceec027a9b5673f877f0fb8f004861_xhdpi" alt="" />
                </div>
            </a>
        </div>
    );

    const promotionalIconsWrapper = (
        <div className={cx('wrapper__promotional-icon')}>
            {promotionalIcons.map((item, index) => {
                return (
                    <Link to={`/productSale/${normalizeName(item.name)}`} key={index} style={{ color: 'inherit' }}>
                        <div className={cx('icon-wrapper')}>
                            <div className={cx('icon-container')}>
                                <div className={cx('icon')}>
                                    <div
                                        className={cx('icon-img-container')}
                                        style={{ backgroundImage: `url(${item.img})` }}
                                    ></div>
                                </div>
                                <div className={cx('icon-desc')}>{t(item.name)}</div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );

    const mainCategory = (
        <div ref={mainCategoryRef} className={cx('main', 'container-all')}>
            <CarouselWrapper>
                <div className={cx('section-below-the-flow')}>
                    <div className={cx('home-category-list')}>
                        <div className={cx('shopee-header-section')}>
                            <div className={cx('shopee-header-section__header')}>
                                <div className={cx('shopee-header-section__title')}>{t('CATEGORIES')}</div>
                            </div>
                            <div className={cx('shopee-header-section__content')}>
                                <div className={cx('image-carousel', 'p-relative')}>
                                    <Button
                                        small
                                        onClick={handlePrev}
                                        disabled={currentPage === 0}
                                        icon={<FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '12px' }} />}
                                        className={cx('category_btn-prev')}
                                    />
                                    <div className={cx('image-carousel__item-list-wrapper')} style={transform}>
                                        <ul className={cx('image-carousel__item-list')}>
                                            <CategoryListItems
                                                itemRef={categoryItemsRef}
                                                setIsDataLoaded={setIsDataLoaded}
                                            />
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
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselWrapper>
        </div>
    );

    const stackBanner = (
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
    );

    return (
        <>
            <Carousels dataCarousel={carouselItems} salePicture={salePicture} />
            <div className={cx('wrapper')}>
                {promotionalIconsWrapper}
                <div className={cx('category__main-wrapper')} style={{ backgroundColor: '#f5f5f5' }}>
                    <div style={{ height: '20px' }}></div>
                    {mainCategory}
                    <div ref={flashSaleRef} className={cx('flashSale-wrapper', 'container-all')}>
                        <FlashSaleListItems />
                    </div>
                    <div
                        className={cx('container-all', 'shopee-stack-wrapper')}
                        style={{ height: '110px', marginTop: '20px' }}
                    >
                        <div>{stackBanner}</div>
                    </div>
                    <div className={cx('container-all', 'homepage-mall-section')}>
                        <MallListItems />
                    </div>
                    <div className={cx('container-all', 'section-recomend-products-wrapper')}>
                        <RecomendItems moreItems={moreItems} />
                    </div>
                    <div className={cx('btn-see-more')}>
                        <Button large className={cx('btn-more')} onClick={() => handleAddMoreItems()}>
                            <p style={{ fontWeight: '300', marginTop: '6px' }}>{t('SEE_MORE')}</p>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;

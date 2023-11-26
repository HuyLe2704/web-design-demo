import { carouselItems } from '~/data';
import { Fragment } from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Carousels.module.scss';

const cx = classNames.bind(styles);

function Carousels() {
    return (
        <div className={cx('wrapper', 'container-all')}>
            <div className={cx('carouselContainer')}>
                <div
                    id={cx('carouselId')}
                    className={cx('carousel', 'slide')}
                    data-bs-ride="carousel"
                    data-bs-pause="hover"
                >
                    <ol className={cx('carousel-indicators')}>
                        {[...Array(carouselItems.length + 1).keys()].map((index) => (
                            <li
                                key={index}
                                data-bs-target="#carouselId"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index}`}
                            ></li>
                        ))}
                    </ol>
                    <div className={cx('carousel-inner')} role="listbox">
                        {carouselItems.map((item) => {
                            let classFirstSlide = null;

                            if (item.id === 1) {
                                classFirstSlide = cx('carousel-item', 'active');
                            } else {
                                classFirstSlide = cx('carousel-item');
                            }

                            return (
                                <Fragment key={item.id}>
                                    <div className={classFirstSlide}>
                                        <img
                                            src={item.img}
                                            className={cx('d-block')}
                                            alt={item.alt}
                                            width={796}
                                            height={235}
                                        />
                                    </div>
                                </Fragment>
                            );
                        })}
                    </div>
                    <Button vertical data-bs-target="#carouselId" data-bs-slide="prev" className={cx('btn-prev')}>
                        <span
                            className={cx('carousel-control-prev-icon')}
                            aria-hidden="true"
                            style={{ position: 'relative', left: 0 }}
                        ></span>
                    </Button>
                    <Button vertical data-bs-target="#carouselId" data-bs-slide="next" className={cx('btn-next')}>
                        <span
                            className={cx('carousel-control-next-icon')}
                            style={{ position: 'relative', left: '3px' }}
                            aria-hidden="true"
                        ></span>
                    </Button>
                </div>
            </div>
            <div className={cx('salePicture')}>
                <a href="https://shopee.vn/m/shopee-thoi-trang">
                    <div>
                        <img
                            src="https://cf.shopee.vn/file/vn-50009109-a9c08cdd5ec196e6499ef3551d9c6c91_xhdpi"
                            alt=""
                        />
                    </div>
                </a>
                <a href="https://shopee.vn/m/shopee-thoi-trang">
                    <div>
                        <img
                            src="https://cf.shopee.vn/file/vn-50009109-c7ceec027a9b5673f877f0fb8f004861_xhdpi"
                            alt=""
                        />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Carousels;

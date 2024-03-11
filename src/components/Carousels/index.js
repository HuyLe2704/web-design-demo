import { Fragment } from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Carousels.module.scss';

const cx = classNames.bind(styles);

const Carousels = (props) => {
    const carouselContainer = (
        <div className={cx('carouselContainer')}>
            <div
                id={cx('carouselId')}
                className={cx('carousel', 'slide')}
                data-bs-ride="carousel"
                data-bs-pause="hover"
            >
                <ol className={cx('carousel-indicators')}>
                    {[...Array(props.dataCarousel.length + 1).keys()].map((index) => (
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
                    {props.dataCarousel.map((item) => {
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
                                        className={cx(
                                            'd-block',
                                            props.salePicture ? 'carousel-images' : 'carousel-images-only',
                                        )}
                                        alt={item.alt}
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
    );

    return (
        <div className={cx('wrapper', 'container-all')} style={{ height: props.salePicture ? null : '360px' }}>
            {carouselContainer}
            {props.salePicture ? props.salePicture : null}
        </div>
    );
};

export default Carousels;

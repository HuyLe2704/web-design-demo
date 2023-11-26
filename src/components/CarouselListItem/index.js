import styles from './CarouselListItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CarouselListItem({ children }) {
    return <div className={cx('carousel-container')}>{children}</div>;
}

export default CarouselListItem;

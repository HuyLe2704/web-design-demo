import classNames from 'classnames/bind';
import styles from '../Content.module.scss';

const cx = classNames.bind(styles);

function MallListItems() {
    return (
        <div className={cx('shopee-header-section--simple')}>
            <div className={cx('shopee-header-section__header')}></div>
        </div>
    );
}

export default MallListItems;

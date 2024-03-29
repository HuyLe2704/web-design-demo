import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

const Loading = () => (
    <div className={cx('loading')}>
        <div className={cx('loading-circle')}></div>
    </div>
);

export default Loading;

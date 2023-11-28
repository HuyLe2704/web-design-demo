import { categoryItems } from '~/data';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Content.module.scss';

const cx = classNames.bind(styles);

function CategoryListItems() {
    return (
        <>
            {categoryItems.map((item) => {
                return (
                    <li key={item.id} className={cx('image-carousel__item')}>
                        <Link to="/products" className={cx('home-category-list__category-grid')}>
                            <div className={cx('home-category-list__wrapper')}>
                                <div className={cx('home-category-list__image-wrapper')}>
                                    <div className={cx('home-category-list__image')}>
                                        <div
                                            className={cx('category-image')}
                                            style={{
                                                backgroundImage: `url(${item.img})`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className={cx('category-name-wrapper')}>
                                    <div className={cx('category-name')}>{item.name}</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </>
    );
}

export default CategoryListItems;

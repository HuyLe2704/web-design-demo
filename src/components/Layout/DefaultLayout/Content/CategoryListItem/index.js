import { categoryItems } from '~/data';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Content.module.scss';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function CategoryListItems(props, ref) {
    const { t } = useTranslation();
    return (
        <>
            {categoryItems.map((item) => {
                return (
                    <li key={item.id} ref={ref} className={cx('image-carousel__item')}>
                        <Link to="/category" className={cx('home-category-list__category-grid')}>
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
                                    <div className={cx('category-name')}>{t(item.name)}</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </>
    );
}

export default forwardRef(CategoryListItems);

import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Content.module.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CategoriesService from '~/ItemService/CategoriesService';
import Loading from '~/components/Layout/components/Loading';

const cx = classNames.bind(styles);

const CategoryListItems = (props) => {
    const { t } = useTranslation();
    const [categories, setCategories] = useState([]);
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

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        props.setIsDataLoaded((prev) => !prev);
        CategoriesService.getListCategories()
            .then((res) => {
                setCategories(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                categories.map((item) => {
                    return (
                        <li key={item.categoryId} ref={props.itemRef} className={cx('image-carousel__item')}>
                            <Link
                                to={`/category/${item.categoryId}/${normalizeName(t(item.name))}`}
                                className={cx('home-category-list__category-grid')}
                            >
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
                })
            )}
        </>
    );
};

export default CategoryListItems;

import { promotionalIcons } from '~/data';
import classNames from 'classnames/bind';
import styles from './ProductSale.module.scss';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const ProductSale = () => {
    const { productName } = useParams();
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

    const promotionalItem = promotionalIcons.find((item) => normalizeName(item.name) === productName);

    return (
        <div style={{ marginTop: '-30px' }}>
            <div className={cx('container-all', 'wrapper')}>
                <div className={cx('product-sale_wrapper')}>
                    <div>
                        <div className={cx('product-sale_md-container')}>
                            <div className={cx('product-sale_md-component')}>
                                <div className={cx('product-sale_img-wrapper')}>
                                    <div className={cx('position-relative')}>
                                        <div style={{ width: '100%', paddingTop: '58,33%' }}></div>
                                        <div className={cx('img-wrapper')}>
                                            <img src={promotionalItem.imgContent} alt={promotionalItem.name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSale;

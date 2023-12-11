import Input from '~/components/Input';
import styles from './Carts.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import Context from '~/store/Context';

const cx = classNames.bind(styles);

function Carts() {
    const { carts, handleAddValueItem, handleMinusValueItem, handleRemoveCarts } = useContext(Context);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [isItemChecked, setIsItemChecked] = useState([]);

    const handleCheckboxAllChange = (checked) => {
        setIsCheckedAll(checked);

        if (checked) {
            const newCheckedItems = {};
            carts.forEach((item) => {
                newCheckedItems[item.id] = true;
            });
            setIsItemChecked(newCheckedItems);
        } else {
            setIsItemChecked([]);
        }
    };

    const handleCheckboxItemChange = (item) => {
        const newCheckedItems = { ...isItemChecked };
        newCheckedItems[item.id] = !newCheckedItems[item.id];
        setIsItemChecked(newCheckedItems);

        // Kiểm tra xem tất cả sản phẩm có được tick hay không
        const allChecked = carts.every((cartItem) => newCheckedItems[cartItem.id]);
        setIsCheckedAll(allChecked);
    };

    return (
        <div style={{ backgroundColor: '#f5f5f5', marginTop: '-30px' }}>
            <div className={cx('wrapper', 'container-all')}>
                <div className={cx('carts-page-wrapper')}>
                    <div className={cx('carts-page-img-wrapper')}>
                        <img
                            alt=""
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                            width={24}
                            height={20}
                        />
                        <span className={cx('carts-page-label')}>
                            Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!
                        </span>
                    </div>
                    <div className={cx('carts-page-check-wrapper')}>
                        <div className={cx('carts-page-check')}>
                            <label className={cx('stardust-checkbox')}>
                                <Input
                                    type="checkbox"
                                    className={cx('stardust-checkbox__input')}
                                    setValue={handleCheckboxAllChange}
                                    checked={isCheckedAll}
                                />
                                <div className={cx('stardust-checkbox__box')}></div>
                            </label>
                        </div>
                        <div className={cx('product')}>Sản Phẩm</div>
                        <div className={cx('price-quotation')}>Đơn Giá</div>
                        <div className={cx('quantity')}>Số Lượng</div>
                        <div className={cx('price')}>Số Tiền</div>
                        <div className={cx('operation')}>Thao Tác</div>
                    </div>
                    <div className={cx('cart-product-wrapper-all')}>
                        <div className={cx('cart-product')}>
                            <div className={cx('cart-product-wrapper')}>
                                <div className={cx('product-deal-wrapper')}>
                                    <span className={cx('product-deal-label')}>Deal sốc</span>
                                    <span>Mua kèm deal độc quyền</span>
                                </div>
                                {carts.length === 0 ? (
                                    <h1 className={cx('mt-5', 'ms-3')}>
                                        KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG CỦA BẠN{' '}
                                        <span className={cx('ms-2')}>T.T</span>
                                    </h1>
                                ) : (
                                    carts.map((item) => {
                                        return (
                                            <div key={item.id} className={cx('product-wrapper')}>
                                                <div className={cx('d-flex', 'align-items-center')}>
                                                    <div className={cx('product-checkbox')}>
                                                        <label className={cx('stardust-checkbox')}>
                                                            <Input
                                                                id={item.id}
                                                                type="checkbox"
                                                                className={cx('stardust-checkbox__input')}
                                                                tabIndex={0}
                                                                setValue={() => handleCheckboxItemChange(item)}
                                                                checked={isItemChecked[item.id]}
                                                            />
                                                            <div className={cx('stardust-checkbox__box')}></div>
                                                        </label>
                                                    </div>
                                                    <div className={cx('product-info')}>
                                                        <div className={cx('d-flex')}>
                                                            <a title="abc" href="/">
                                                                <img
                                                                    src={item.img}
                                                                    alt=""
                                                                    width={80}
                                                                    height={80}
                                                                    style={{ objectFit: 'contain' }}
                                                                />
                                                            </a>
                                                            <div className={cx('product-desc')}>
                                                                <a className={cx('product-desc-link')} href="/">
                                                                    {item.name}
                                                                </a>
                                                                <div
                                                                    className={cx('d-flex', 'align-items-center')}
                                                                ></div>
                                                                <img
                                                                    src="https://down-vn.img.susercontent.com/file/vn-50009109-a6cd35ffe9a5208a86086419c25cc1dc"
                                                                    alt=""
                                                                    height={18}
                                                                    style={{
                                                                        objectFit: 'contain',
                                                                        objectPosition: 'left',
                                                                    }}
                                                                />
                                                                <div
                                                                    className={cx('d-flex')}
                                                                    style={{ color: 'var(--primary)' }}
                                                                ></div>
                                                                <div
                                                                    className={cx('d-flex', 'align-items-center')}
                                                                    style={{ marginTop: 'auto' }}
                                                                >
                                                                    <img
                                                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/91167e001db60b62d4f85c3e0ea919b6.png"
                                                                        alt=""
                                                                        width={15.6}
                                                                        height={14}
                                                                    />
                                                                    <div className={cx('free-refund-container')}>
                                                                        7 Ngày Miễn Phí Trả Hàng
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id={cx('price-waiting')}>Chờ giá</div>
                                                    </div>
                                                    <div style={{ width: '180px' }}></div>
                                                    <div className={cx('price-info-wrapper')}>
                                                        <div>
                                                            <span className={cx('originalPrice')}>
                                                                ₫
                                                                {(item.price + (item.price * 20) / 100).toLocaleString(
                                                                    'vi-VN',
                                                                )}
                                                            </span>
                                                            <span className={cx('sellingPrice')}>
                                                                ₫{item.price.toLocaleString('vi-VN')}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={cx('input-quantity-wrapper')}>
                                                        <div className={cx('shopee-input-quantity')}>
                                                            <Button
                                                                icon={<FontAwesomeIcon icon={faMinus} />}
                                                                className={cx('shopee-input-quantity-btn')}
                                                                onClick={() => handleMinusValueItem(item)}
                                                            />
                                                            <Input
                                                                className={cx(
                                                                    'shopee-input-quantity-btn',
                                                                    'input-quantity',
                                                                )}
                                                                value={item.quantity}
                                                            />
                                                            <Button
                                                                icon={<FontAwesomeIcon icon={faPlus} />}
                                                                className={cx('shopee-input-quantity-btn')}
                                                                onClick={() => handleAddValueItem(item)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('total-price-wrapper')}>
                                                        <span>
                                                            ₫{(item.price * item.quantity).toLocaleString('vi-VN')}
                                                        </span>
                                                    </div>
                                                    <div className={cx('user-operations-wrapper')}>
                                                        <Button
                                                            onClick={() => handleRemoveCarts(item)}
                                                            className={cx('user-operations-delete')}
                                                        >
                                                            Xoá
                                                        </Button>
                                                        <div style={{ maxWidth: '100%', zIndex: '2' }}>
                                                            <Button className={cx('btn-no-outline')}>
                                                                <span>Tìm sản phẩm tương tự</span>
                                                                <FontAwesomeIcon
                                                                    icon={faChevronDown}
                                                                    style={{ marginLeft: '4px', width: '10px' }}
                                                                />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carts;

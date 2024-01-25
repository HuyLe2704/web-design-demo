import Input from '~/components/Input';
import styles from './Carts.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import Context from '~/store/Context';

const cx = classNames.bind(styles);

function Carts() {
    const { carts, handleAddValueItem, cartValue, setCartValue, setCarts, handleMinusValueItem, handleRemoveCarts } =
        useContext(Context);
    const [isItemChecked, setIsItemChecked] = useState([]);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCheckboxAllChange = (isCheckedAll) => {
        setIsCheckedAll(isCheckedAll);

        const newCheckedState = isCheckedAll ? carts.map((item) => item.id) : [];
        setIsItemChecked(newCheckedState);
    };

    const handleCheckboxItemChange = (item) => {
        const newCheckedState = [...isItemChecked];
        const index = newCheckedState.indexOf(item.id);

        if (index > -1) {
            newCheckedState.splice(index, 1);
        } else {
            newCheckedState.push(item.id);
        }
        setIsItemChecked(newCheckedState);
        setIsCheckedAll(newCheckedState.length === carts.length);
    };

    useEffect(() => {
        const totalPriceItemsChecked = carts
            .filter((item) => isItemChecked.includes(item.id))
            .reduce((total, item) => total + item.price * item.quantity, 0);

        setTotalPrice(totalPriceItemsChecked);
    }, [isItemChecked, carts]);

    const handleRemoveCheckedItems = () => {
        const itemsToRemove = carts.filter((cartItem) => isItemChecked[cartItem.id]);

        const totalQuantityToRemove = itemsToRemove.reduce((total, item) => total + item.quantity, 0);

        setCartValue((prev) => prev - totalQuantityToRemove);

        const newCarts = carts.filter((cartItem) => !isItemChecked[cartItem.id]);
        setCarts(newCarts);

        setIsCheckedAll(false);
        setIsItemChecked({});
    };

    const cartPageImgWrapper = (
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
    );

    const cartPageCheck = (
        <div className={cx('carts-page-check')}>
            <label className={cx('stardust-checkbox')}>
                <Input
                    type="checkbox"
                    className={cx('stardust-checkbox__input')}
                    setValue={handleCheckboxAllChange}
                    checked={isCheckedAll}
                />
            </label>
        </div>
    );

    const cartProduct = (
        <div className={cx('cart-product')}>
            {carts.length === 0 ? (
                <div className={cx('cart-product-wrapper')}>
                    <div className={cx('product-deal-wrapper')}>
                        <span className={cx('product-deal-label')}>Deal sốc</span>
                        <span>Mua kèm deal độc quyền</span>
                    </div>
                    <h1 className={cx('mt-5', 'ms-3')}>
                        KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG CỦA BẠN <span className={cx('ms-2')}>T.T</span>
                    </h1>
                </div>
            ) : (
                carts.map((item) => {
                    return (
                        <div key={item.id} className={cx('cart-product-wrapper')}>
                            <div className={cx('product-deal-wrapper')}>
                                <span className={cx('product-deal-label')}>Deal sốc</span>
                                <span>Mua kèm deal độc quyền</span>
                            </div>
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
                                                checked={isItemChecked.includes(item.id)}
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
                                                <div className={cx('d-flex', 'align-items-center')}></div>
                                                <img
                                                    src="https://down-vn.img.susercontent.com/file/vn-50009109-a6cd35ffe9a5208a86086419c25cc1dc"
                                                    alt=""
                                                    height={18}
                                                    style={{
                                                        objectFit: 'contain',
                                                        objectPosition: 'left',
                                                    }}
                                                />
                                                <div className={cx('d-flex')} style={{ color: 'var(--primary)' }}></div>
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
                                                ₫{(item.price + (item.price * 20) / 100).toLocaleString('vi-VN')}
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
                                                className={cx('shopee-input-quantity-btn', 'input-quantity')}
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
                                        <span>₫{(item.price * item.quantity).toLocaleString('vi-VN')}</span>
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
                        </div>
                    );
                })
            )}
        </div>
    );

    const shopeeSvgIcon = (
        <svg fill="none" viewBox="0 -2 23 22" className={cx('shopee-svg-icon')}>
            <g>
                <mask fill="#fff">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                    ></path>
                </mask>
                <path
                    d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1
                                     16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5
                                      2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9
                                       1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8
                                        1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                ></path>
            </g>
            <path
                clipRule="evenodd"
                d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
            ></path>
        </svg>
    );

    return (
        <div style={{ backgroundColor: '#f5f5f5', marginTop: '-30px' }}>
            <div className={cx('wrapper', 'container-all')}>
                <div className={cx('carts-page-wrapper')}>
                    {cartPageImgWrapper}
                    <div className={cx('carts-page-check-wrapper')}>
                        {cartPageCheck}
                        <div className={cx('product')}>Sản Phẩm</div>
                        <div className={cx('price-quotation')}>Đơn Giá</div>
                        <div className={cx('quantity')}>Số Lượng</div>
                        <div className={cx('price')}>Số Tiền</div>
                        <div className={cx('operation')}>Thao Tác</div>
                    </div>
                    <div className={cx('cart-product-wrapper-all')}>{cartProduct}</div>
                    <section className={cx('carts-accessibility-footer')}>
                        <div className={cx('carts-accessibility-footer_voucher')}>
                            {shopeeSvgIcon}
                            <div className={cx('carts-access-shopee-voucher', 'me-4')}>Shopee Voucher</div>
                            <div className={cx('carts-access-selected')}>Chọn hoặc nhập mã</div>
                        </div>
                        <div className={cx('GdUwdD')}></div>
                        <div className={cx('ceZa-G')}></div>
                        <div className={cx('carts-checkbox-all-wrapper')} style={{ cursor: 'pointer' }}>
                            <div className={cx('carts-checkbox-all')}>
                                <label className={cx('stardust-checkbox')}>
                                    <Input
                                        type="checkbox"
                                        setValue={handleCheckboxAllChange}
                                        checked={isCheckedAll}
                                        className={cx('stardust-checkbox__input')}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </label>
                            </div>
                            <div>{`Chọn tất cả (${isItemChecked.length})`}</div>
                            <Button className={cx('clear-all-btn')} onClick={() => handleRemoveCheckedItems()}>
                                Xóa
                            </Button>
                            <div style={{ flex: '1' }}></div>
                            <div className={cx('total-pay-wrapper')}>
                                <div className={cx('total-pay-container')}>
                                    <div className={cx('total-pay-desc-wrapper')}>
                                        <div
                                            className={cx('total-pay-desc')}
                                        >{`Tổng thanh toán (${isItemChecked.length} sản phẩm)`}</div>
                                        <div className={cx('total-pay')}>
                                            {`₫${totalPrice.toLocaleString('vi-VN')}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Carts;

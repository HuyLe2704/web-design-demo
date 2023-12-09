import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
            <div style={{ paddingTop: '60px', backgroundColor: '#f5f5f5' }}></div>
            <div className={cx('content-info')}>
                <div className={cx('content-info-wrapper')}>
                    <div>
                        <div className={cx('shopee-footer-section')}>
                            <h1 className={cx('shopee-footer-section__heading')}>
                                <span style={{ color: '#000' }}>
                                    <span style={{ fontSize: '14px' }}>
                                        <b>SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE</b>
                                    </span>
                                </span>
                            </h1>
                            <p className={cx('shopee-footer-section__content')}>
                                <span style={{ color: '#000' }}>
                                    <span style={{ fontSize: '12px' }}>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí!
                                            Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, có trụ sở
                                            chính ở Singapore, đã có mặt ở khắp các khu vực{' '}
                                        </span>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            <b>
                                                Singapore, Malaysia, Indonesia, Thái Lan, Philippines, Đài Loan, Brazil,
                                                México & Colombia
                                            </b>
                                        </span>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            . Với sự đảm bảo của Shopee, bạn sẽ mua hàng trực tuyến an tâm và nhanh
                                            chóng hơn bao giờ hết!
                                        </span>
                                    </span>
                                </span>
                            </p>
                            <h1 className={cx('shopee-footer-section__heading')}>
                                <span style={{ color: '#000' }}>
                                    <span style={{ fontSize: '13px' }}>
                                        <b>MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN</b>
                                    </span>
                                </span>
                            </h1>
                            <p className={cx('shopee-footer-section__content')}>
                                <span style={{ color: '#000' }}>
                                    <span style={{ fontSize: '12px' }}>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì
                                            Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Shopee là trang thương
                                            mại điện tử cho phép người mua và người bán tương tác và trao đổi dễ dàng
                                            thông tin về sản phẩm và chương trình khuyến mãi của shop. Do đó, việc mua
                                            bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện
                                            trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn
                                            muốn tìm mua những dòng sản phẩm chính hãng, uy tín,
                                        </span>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            <b>Shopee Mall </b>
                                        </span>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm
                                            hiểu và sử dụng sản phẩm,
                                        </span>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            <b>Shopee Blog - trang blog thông tin chính thức của Shopee </b>
                                        </span>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang,
                                            review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.
                                        </span>
                                    </span>
                                </span>
                            </p>
                            <h1 className={cx('shopee-footer-section__heading')}>
                                <span style={{ color: '#000' }}>
                                    <span style={{ fontSize: '13px' }}>
                                        <b>TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI</b>
                                    </span>
                                </span>
                            </h1>
                            <div className={cx('shopee-footer-section__content')}>
                                <span style={{ color: '#000' }}>
                                    <span style={{ fontSize: '12px' }}>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc, mọi
                                            nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán hàng một cách
                                            nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Shopee còn có những ưu điểm sau:
                                        </span>
                                        <ul style={{ listStyleType: 'disc', marginTop: '16px' }}>
                                            <li className={cx('mt-4')}>
                                                Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được
                                                ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm, giỏ
                                                hàng hoặc tính năng chat liền tay.
                                            </li>
                                            <li className={cx('mt-4')}>
                                                Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi trên
                                                cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người bán hàng
                                                rất linh hoạt, dễ dàng.
                                            </li>
                                            <li className={cx('mt-4')}>
                                                Cập nhập thông tin khuyến mãi, <b>Shopee Flash Sale</b> nhanh chóng và
                                                liên tục.
                                            </li>
                                        </ul>
                                        <span style={{ backgroundColor: '#fff' }}>
                                            Tại Shopee, bạn có thể lưu các mã giảm giá, Voucher Xtra và mã miễn phí vận
                                            chuyển toàn quốc. Bên cạnh đó, Shopee cũng sẽ có những chiến dịch khuyến mãi
                                            lớn hằng năm như Sale 2.2, Sale 3.3, Sale 4.4, Sale 5.5, Sale 6.6, Sale 7.7,
                                            Sale 8.8, Sale 9.9, Sale 10.10, Sale 11.11, Sale Sinh Nhật 12.12; Khuyến Mãi
                                            Tết thả ga săn sale quà Tết chất lượng. Đây là thời điểm để người mua hàng
                                            có thể nhanh tay chọn ngay cho mình những mặt hàng ưa thích với mức giá giảm
                                            kỉ lục. Ngoài ra, bạn còn có thể thỏa thích săn sale vào các ngày trong
                                            tháng như Sale giữa tháng và Sale cuối tháng đón lương về, hoặc đón xem
                                            Shopee Live để săn hàng ngàn deal hời giá sốc.
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fbfbfb' }}>
                    <div className={cx('container-all')}>
                        <div className={cx('section-above-footer')}>
                            <div className={cx('section-above-footer-desc')}>
                                © 2023 Shopee. Tất cả các quyền được bảo lưu.
                            </div>
                            <div className={cx('section-above-footer-nation-wrapper')}>
                                <div className={cx('nation-location')}>Quốc gia & Khu vực:</div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Singapore</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Indonesia</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Thái Lan</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Malaysia</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Việt Nam</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Philippines</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Brazil</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>México</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Colombia</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Chile</div>
                                </div>
                                <div className={cx('section-above-footer-nation')}>
                                    <div className={cx('section-above-footer-nation-link')}>Đài Loan</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-wrapper')}>
                    <div className={cx('wrapper', 'container-all')}>
                        <div className={cx('footer-desc-wrapper')}>
                            <div className={cx('footer-desc')}>
                                <a href="https://help.shopee.vn/portal/article/77244">
                                    <span>Chính sách bảo mật</span>
                                </a>
                            </div>
                            <div className={cx('footer-desc')}>
                                <a href="https://help.shopee.vn/portal/article/77244">
                                    <span>Quy chế hoạt động</span>
                                </a>
                            </div>
                            <div className={cx('footer-desc')}>
                                <a href="https://help.shopee.vn/portal/article/77244">
                                    <span>Chính sách vận chuyển</span>
                                </a>
                            </div>
                            <div className={cx('footer-desc')}>
                                <a href="https://help.shopee.vn/portal/article/77244">
                                    <span>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className={cx('d-flex', 'align-items-center', 'justify-content-center')}
                            style={{ marginTop: '0' }}
                        >
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://online.gov.vn/Home/WebDetails/18367"
                                className={cx('footer-logo-link-wrapper')}
                            >
                                <div className={cx('footer-vn-background')}></div>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://online.gov.vn/Home/AppDetails/29"
                                className={cx('footer-logo-link-wrapper')}
                            >
                                <div className={cx('footer-vn-background')}></div>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://help.shopee.vn/portal"
                                className={cx('footer-logo-link-wrapper')}
                            >
                                <div className={cx('footer-vn-background-no-fake-item')}></div>
                            </a>
                        </div>
                        <div className={cx('footer-under-logo-link-wrapper')} style={{ marginBottom: '28px' }}>
                            Công ty TNHH Shopee
                        </div>
                        <div className={cx('footer-under-logo-link-wrapper')}>
                            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận
                            Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                        </div>
                        <div className={cx('footer-under-logo-link-wrapper')}>
                            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext
                            4678)
                        </div>
                        <div className={cx('footer-under-logo-link-wrapper')}>
                            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                        </div>
                        <div className={cx('footer-under-logo-link-wrapper')}>
                            © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

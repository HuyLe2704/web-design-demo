import classNames from 'classnames/bind';
import styles from '~/components/Layout/components/Header/Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { useState } from 'react';
import { supportNav } from '~/data';
import Navbar from '../components/Navbar';

const cx = classNames.bind(styles);

function NewHeader({ children }) {
    const [showNav, setShowNav] = useState(false);

    const handleToggle = () => {
        setShowNav((prev) => !prev);
    };
    return (
        <header className={cx('wrapper', 'wrapper-sticky')} style={{ height: '34px' }}>
            <div className={cx('navbar-wrapper', 'container-wrapper')}>
                <nav className={cx('container', 'navbar', 'd-flex', 'container-all')}>
                    <div className={cx('v-center', 'd-flex', 'navbar-mobile-wrapper')}>
                        <a
                            href="//banhang.shopee.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cx('seller_channel')}
                        >
                            Kênh người bán
                        </a>
                        <a
                            href="//banhang.shopee.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cx('seller_become')}
                        >
                            Trở thành Người bán Shopee
                        </a>

                        <div className={cx('shopee-drawer')}>
                            <Link to="/upload" target="_blank" rel="noopener noreferrer" className={cx('upload')}>
                                Tải ứng dụng
                            </Link>
                        </div>
                        <div className={cx('d-flex', 'connect')}>Kết nối</div>
                        <div className={cx('d-flex', 'social-web')}>
                            <a
                                href="https://www.facebook.com/ShopeeVN"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Kết nối facebook"
                            >
                                <FontAwesomeIcon icon={faFacebook} className={cx('ms-2')} style={{ color: 'white' }} />
                            </a>
                            <a
                                href="https://www.facebook.com/ShopeeVN"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Kết nối instagram"
                                className={cx('ms-3')}
                            >
                                <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
                            </a>
                        </div>
                    </div>

                    <div className={cx('navbar__spacer')}></div>
                    <Button
                        primary
                        className={cx('bars-icon')}
                        icon={<FontAwesomeIcon icon={faBars} style={{ fontSize: '2.6rem' }} />}
                        onClick={() => handleToggle()}
                    ></Button>
                    {showNav && <Navbar />}
                    <ul className={cx('navbar__links', 'd-flex', 'justify-content-between')}>
                        {supportNav.map((item, index) => {
                            let classNames = cx('navbar__link', 'd-flex', 'mt-1');
                            let notifyPopover = null;
                            let languesWrapper = null;

                            if (index === 0) {
                                classNames = cx('navbar__link', 'd-flex', 'notify-navbar', 'mt-1');
                                notifyPopover = (
                                    <div className={cx('notify-popover-wrapper')}>
                                        <div className={cx('popover_arrow')}>
                                            <div className={cx('popover_arrow-inner')}></div>
                                        </div>
                                        <div className={cx('notify-description')}>
                                            <div className={cx('notify-wrapper')}>
                                                <div className={cx('notify')}>
                                                    <div className={cx('notify__image-wrapper')}>
                                                        <img
                                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/99e561e3944805a023e87a81d4869600.png"
                                                            alt=""
                                                            className={cx('notify__image')}
                                                        />
                                                    </div>
                                                    <p className={cx('notify-warn')}>Đăng nhập để xem thông báo</p>
                                                </div>
                                                <div className={cx('d-flex')}>
                                                    <Button className={cx('notify__register')} tabIndex="-1">
                                                        <div tabIndex="0">Đăng ký</div>
                                                    </Button>
                                                    <Button className={cx('notify__login')} tabIndex="-1">
                                                        <div tabIndex="0">Đăng nhập</div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else if (index === 2) {
                                classNames = cx('navbar__link', 'd-flex', 'langues', 'mt-1');
                                languesWrapper = (
                                    <div className={cx('langues-popover-wrapper')}>
                                        <div className={cx('popover_arrow2')}>
                                            <div className={cx('popover_arrow-inner2')}></div>
                                        </div>
                                        <div className={cx('langues-wrapper')}>
                                            <Button medium className={cx('langues-selected', 'selected')}>
                                                <span>Tiếng Việt</span>
                                            </Button>
                                            <Button medium className={cx('langues-selected')}>
                                                <span>Tiếng Anh</span>
                                            </Button>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <li key={index} className={classNames}>
                                    <div role="button">
                                        <Link to="/notifications" style={{ color: '#fff' }}>
                                            <FontAwesomeIcon icon={item.icon} style={{ marginLeft: '12px' }} />
                                            <span className={cx('navbar__support-name', 'ms-2', 'me-2')}>
                                                {item.name}
                                            </span>
                                            {item.arrow ? (
                                                <span className={cx('angle-down')}>
                                                    <FontAwesomeIcon icon={faAngleDown} />
                                                </span>
                                            ) : null}
                                        </Link>
                                    </div>
                                    {notifyPopover}
                                    {index === 0 && <div className={cx('header_pseudo')}></div>}
                                    {languesWrapper}
                                    {index === 2 && <div className={cx('header_pseudo')}></div>}
                                </li>
                            );
                        })}
                        <Link to="/register" className={cx('navbar__link--signup', 'mt-2')} style={{ color: '#fff' }}>
                            Đăng ký
                        </Link>
                        <div className={cx('navbar__link-separator')}></div>
                        <Link to="/register" className={cx('navbar__link--login', 'mt-2')} style={{ color: '#fff' }}>
                            Đăng nhập
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className="container">{children}</div>
        </header>
    );
}

export default NewHeader;

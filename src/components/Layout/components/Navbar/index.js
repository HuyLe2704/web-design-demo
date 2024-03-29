import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from '~/components/Popper';
import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';

const cx = classNames.bind(styles);

function Navbar() {
    const { faBell, faCircleQuestion } = require('@fortawesome/free-regular-svg-icons');
    const { faGlobe } = require('@fortawesome/free-solid-svg-icons');
    const { i18n, t } = useTranslation();
    const currentLanguage = locales[i18n.language];
    // Navbar support data
    const supportNav = [
        {
            id: 1,
            name: t('NOTIFY'),
            icon: faBell,
            arrow: false,
        },
        {
            id: 2,
            name: t('HELP'),
            icon: faCircleQuestion,
            arrow: false,
        },
        {
            id: 3,
            name: currentLanguage,
            icon: faGlobe,
            arrow: true,
        },
    ];
    const registerAndLogin = (
        <>
            <Link to="/register" className={cx('topnav_link', 'nav_name')}>
                <span className={cx('navbar__support-name', 'ms-4', 'me-2')}>{t('SIGN_UP')}</span>
            </Link>
            <Link to="/register" className={cx('topnav_link', 'nav_name')}>
                <span className={cx('navbar__support-name', 'ms-4', 'me-2')}>{t('LOG_IN')}</span>
            </Link>
        </>
    );

    const notifyPopoverWrapper = (
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
                        <p className={cx('notify-warn')}>{t('LOGIN_NOTIFY')}</p>
                    </div>
                    <div className={cx('d-flex')}>
                        <Button className={cx('notify__register')} tabIndex="-1">
                            <div tabIndex="0">{t('SIGN_UP')}</div>
                        </Button>
                        <Button className={cx('notify__login')} tabIndex="-1">
                            <div tabIndex="0">{t('LOGIN')}</div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Wrapper className={cx('wrapper')}>
            <ul className={cx('topnav')}>
                {supportNav.map((item, index) => {
                    let classNames = cx('topnav_link');
                    let notifyPopover = null;
                    let languesWrapper = null;

                    if (index === 0) {
                        classNames = cx('topnav_link', 'notify-navbar');
                        notifyPopover = { notifyPopoverWrapper };
                    } else if (index === 2) {
                        classNames = cx('d-flex', 'langues', 'topnav_link');
                        languesWrapper = (
                            <div className={cx('langues-popover-wrapper')}>
                                <div className={cx('')}>
                                    <div className={cx('')}></div>
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
                                <Link to="/notifications" className={cx('nav_name')}>
                                    <FontAwesomeIcon icon={item.icon} style={{ marginLeft: '12px' }} />
                                    <span className={cx('navbar__support-name', 'ms-2', 'me-2')}>{item.name}</span>
                                    {item.arrow ? (
                                        <span className={cx('angle-down')}>
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    ) : null}
                                </Link>
                            </div>
                            {notifyPopover}
                            {languesWrapper}
                        </li>
                    );
                })}
                {registerAndLogin}
            </ul>
        </Wrapper>
    );
}

export default Navbar;

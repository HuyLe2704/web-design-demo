/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext, useLayoutEffect, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { faAngleDown, faBars, faCartShopping, faMagnifyingGlass, faShop } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchKeyWords from '~/components/SearchKeyWords';
import { removeVietnameseTones, suggestHeaderData } from '~/data';
import Navbar from '../Navbar';
import Context from '~/store/Context';
import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';
import CategoriesService from '~/ItemService/CategoriesService';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchKeyWords, setSearchKeyWords] = useState('');
    const [isTippyVisible, setIsTippyVisible] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('vi');
    const { suggestItems, isLogin, setIsLogin, cartValue, carts } = useContext(Context);
    const userName = localStorage.getItem('userName');
    const { i18n, t } = useTranslation();
    const currentLanguage = locales[i18n.language];
    const { faBell, faCircleQuestion } = require('@fortawesome/free-regular-svg-icons');
    const { faGlobe } = require('@fortawesome/free-solid-svg-icons');
    const [showLogout, setShowLogout] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoriesService.getListCategories()
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navigate = useNavigate();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        setSelectedLanguage(lng);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            setSelectedLanguage(savedLanguage);
        }
    }, [i18n]);

    useLayoutEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLogin(isLoggedIn);
    }, []);

    const handleLogout = () => {
        setShowLogout(false);
        localStorage.removeItem('userName');
        localStorage.setItem('isLoggedIn', 'false');
        setIsLogin(false);
        navigate('/login');
    };

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

    useLayoutEffect(() => {
        if (searchResult.length > 0) {
            setIsTippyVisible(true);
        } else {
            setIsTippyVisible(false);
        }
    }, [searchResult]);

    const changeInput = (e) => {
        const allItemsFiltered = [
            ...suggestItems.map((item) => ({ ...item, id: `suggest-${item.id}` })),
            ...categories.flatMap((item) =>
                item.itemCorresponding
                    ? item.itemCorresponding.map((cor) => ({ ...cor, id: `category-${cor.id}` }))
                    : [],
            ),
        ];
        console.log(allItemsFiltered);
        let inputValue = e.target.value;
        setSearchKeyWords(e.target.value);
        const suggestItem = allItemsFiltered.map((item) => item.name.toLowerCase());
        if (!inputValue.trim()) {
            setSearchResult([]);
        } else {
            const normalizedInputValue = removeVietnameseTones(inputValue.toLowerCase());
            const filterResults = suggestItem.filter((keyword) =>
                removeVietnameseTones(keyword).includes(normalizedInputValue),
            );
            setSearchResult(filterResults);
        }
    };

    const handleToggle = () => {
        setShowNav((prev) => !prev);
    };

    const navlinkHidden = () => {
        setSearchKeyWords('');
        setIsTippyVisible(false);
    };

    const navbarMobileWrapper = (
        <div className={cx('v-center', 'd-flex', 'navbar-mobile-wrapper')}>
            <a href="//banhang.shopee.vn" target="_blank" rel="noopener noreferrer" className={cx('seller_channel')}>
                {t('SELLER_CENTER')}
            </a>
            <a href="//banhang.shopee.vn" target="_blank" rel="noopener noreferrer" className={cx('seller_become')}>
                {t('BECOME_SELLER')}
            </a>

            <div className={cx('shopee-drawer')}>
                <Link to="/upload" target="_blank" rel="noopener noreferrer" className={cx('upload')}>
                    {t('DOWNLOAD')}
                </Link>
            </div>
            <div className={cx('d-flex', 'connect')}>{t('FOLLOW_US')}</div>
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
    );

    const AccountInfoWrapper = ({ show }) => {
        if (!show) {
            return null;
        }
        return (
            <div className={cx('navbar-account-drawer__content')}>
                <div className={cx('popover_arrow3')}>
                    <div className={cx('popover_arrow-inner3')}></div>
                </div>
                <div className={cx('navbar-account-drawer_btn')}>
                    <span>{t('MY_ACCOUNT')}</span>
                </div>
                <Link to="/purchase">
                    <div className={cx('navbar-account-drawer_btn')}>
                        <span>{t('PURCHASE')}</span>
                    </div>
                </Link>
                <Button className={cx('logout')} tabIndex="0" onClick={() => handleLogout()}>
                    <span>{t('LOGOUT')}</span>
                </Button>
            </div>
        );
    };

    const notifyNavbar = (
        <ul className={cx('navbar__links', 'd-flex', 'justify-content-between')}>
            {supportNav.map((item, index) => {
                let classNames = cx('navbar__link', 'd-flex', 'mt-1');
                let notifyPopover = null;
                let languesWrapper = null;

                if (index === 0) {
                    classNames = cx('navbar__link', 'd-flex', 'notify-navbar', 'mt-1');
                    !isLogin
                        ? (notifyPopover = (
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
                                              <NavLink to="/register" className={cx('notify__register')}>
                                                  <Button className={cx('notify__register')} tabIndex="-1">
                                                      <div tabIndex="0">{t('REGISTER')}</div>
                                                  </Button>
                                              </NavLink>
                                              <NavLink to="/login" className={cx('notify__login')}>
                                                  <Button className={cx('notify__login')} tabIndex="-1">
                                                      <div tabIndex="0">{t('LOGIN')}</div>
                                                  </Button>
                                              </NavLink>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : (notifyPopover = (
                              <div className={cx('notify-popover-wrapper')}>
                                  <div className={cx('new-notify-popover')}>
                                      <div className={cx('new-notify-wrapper')}>{t('NEW_NOTIFY')}</div>
                                      <div>
                                          <div className={cx('notify-wrapper')}>
                                              <div className={cx('notify-image-wrapper')}>
                                                  <div className={cx('notify-image')}>
                                                      <img
                                                          src="https://down-vn.img.susercontent.com/file/sg-11134004-7rcd1-lscjfrbqpiu844_tn"
                                                          alt="notify"
                                                      ></img>
                                                  </div>
                                              </div>
                                              <div className={cx('notify-desc-wrapper')}>
                                                  <div className={cx('notify-desc-wrapper-header')}>
                                                      CUỐI NGÀY SALE HẾT - Bạn CHỐT ĐƠN CHƯA?
                                                  </div>
                                                  <div className={cx('noptify-desc')}>
                                                      🚀Livestream độc quyền cùng Hannah Olala 🔥Mã giảm 50% tung hàng
                                                      loạt 🎉Điện tử, Thời trang, Mỹ phẩm 💖Vài tiếng sale cuối - Chốt
                                                      hết đơn thôi
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ));
                } else if (index === 2) {
                    classNames = cx('navbar__link', 'd-flex', 'langues', 'mt-1');
                    languesWrapper = (
                        <div className={cx('langues-popover-wrapper')}>
                            <div className={cx('popover_arrow2')}>
                                <div className={cx('popover_arrow-inner2')}></div>
                            </div>
                            <div className={cx('langues-wrapper')}>
                                <Button
                                    medium
                                    className={cx('langues-selected', { selected: selectedLanguage === 'vi' })}
                                    onClick={() => changeLanguage('vi')}
                                >
                                    <span>Tiếng Việt</span>
                                </Button>
                                <Button
                                    medium
                                    className={cx('langues-selected', { selected: selectedLanguage === 'en' })}
                                    onClick={() => changeLanguage('en')}
                                >
                                    <span>English</span>
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
                                <span className={cx('navbar__support-name', 'ms-2', 'me-2')}>{item.name}</span>
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
            {isLogin ? (
                <div className={cx('navbar-link__account')}>
                    <div
                        className={cx('stardust-popover')}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowLogout((prev) => !prev)}
                    >
                        <div className={cx('stardust-popover__target')}>
                            <div className={cx('navbar-link__account-container')}>
                                <div className={cx('shopee-avatar')}>
                                    <AccountInfoWrapper show={showLogout} />
                                    <div className={cx('shopee-avatar__placeholder')}>
                                        <svg
                                            enableBackground="new 0 0 15 15"
                                            viewBox="0 0 15 15"
                                            x="0"
                                            y="0"
                                            className={cx('icon-headshot')}
                                        >
                                            <g>
                                                <circle
                                                    cx="7.5"
                                                    cy="4.5"
                                                    fill="none"
                                                    r="3.8"
                                                    strokeMiterlimit={10}
                                                ></circle>
                                                <path
                                                    d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit={10}
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/15f4b05177adc8e584022070059c4997_tn"
                                        className={cx('shopee-avatar__img')}
                                        alt="avatar"
                                        width={21}
                                        height={21}
                                    />
                                </div>
                                <div className={cx('navbar__username', 'mb-1')}>{userName}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Link to="/register" className={cx('navbar__link--signup', 'mt-2')} style={{ color: '#fff' }}>
                        {t('REGISTER')}
                    </Link>
                    <div className={cx('navbar__link-separator')}></div>
                    <Link to="/login" className={cx('navbar__link--login', 'mt-2')} style={{ color: '#fff' }}>
                        {t('LOGIN')}
                    </Link>
                </>
            )}
        </ul>
    );

    const stardustPopover = (
        <div tabIndex={0} className={cx('stardust-popover__popover')}>
            <div>
                <h3 className={cx('new-product-label')}>{t('RECENTLY_ADDED_PRODUCTS')}</h3>
                {carts.map((item) => {
                    return (
                        <div key={item.id} className={cx('new-product')}>
                            <img className={cx('product-img')} alt="" src={item.img} />
                            <div className={cx('product-items-name-wrapper')}>
                                <div className={cx('d-flex', 'align-items-center')}>
                                    <div className={cx('product-items-name')}>{item.name}</div>
                                    <div style={{ flex: '1' }}></div>
                                    <div className={cx('product-items-price-wrapper')}>
                                        <div className={cx('product-items-price')}>
                                            ₫{(item.price * item.quantity).toLocaleString('vi-VN')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className={cx('go-to-cart')}>
                    <div style={{ flex: '1' }}></div>
                    <Button
                        primary
                        className={cx('go-to-cart-btn')}
                        style={selectedLanguage === 'en' ? { width: '190px' } : null}
                    >
                        <Link to="/carts" style={{ color: 'var(--white-color)', fontSize: '14px' }}>
                            {t('VIEW_SHOPPING_CART')}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );

    const tippyWrapper = (
        <Tippy
            interactive
            visible={isTippyVisible}
            onClickOutside={() => setIsTippyVisible(false)}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('d-flex', 'search-shop')}>
                            <span className={cx('me-2')}>
                                <FontAwesomeIcon icon={faShop} style={{ color: '#ee4d2d' }} />
                            </span>
                            <h4 className={cx('search-title')}>Tìm shop "{searchKeyWords}"</h4>
                        </div>
                        <SearchKeyWords searchResult={searchResult} navlinkHidden={navlinkHidden} />
                    </PopperWrapper>
                </div>
            )}
            appendTo={() => document.body}
        >
            <div className={cx('shopee-searchbar__main')}>
                <div className={cx('shopee-searchbar__input')}>
                    <input
                        placeholder={t('SHOPEE_FREE_SHIP_SEARCH')}
                        className={cx('shopee-searchbar-input__input')}
                        maxLength={128}
                        onChange={changeInput}
                        value={searchKeyWords}
                        // value={searchValue}
                        // onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                </div>
            </div>
        </Tippy>
    );

    return (
        <header className={cx('wrapper', 'wrapper-sticky')}>
            <div className={cx('navbar-wrapper', 'container-wrapper')}>
                <nav className={cx('container', 'navbar', 'd-flex', 'container-all')}>
                    {navbarMobileWrapper}
                    <div className={cx('navbar__spacer')}></div>
                    <Button
                        primary
                        className={cx('bars-icon')}
                        icon={<FontAwesomeIcon icon={faBars} style={{ fontSize: '2.6rem' }} />}
                        onClick={() => handleToggle()}
                    ></Button>
                    {showNav && <Navbar />}
                    {notifyNavbar}
                </nav>
            </div>
            <div className={cx('header-with-search-wrapper')}>
                <div className={cx('header-with-search', 'container-all')}>
                    <Link to="/" className={cx('header-with-search__logo-section')}>
                        <div className={cx('header-with-search__logo-wrapper')}>
                            <svg viewBox="0 0 192 65" className={cx('header-with-search__logo')}>
                                <g fillRule="evenodd">
                                    <path d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459"></path>
                                </g>
                            </svg>
                        </div>
                    </Link>
                    <div className={cx('header-with-search__search-section')}>
                        <form role="search" autoComplete="off" className={cx('shopee-searchbar')}>
                            {tippyWrapper}
                            <Button primary icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}></Button>
                        </form>
                        <div className={cx('suggest-wrapper')}>
                            <div className={cx('suggest')}>
                                {suggestHeaderData.map((item) => {
                                    return (
                                        <Link to="/product" key={item.id} className={cx('suggest-name')}>
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={cx('header-with-search__cart-wrapper')}>
                        <div className={cx('header-with-search__cart')}>
                            <div role="button" className={cx('header-with-search__cart-target')}>
                                <div className={cx('cart-drawer-container')}>
                                    <Link to="/carts" className={cx('cart-drawer')} />
                                    <FontAwesomeIcon icon={faCartShopping} style={{ color: '#fff' }} />
                                    {cartValue > 0 && <div className={cx('shopee-cart-number-badge')}>{cartValue}</div>}
                                </div>
                            </div>
                            <div className={cx('stardust-popover__wrapper')}>
                                <div className={cx('stardust-popover_arrow')}>
                                    <div className={cx('stardust-popover_arrow-inner')}></div>
                                </div>
                                {stardustPopover}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

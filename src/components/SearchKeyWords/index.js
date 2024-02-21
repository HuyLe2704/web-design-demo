import classNames from 'classnames/bind';
import style from './SearchKeyWords.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

const SearchKeyWords = ({ searchResult, navlinkHidden }) => {
    function normalizeName(name) {
        return name
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
            .toLowerCase()
            .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch nối
            .replace(/[^\w\-]/g, '') // Loại bỏ ký tự đặc biệt
            .replace(/-+/g, '-');
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('keyword-wrapper')}>
                {searchResult.map((keyword) => (
                    <NavLink
                        key={keyword}
                        to={`/products/${normalizeName(keyword)}`}
                        style={{ color: '#333' }}
                        onClick={() => navlinkHidden()}
                    >
                        <p className={cx('keyword')}>{keyword}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SearchKeyWords;

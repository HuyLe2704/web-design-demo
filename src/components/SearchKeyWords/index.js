import classNames from 'classnames/bind';
import style from './SearchKeyWords.module.scss';

const cx = classNames.bind(style);

const SearchKeyWords = ({ searchResult }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('keyword-wrapper')}>
                {/* <img src={data.avatar} alt="" /> */}
                {searchResult.map((keyword) => (
                    <p key={keyword} className={cx('keyword')}>
                        {keyword}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default SearchKeyWords;

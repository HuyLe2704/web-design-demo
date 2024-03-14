import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({
    onClick,
    id,
    type,
    className,
    placeholder,
    checked = false,
    style,
    value,
    setValue,
    quantity,
    tabIndex,
    onKeyPress,
    disabled = false,
}) {
    const handleOnChange = (e) => {
        if (setValue && typeof setValue === 'function') {
            if (type === 'checkbox') {
                setValue(e.target.checked);
            } else {
                const newValue = e.target.value;
                const intValue = parseInt(newValue, 10);
                if (!isNaN(intValue) && intValue >= 1) {
                    setValue(intValue);
                } else {
                    setValue(1);
                }
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && onKeyPress) {
            onKeyPress(e);
        }
    };

    let Comp = 'input';

    const classes = cx('wrapper', {
        [className]: className,
        quantity,
    });

    return (
        <Comp
            className={classes}
            id={id}
            type={type}
            placeholder={placeholder}
            onClick={onClick}
            onChange={handleOnChange}
            value={value}
            checked={checked}
            style={style}
            tabIndex={tabIndex}
            disabled={disabled}
            onKeyPress={handleKeyPress}
        ></Comp>
    );
}

export default Input;

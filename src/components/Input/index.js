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
}) {
    const handleOnChange = (e) => {
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
            onChange={(e) => handleOnChange(e)}
            value={value}
            checked={checked}
            style={style}
            tabIndex={tabIndex}
        ></Comp>
    );
}

export default Input;

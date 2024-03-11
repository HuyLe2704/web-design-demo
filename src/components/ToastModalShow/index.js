import ToastModal from '../Layout/components/ToastModal';
import { t } from 'i18next';

const ToastModalShow = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <ToastModal
            message={props.message}
            setShowToast={props.setShowToast}
            confirm={t(props.confirm)}
            handleConfirmToast={props.handleConfirmToast}
        />
    );
};

export default ToastModalShow;

export function handleNotification (props) {
    setNotificationMessage(props)
    setTimeout(() => {
        setNotificationMessage("")
    }, 5000);
}

export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
};

export default {handleNotification}
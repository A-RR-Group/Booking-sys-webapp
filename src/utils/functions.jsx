export function handleNotification (props) {
    setNotificationMessage(props)
    setTimeout(() => {
        setNotificationMessage("")
    }, 5000);
}

export default {handleNotification}
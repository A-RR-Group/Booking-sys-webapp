import CloseNotificationIcon from "../assets/Icons/closenotification.png"
import "../assets/css/components/Notification.css"

export default function Notification(props){
    return(
        <>
            <div className="NotificationContainer">
                <div>{props.message}</div>
                <img src={CloseNotificationIcon} alt="" />
            </div>
        </>
    )
}
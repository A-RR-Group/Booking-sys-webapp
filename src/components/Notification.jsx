import CloseNotificationIcon from "../assets/Icons/closenotification.png"
import "../assets/css/components/Notification.css"

export default function Notification(){
    return(
        <>
            <div className="NotificationContainer">
                <div>USER NOT FOUND</div>
                <img src={CloseNotificationIcon} alt="" />
            </div>
        </>
    )
}
import icons from "../../utils/icons"
import "../../assets/css/components/pages/Notification.css"

export default function Notification(props){
    return(
        <>
            <div className="NotificationContainer">
                <div>{props.message}</div>
                <img src={icons.CloseNotificationIcon} alt="" onClick={props.onClick}/>
            </div>
        </>
    )
}
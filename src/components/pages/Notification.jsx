import icons from "../../utils/icons"
import React from "react"
import "../../assets/css/components/pages/Notification.css"

export default function Notification(props){
    return(
        <>
            <div className="NotificationContainer">
                <div>{props.message}</div>
            </div>
        </>
    )
}
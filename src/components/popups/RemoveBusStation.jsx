import { useRef } from "react"
import "../../assets/css/components/popups/RemoveComponents.css"
import Button from "../forms/button"
import PopupTitle from "../pages/PopupTitle"

export default function RemoveBusStation(props) {
    const popupAll = useRef();
    const popupContainer = useRef();
    
    // Closing popup fuction
    const closePopup = (e) => {
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup([]);
        }
    }
    return(
        <>
        <div className="popupAll" ref={popupAll} onClick={(e) => closePopup(e)}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Permanently Remove Bus Station" color="#FF0000"/>
                <p className="warningDiv"><span className="warningText">Warning: </span> This action is not reversible and will lead to <span className="deletedSubject">{props.subject[1]}</span> being permanently disabled alongside all associated listings.</p>
                <Button text="DELETE" backgroundColor="#FF0000"></Button>
            </div>
        </div>
        </>
    )
}
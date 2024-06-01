import "../../assets/css/components/popups/AddEditComponents.css"
import icons from "../../utils/icons"
import Button from "../forms/button"
import PopupTitle from "../pages/PopupTitle"
import {ListFormInput} from "../forms/ListFormInput"
import { useRef } from "react"

export default function EditBus(props) {
    const popupAll = useRef()
    const popupContainer = useRef()

    // Closing popup fuction
    const closePopup = (e) => {
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup([])
        }
    }
    return(
        <>
        <div className="popupAll" ref={popupAll} onClick={(e) => closePopup(e)}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Edit Bus Info" color="#FF4D00"/>
                <p></p>
                <ListFormInput image={icons.BusIcon} name="Bus" type="text" blackets={props.subject[1]}/>
                <ListFormInput image={icons.LockIcon} name="Password" type="Password" blackets="Password"/>
                <ListFormInput image={icons.CapacityIcon} name="Capacity" type="number" blackets="Capacity"/>
                <p></p>
                <Button text="Edit Bus" backgroundColor="#FF4D00"></Button>
            </div>
        </div>
        </>
    )
}
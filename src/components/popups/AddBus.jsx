import "../../assets/css/components/popups/AddEditComponents.css"
import icons from "../../utils/icons"
import Button from "../forms/button"
import PopupTitle from "../pages/PopupTitle"
import {ListFormInput} from "../forms/ListFormInput"
import { useRef } from "react"

export default function AddBus(props) {
    const popupContainer = useRef()
    const popupAll = useRef()

    // Closing popup fuction
    const closePopup = (e) =>{
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup([]);
        }
    }
    return(
        <>
        <div className="popupAll" ref={popupAll} onClick={(e) => {closePopup(e)}}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Add New Bus" color="#FF4D00"/>
                <p></p>
                <ListFormInput image={icons.BusIcon} name="Bus" type="text" blackets="License Plate"/>
                <ListFormInput image={icons.LockIcon} name="Password" type="password" blackets="Driver's password"/>
                <ListFormInput image={icons.CapacityIcon} name="Capacity" type="number" blackets="Number of seats"/>
                <p></p>
                <Button text="Add Bus" backgroundColor="#FF4D00"></Button>
            </div>
        </div>
        </>
    )
}
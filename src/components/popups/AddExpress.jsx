import "../../assets/css/components/popups/AddEditComponents.css"
import icons from "../../utils/icons"
import Button from "../forms/button"
import PopupTitle from "../pages/PopupTitle"
import {ListFormInput} from "../forms/ListFormInput"
import { useRef } from "react"

export default function AddExpress(props) {
    const popupContainer = useRef()
    const popupAll = useRef()

    // Closing popup fuction
    const closePopup = (e) =>{
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup('');
        }
    }
    
    return(
        <>
        <div className="popupAll" ref={popupAll} onClick={(e) => {closePopup(e)}}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Add Express" color="#FF4D00"/>
                <p></p>
                <ListFormInput image={icons.BusIcon} name="Express" type="text" blackets="Express name"/>
                <ListFormInput image={icons.MailIcon} name="Email" type="email" blackets="Email adress"/>
                <ListFormInput image={icons.PhoneIcon} name="Number" type="text" blackets="Phone number"/>
                <p></p>
                <Button text="Add Express" backgroundColor="#FF4D00"></Button>
            </div>
        </div>
        </>
    )
}
import "../../assets/css/components/popups/AddEditComponents.css"
import BusIcon from "../../assets/Icons/bus.png"
import MailIcon from "../../assets/Icons/mail.png"
import PhoneIcon from "../../assets/Icons/phone.png"
import Button from "../button"
import PopupTitle from "../PopupTitle"
import ListFormInput from "../ListFormInput"

export default function AddExpress() {
    return(
        <>
        <div className="popupAll">
            <div className="popupContainer">
                <PopupTitle text="Add Express" color="#FF4D00"/>
                <p></p>
                <ListFormInput image={BusIcon} name="Express" type="text" blackets="Express name"/>
                <ListFormInput image={MailIcon} name="Email" type="email" blackets="Email adress"/>
                <ListFormInput image={PhoneIcon} name="Number" type="text" blackets="Phone number"/>
                <p></p>
                <Button text="Add Express" backgroundColor="#FF4D00"></Button>
            </div>
        </div>
        </>
    )
}
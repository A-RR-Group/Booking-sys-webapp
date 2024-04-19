import "../../assets/css/components/popups/AddEditComponents.css"
import BusStationIcon from "../../assets/Icons/bus-station.png"
import Button from "../button"
import PopupTitle from "../PopupTitle"
import ListFormInput from "../ListFormInput"
import { useRef } from "react"

export default function EditStation(props) {
    const popupAll = useRef()
    const popupContainer = useRef()

    const closePopup = (e) => {
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup()
        }
    }
    return(
        <>
        <div className="popupAll" ref={popupAll} onClick={(e) => closePopup(e)}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Edit Bus-Station" color="#FF4D00"/>
                <p></p>
                <ListFormInput image={BusStationIcon} name="Station" type="text" blackets="Bus station name"/>
                <p></p>
                <Button text="Edit Station" backgroundColor="#FF4D00"></Button>
            </div>
        </div>
        </>
    )
}
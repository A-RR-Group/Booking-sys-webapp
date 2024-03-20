import "../../assets/css/components/popups/AddEditComponents.css"
import BusStationIcon from "../../assets/Icons/bus-station.png"
import Button from "../button"
import PopupTitle from "../PopupTitle"
import ListFormInput from "../ListFormInput"

export default function EditStation() {
    return(
        <>
        <div className="popupAll">
            <div className="popupContainer">
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
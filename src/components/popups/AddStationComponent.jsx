import "../../assets/css/components/popups/AddEditComponents.css"
import icons from "../../utils/icons"
import Button from "../forms/button"
import PopupTitle from "../pages/PopupTitle"
import {ListFormInput} from "../forms/ListFormInput"
import { useRef } from "react"
import { addStation } from "../../utils/apiFunctions"

export default function AddStation(props) {
    const popupContainer = useRef();
    const popupAll = useRef();
    const nameRef = useRef();

    // Closing popup fuction
    const closePopup = (e) =>{
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup([]);
        }
    }

    // Adding station
    const add = async() => {
        const name = nameRef.current.value;
        if(name){
            try {
                const access = await addStation(name);
                if (!access.errors) {
                    props.togglePopup([]);
                    props.setStations(access.stations);
                } else if (access.errors){
                    props.notification(access.errors[0].message);
                } else {
                    props.notification("Failed to add station");
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }else{
            props.notification("All fields are required")
        }
        
    };

    return(
        <>
        <div className="popupAll" ref={popupAll} onClick={(e) => {closePopup(e)}}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Add Bus-Station" color="#FF4D00"/>
                <p></p>
                <ListFormInput ref={nameRef} image={icons.BusStationIcon} name="Station" type="text" blackets="Bus station name"/>
                <p></p>
                <Button text="Add Station" backgroundColor="#FF4D00" onClick={add}></Button>
            </div>
        </div>
        </>
    )
}
import React, { useRef } from "react"
import "../../assets/css/components/popups/RemoveComponents.css"
import { removeStation } from "../../utils/apiFunctions";
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

    // Deleting station
    const remove = async() => {
        var id = props.subject[2];

        try {
            const access = await removeStation(id);
            if (!access.errors) {
                props.togglePopup([]);
                props.setStations(access.stations);
            } else if (access.errors){
                props.notification(access.errors[0].message);
            } else {
                props.notification("Something went wrong");
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return(
        <>
        <div className="popupAll" ref={popupAll} onClick={(e) => closePopup(e)}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Permanently Remove Bus Station" color="#FF0000"/>
                <p className="warningDiv"><span className="warningText">Warning: </span> This action is not reversible and will lead to <span className="deletedSubject">{props.subject[1]}</span> being permanently disabled alongside all associated listings.</p>
                <Button text="DELETE" backgroundColor="#FF0000" onClick={remove}></Button>
            </div>
        </div>
        </>
    )
}
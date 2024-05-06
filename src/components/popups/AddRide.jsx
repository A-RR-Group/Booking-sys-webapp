import React, { useRef, useState } from "react";
import "../../assets/css/components/popups/RideSubComponents.css";
import "../../assets/css/components/popups/AddEditComponents.css";
import icons from "../../utils/icons";
import Button from "../forms/button";
import PopupTitle from "../pages/PopupTitle";
import {ListFormInput} from "../forms/ListFormInput";
import { RideRepeat, TimeInput } from "./RideSubComponents";

export default function AddRide(props) {
    const popupContainer = useRef();
    const popupAll = useRef();
    const [activeSubPopup, setActiveSubPopup] = useState('');

    // Closing popup fuction
    const closePopup = (e) => {
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup();
        }
    }
    const handleSubPopup = (popupName) => {
        setActiveSubPopup(popupName);
    };

    return (
        <>
            <div className="popupAll" ref={popupAll}onClick={(e) => {closePopup(e)}}>
                <div className="popupContainer"ref={popupContainer}>
                    {/* Popup Title */}
                    <PopupTitle text="Add New Ride Listing" color="#FF4D00"/>
                    <p></p>
                    {/* Popup Inputs */}
                    <ListFormInput image={icons.CurrentLocationIcon} name="From" type="text" blackets="Departure Point"/>
                    <img className="LocationsDashedLine" src={icons.DashedLineIcon}/>
                    <ListFormInput image={icons.LocationIcon} name="To" type="text" blackets="Destination"/>
                    <ListFormInput image={icons.DollarIcon} name="Price" type="text" blackets="RWF"/>
                    <ListFormInput image={icons.BusIcon} name="Bus" type="text" blackets="License Plate"/>
                    <ListFormInput image={icons.ClockIcon} name="Time" type="text" blackets="Departure Time" disabled="disabled" onClick={() => handleSubPopup("Time")} />
                    {/* Time sub input */}
                    {activeSubPopup === "Time" ? <TimeInput togglePopup={setActiveSubPopup}/> : ''}

                    <ListFormInput image={icons.RepeatIcon} name="Repeats" type="text" blackets="Does not repeat" disabled="disabled" onClick={() => handleSubPopup("Repeat")} />
                    {/* Time sub input */}
                    {activeSubPopup === "Repeat" ? <RideRepeat togglePopup={setActiveSubPopup}/> : ''}
                    <p></p>
                    <Button text="Add Ride" backgroundColor="#FF4D00"/>
                </div>
            </div>
        </>
    );
}

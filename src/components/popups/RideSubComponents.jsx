import { useRef, useState } from "react";
import "../../assets/css/components/popups/RideSubComponents.css"

// Exported componets
const RideRepeat = (props) =>{
    const RideRepeatDiv = useRef();
    
    return(
        <>
        <div className="RideRepeat" ref={RideRepeatDiv} >
            <div><p className="RideRepeatBy">Every day</p></div>
            <div><p className="RideRepeatBy">Every weekday</p> <p>Mon-Fri</p></div>
            <div><p className="RideRepeatBy">Every weekend</p> <p>Sat & Sun</p></div>
            <div><p className="RideRepeatBy">Every week</p> <p>on Fri</p></div>
            <div><p className="RideRepeatBy">Every month</p> <p> on the 24th</p></div>
            <div><p className="RideRepeatBy">Every year</p> <p>on Feb 24th </p></div>
            <div><p className="RideRepeatBy">Does not repeat</p> <p>Default</p></div>
        </div>
        </>
    )
}

const TimeInput = (props) => {
    const currentDate = new Date();
    const [hours, setHours] = useState(currentDate.getHours());
    const [minutes, setMinutes] = useState(currentDate.getMinutes());

    // Handle time functions
    const handleHourChange = (e) => {
        const newHours = parseInt(e.target.value);
        if (!isNaN(newHours) && newHours >= 0 && newHours <= 23) {
            setHours(newHours);
        } else if (isNaN(newHours) || newHours < 0) {
            setHours(0);
        } else {
            setHours(23);
        }
    };

    const handleMinuteChange = (e) => {
        const newMinutes = parseInt(e.target.value);
        if (!isNaN(newMinutes) && newMinutes >= 0 && newMinutes <= 59) {
            setMinutes(newMinutes);
        } else if (isNaN(newMinutes) || newMinutes < 0) {
            setMinutes(0);
        } else {
            setMinutes(59);
        }
    };

    return (
        <div className="TimeInput">
            <div>
                <p>Set Time:</p>
            </div>
            <div className="TimeInputDiv">
                <input type="text" value={hours} onChange={handleHourChange} /> <p> : </p>{" "}
                <input type="text" value={minutes} onChange={handleMinuteChange} />
            </div>
        </div>
    );
};

export { RideRepeat, TimeInput }
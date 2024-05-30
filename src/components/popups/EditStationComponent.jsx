import "../../assets/css/components/popups/AddEditComponents.css"
import icons from "../../utils/icons"
import Button from "../forms/button"
import PopupTitle from "../pages/PopupTitle"
import {ListFormInput} from "../forms/ListFormInput"
import { useRef } from "react"
import { editStation } from "../../utils/apiFunctions"

export default function EditStation(props) {
    const popupAll = useRef()
    const popupContainer = useRef()
    const nameRef = useRef();

    // Closing popup fuction
    const closePopup = (e) => {
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup([])
        }
    }
    
    // Editing station
    const edit = async() => {
        var id = props.subject[2];
        var name = nameRef.current.value

        if (name){
            try {
                const access = await editStation(id, name);
                if (!access.errors) {
                    props.notification("Successfully edited");
                    props.togglePopup([]);
                    window.location.reload()
                } else if (access.errors){
                    props.notification(access.errors[0].message);
                } else {
                    props.notification("Something went wrong");
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
        <div className="popupAll" ref={popupAll} onClick={(e) => closePopup(e)}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Edit Bus-Station" color="#FF4D00"/>
                <p></p>
                <ListFormInput ref={nameRef} image={icons.BusStationIcon} name="Station" type="text" blackets={props.subject[1]}/>
                <p></p>
                <Button text="Edit Station" backgroundColor="#FF4D00" onClick={edit}></Button>
            </div>
        </div>
        </>
    )
}
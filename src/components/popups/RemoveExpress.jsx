import { useRef } from "react"
import "../../assets/css/components/popups/RemoveComponents.css"
import { removeExpress } from "../../utils/apiFunctions";
import Button from "../forms/button"
import PopupTitle from "../pages/PopupTitle"

export default function RemoveExpress(props) {
    const popupAll = useRef();
    const popupContainer= useRef();

    // Closing popup fuction
    const closePopup = (e) => {
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup([]);
        }
    }

    // Deleting express
    const remove = async() => {
        var id = props.subject[2];

        try {
            const access = await removeExpress(id);
            if (!access.errors) {
                props.togglePopup([]);
                props.setExpresses(access.expresses)
            } else if (access.errors){
                props.notification(access.errors[0].message);
            } else {
                props.notification("Something went wrong");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <>
        <div className="popupAll" ref={popupAll} onClick={(e) => closePopup(e)}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Permanently Remove Express" color="#FF0000"/>
                <p className="warningDiv"><span className="warningText">Warning:</span> This action is not reversible and will lead to <span className="deletedSubject">{props.subject[1]}</span> being disabled alongside all it’s buses and listings.</p>
                <Button text="DELETE" backgroundColor="#FF0000" onClick={remove}></Button>
            </div>
        </div>
        </>
    )
}
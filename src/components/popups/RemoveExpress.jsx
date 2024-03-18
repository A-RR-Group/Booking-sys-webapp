import "../../assets/css/components/popups/RemoveComponents.css"
import Button from "../button"
import PopupTitle from "./PopupTitle"

export default function RemoveExpress() {
    return(
        <>
        <div className="popupAll">
            <div className="popupContainer">
                <PopupTitle text="Permanently Remove Express" color="#FF0000"/>
                <p className="warningDiv"><span className="warningText">Warning:</span> This action is not reversible and will lead to <span className="deletedSubject">Express Name</span> being disabled alongside all it’s buses and listings.</p>
                <Button text="DELETE" backgroundColor="#FF0000"></Button>
            </div>
        </div>
        </>
    )
}
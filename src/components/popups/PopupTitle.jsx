import "../../assets/css/components/popups/popupTitle.css"
import Button from "../button"

export default function popupTitle(props) {
    return(
        <>
        <div className="popupAll">
            <div className="popupContainer">
                <div className="popupTitleDiv" style={{color: "#FF4D00", backgroundColor: "#FF4D0026"}}>Bruce</div>
                <div className="listingInput">
                    <img src="" alt="" />
                    <p>Input:</p>
                    <input placeholder="text" />
                    <p className="inputExtraInfo">(Input extra)</p>
                </div>
                <Button text="Add Express" backgroundColor="#FF4D00"></Button>
            </div>
        </div>
        </>
    )
}
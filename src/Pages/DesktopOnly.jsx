import DesktopIcon from "../Icons/desktop.png"
import LeftIcon from "../Icons/left-arrow.png"
import "../css/desktoponly/index.css"

export default function DesktopOnly(){
    return(
        <>
        <div className="DesktopOnlyContainer">
            <img src={DesktopIcon} className="DesktopIcon" alt="" />
            <p>This page is desktop only, Go back home or <br /> try visiting from a desktop or laptop device.</p>
            <div className="GoBackLink"> <img src={LeftIcon} alt="" /> &nbsp;Go back home</div>
        </div>
        </>
    )
}
import DesktopIcon from "../../assets/Icons/desktop.png"
import LeftIcon from "../../assets/Icons/left-arrow.png"
import "../../assets/css/other/DesktopOnly.css"

export default function DesktopOnly(){
    return(
        <>
        <div className="DesktopOnlyContainer">
            <img src={DesktopIcon} className="DesktopIcon" alt="" />
            <p>This page is desktop only, Go back home or <br /> try visiting from a desktop or laptop device.</p>
            <div className="GoBackLink">
                <div>
                <img src={LeftIcon} alt="" /> &nbsp;Go back home
                </div>
            </div>
        </div>
        </>
    )
}
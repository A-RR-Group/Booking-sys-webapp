import icons from "../../utils/icons"
import React from "react"
import "../../assets/css/other/DesktopOnly.css"

export default function DesktopOnly(){
    return(
        <>
        <div className="DesktopOnlyContainer">
            <img src={icons.DesktopIcon} className="DesktopIcon" alt="" />
            <p>This page is desktop only, Go back home or <br /> try visiting from a desktop or laptop device.</p>
            <div className="GoBackLink">
                <div>
                <img src={icons.LeftIcon} alt="" /> &nbsp;Go back home
                </div>
            </div>
        </div>
        </>
    )
}
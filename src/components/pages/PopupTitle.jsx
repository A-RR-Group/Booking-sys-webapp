import "../../assets/css/components/popups/popupTitle.css"
import React from "react"

export default function PopupTitle(props){
    const style = {
        margin: props.position === "center" ? "auto" : "",
        color: `${props.color}`,
        cursor: props.cursor === 'pointer' ? "pointer" : ""
    };

    return(
        <>
            <div className="popupTitle" style={style} onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>{props.text}</div>
        </>
    )
}
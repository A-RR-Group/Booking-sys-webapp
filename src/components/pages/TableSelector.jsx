import "../../assets/css/components/pages/TableSelector.css";
import React from "react"

export default function TableSelector(props) {
    // Checking the table selectors' states and positions + setting their styles
    let cardStyle = {
        backgroundColor: props.state === "active" ? "#FF4D0026" : "",
        fontWeight: props.state === "active" ? "bold" : "",
        borderRadius: props.position === "alone" ? "10px" : "",
        borderTopLeftRadius: props.position === "front" || props.position === "alone" ? "9px" : "",
        borderBottomLeftRadius: props.position === "front" || props.position === "alone" ? "9px" : "",
        borderTopRightRadius: props.position === "end" || props.position === "alone" ? "9px" : "",
        borderBottomRightRadius: props.position === "end" || props.position === "alone" ? "9px" : "",
        borderRight: props.position === "front" || props.position === "middle" || props.position === "alone" ? "0.5px solid #FF4D00" : ""
    };

    if (props.position === "end" || props.position === "middle") {
        cardStyle = { ...cardStyle, borderLeft: "none" };
    }

    return (
        <div className="TableSelectorContainer" onClick={props.onClick} state={props.state} style={cardStyle}> {props.name} </div>
    );
}

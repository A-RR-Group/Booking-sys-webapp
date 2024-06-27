import "../../assets/css/components/pages/StatisticCard.css"
import React from "react"

export default function StatisticCard(props) {
    // Checking the card position and setting it's styles
    const cardStyle = {
        borderRadius: props.position === "alone" ? "20px" : "",
        borderRadius: props.position === "middle" ? "none" : "",
        borderBottomRightRadius: props.position === "end" ? "20px" : "",
        borderTopRightRadius: props.position === "end" ? "20px" : "",
        borderRight: props.position === "end" ? "none" : "",
        borderBottomLeftRadius: props.position === "front" ? "20px" : "",
        borderTopLeftRadius: props.position === "front" ? "20px" : ""
    };

    return (
        <div className="StatisticCard" style={cardStyle}>
            <h1>{props.numbers}</h1>
            <p>{props.category}</p>
        </div>
    );
}
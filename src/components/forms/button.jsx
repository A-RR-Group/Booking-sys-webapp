import "../../assets/css/components/forms/button.css";
import React from "react"

export default function Button(props) {
    return (
        <button className="button" style={{ backgroundColor: `${props.backgroundColor}` }} onClick={props.onClick}>
            {props.text}
        </button>
    );
}

import icons from "../../utils/icons"
import React from "react"
import "../../assets/css/components/pages/AdminAdd.css";

export default function AdminAdd(props){
    const style = {
        display: props.state === "active" ? "flex" : "none",
    };

    return(
        <div className="AdminAddDiv" style={style} onClick={props.clickHandler}>
            <img src={icons.AddIcon} alt="Add Icon" /> {props.text}
        </div>
    );
}
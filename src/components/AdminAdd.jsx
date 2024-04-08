import AddIcon from "../assets/Icons/add.png"

import "../assets/css/components/AdminAdd.css"

export default function AdminAdd(props){
    const style = {
        display: props.state === "active" ? "flex" : "",
        display: props.state !== "active" ? "none" : "",
    }
    return(
        <>
        <div className="AdminAddDiv" style={style}><><img src={AddIcon} /> {props.text}</></div>
        </>
    )
}
import AddIcon from "../assets/Icons/add.png";
import "../assets/css/components/AdminAdd.css";

export default function AdminAdd(props){
    const style = {
        display: props.state === "active" ? "flex" : "none",
    };

    return(
        <div className="AdminAddDiv" style={style} onClick={props.clickHandler}>
            <img src={AddIcon} alt="Add Icon" /> {props.text}
        </div>
    );
}
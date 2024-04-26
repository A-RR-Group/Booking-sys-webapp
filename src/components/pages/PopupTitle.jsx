import "../../assets/css/components/popups/popupTitle.css"

export default function PopupTitle(props){
    const style = {
        margin: props.position === "center" ? "auto" : "",
        color: `${props.color}`
    };

    return(
        <>
            <div className="popupTitle" style={style}>{props.text}</div>
        </>
    )
}
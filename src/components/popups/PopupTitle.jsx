import "../../assets/css/components/popups/PopupTitle.css"

export default function PopupTitle(props){
    return(
        <>
            <div className="popupTitle" style={{color: `${props.color}`}}>{props.text}</div>
        </>
    )
}
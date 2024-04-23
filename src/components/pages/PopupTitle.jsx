import "../../assets/css/components/pages/popupTitle.css"

export default function PopupTitle(props){
    return(
        <>
            <div className="popupTitle" style={{color: `${props.color}`}}>{props.text}</div>
        </>
    )
}
import "./css/button.css"

export default function Button(props){
    return(
        <>
        <button className="button" style={{backgroundColor: `${props.backgroundColor}`}}>{props.text}</button>
        </>
    )
}
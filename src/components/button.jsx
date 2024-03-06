import "./css/button.css"

function Button(props){
    return(
        <>
        <button className="button" style={{backgroundColor: `${props.backgroundColor}`}}>{props.text}</button>
        </>
    )
}

export default Button;
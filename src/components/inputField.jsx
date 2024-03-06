import "./css/inputField.css"

export default function InputField (props){
    return(
        <>
        <div className="FieldContainer">
            <div className="FieldImageDiv">
                <img src={props.image} alt=""/>
            </div>
            <div className="InputDiv">
                <input  autocomplete="off" type={props.type} placeholder={props.placeholder}/>
            </div>
        </div>
        </>
    )
}
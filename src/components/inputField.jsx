import "./css/inputField.css"

function InputField (props){

    return(
        <>
        <div className="FieldContainer">
            <div className="FieldImageDiv">
                <img src={props.image} alt="" />
            </div>
            <div className="InputDiv">
                <input type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
        </>
    )
}

export default InputField;
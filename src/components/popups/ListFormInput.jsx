import "../../assets/css/components/popups/ListFormInput.css"

export default function ListFormInput(props){
    return(
        <>
            <div className="listFormInputDiv">
                <div className="listInputDescriptionDiv">
                    <img src={props.image} alt="" />
                    <p className="listInputName">{props.name}:</p>
                </div>
                <input className="listInput" type={props.type} placeholder={`Click to edit (${props.blackets})`}/>
            </div>
        </>
    )
}
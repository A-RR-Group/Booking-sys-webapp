import "../../assets/css/components/forms/inputField.css"
import React, { forwardRef } from 'react';

const InputField = forwardRef((props, ref) => {
    return(
        <>
        <div className="FieldContainer">
            <div className="FieldImageDiv">
                <img src={props.image} alt=""/>
            </div>
            <div className="InputDiv">
                <input autoComplete="off" ref={ref} type={props.type} placeholder={props.placeholder}/>
            </div>
        </div>
        </>
    )
});

export default InputField;
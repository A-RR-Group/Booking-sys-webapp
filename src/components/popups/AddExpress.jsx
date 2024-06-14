import "../../assets/css/components/popups/AddEditComponents.css"
import icons from "../../utils/icons"
import Button from "../forms/button"
import PopupTitle from "../pages/PopupTitle"
import {ListFormInput} from "../forms/ListFormInput"
import { useRef } from "react"
import { addExpress } from "../../utils/apiFunctions"

export default function AddExpress(props) {
    const popupContainer = useRef()
    const popupAll = useRef()
    const nameRef =  useRef()
    const emailRef =  useRef()
    const phoneRef =  useRef()

    // Closing popup fuction
    const closePopup = (e) =>{
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup([]);
        }
    }

    // Adding express
    const add = async() => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        if(name && email && phone){
            
            if(validateEmail(email)){
                try {
                    const access = await addExpress(name, email, phone);
                    if (!access.errors) {
                        props.togglePopup([]);
                        props.setExpresses(access.expresses);
                    } else if (access.errors){
                        props.notification(access.errors[0].message);
                    } else {
                        props.notification("Failed to add express");
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }else{
                props.notification("Invalid email");
            }
        }else{
            props.notification("All fields are required");
        }
        
    };
    
    return(
        <>
        <div className="popupAll" ref={popupAll} onClick={(e) => {closePopup(e)}}>
            <div className="popupContainer" ref={popupContainer}>
                <PopupTitle text="Add Express" color="#FF4D00"/>
                <p></p>
                <ListFormInput image={icons.BusIcon} name="Express" type="text" blackets="Express name" ref={nameRef}/>
                <ListFormInput image={icons.MailIcon} name="Email" type="email" blackets="Email adress" ref={emailRef}/>
                <ListFormInput image={icons.PhoneIcon} name="Number" type="text" blackets="Phone number" ref={phoneRef}/>
                <p></p>
                <Button text="Add Express" backgroundColor="#FF4D00" onClick={add}></Button>
            </div>
        </div>
        </>
    )
}
import icons from "../../utils/icons"
import InputField from "../../components/forms/inputField"
import PopupTitle from "../../components/pages/PopupTitle"
import Button from "../../components/forms/button"

import "../../assets/css/express/Login.css"
import { useNavigate } from "react-router-dom"

export default function AddExpress(props) {

    const navigate = useNavigate();

    // Closing popup fuction
    const closePopup = (e) =>{
        if(!popupContainer.current.contains(e.target)){
            props.togglePopup('');
        }
    }

    const handleLogin = () => {
        navigate('/express/dashboard');
    }
    
    return(
        <>
        <div className="popupAll" onClick={(e) => {closePopup(e)}}>
            <div className="popupContainer">
                {/*  Login container  */}
                <PopupTitle text="Express Login" color="#FF4D00" position="center"/>
                <div className="InputsDiv">
                    <InputField image={icons.MailIcon} placeholder="Email address" type="email"></InputField>
                    <InputField image={icons.LockIcon} placeholder="Password" type="password"></InputField>
                </div>
                <Button text="Login" backgroundColor="#FF4D00" onClick={() => handleLogin()}></Button>
            </div>
        </div>
        </>
    )
}
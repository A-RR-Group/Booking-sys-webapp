import icons from "../../utils/icons"
import InputField from "../../components/forms/inputField"
import PopupTitle from "../../components/pages/PopupTitle"
import Button from "../../components/forms/button"
import "../../assets/css/express/Login.css"
import DesktopOnly from "../Other/DesktopOnly"
import React, { useEffect, useState } from "react"

export default function ExpressLogin(props) {
    const [width, setWidth] = useState(window.innerWidth);

    // After page load on resize set new width 
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { login } = props;

    const handleLogin = (param) => {
        login(param)
    }

    // Check width and render appropiate component
    if (width < 700) {
        return <DesktopOnly/>
    }else{
    
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
                    <Button text="Login" backgroundColor="#FF4D00" onClick={() => handleLogin(true)}></Button>
                </div>
            </div>
            </>
        )
    }
}
import React, { useState, useEffect } from 'react';
import icons from "../../utils/icons"
import InputField from "../../components/forms/inputField"
import Button from "../../components/forms/button"
import "../../assets/css/admin/LoginSignup.css"
import DesktopOnly from "../Other/DesktopOnly"

export default function Adminlogin(props){
    const { login } = props
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

    const handleLogin = (param) => {
        login(param);
    }

    // Check width and render appropiate component
    if (width < 700) {
        return <DesktopOnly/>
    }else{
        return(
            <div className="all">
                {/*  Login container  */}
                <div className="LoginContainer">
                    <img src={icons.BusIcon} className="LogoOrange" alt="" />
                    <div className="InputsDiv">
                        <InputField image={icons.MailIcon} placeholder="Email address" type="email"></InputField>
                        <InputField image={icons.LockIcon} placeholder="Password" type="password"></InputField>
                    </div>
                    <Button text="Login" backgroundColor="#FF4D00" onClick={() => handleLogin(true)}></Button>
                </div>
                {/*  Under link to go back  */}
                <div className="GoBackLink">
                    <div>
                    <img src={icons.LeftIcon} alt="" /> &nbsp; Lost your way? Go back to home
                    </div>
                </div>
            </div>
        );
    }
}

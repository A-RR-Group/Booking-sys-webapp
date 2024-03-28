import React, { useState, useEffect } from 'react';
import MailIcon from "../../assets/Icons/mail.png"
import LockIcon from "../../assets/Icons/lock.png"
import BusIcon from "../../assets/Icons/bus.png"
import LeftIcon from "../../assets/Icons/left-arrow.png"
import InputField from "../../components/inputField"
import Button from "../../components/button"
import "../../assets/css/admin/LoginSignup.css"
import DesktopOnly from "../Other/DesktopOnly"

export default function Adminlogin(){
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

    if (width < 700) {
        return <DesktopOnly/>
    }else{
        return(
            <div className="all">
                <div className="LoginContainer">
                    <img src={BusIcon} className="LogoOrange" alt="" />
                    <div className="InputsDiv">
                        <InputField image={MailIcon} placeholder="Email address" type="email"></InputField>
                        <InputField image={LockIcon} placeholder="Password" type="password"></InputField>
                    </div>
                    <Button text="Login" backgroundColor="#FF4D00"></Button>
                </div>
                <div className="GoBackLink">
                    <div>
                    <img src={LeftIcon} alt="" /> &nbsp; Lost your way? Go back to home
                    </div>
                </div>
            </div>
        );
    }
}
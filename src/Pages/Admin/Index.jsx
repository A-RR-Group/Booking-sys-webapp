import React, { useState, useEffect } from 'react';
import icons from "../../utils/icons"
import InputField from "../../components/forms/inputField"
import Button from "../../components/forms/button"
import "../../assets/css/admin/LoginSignup.css"
import DesktopOnly from "../Other/DesktopOnly"
import { useNavigate } from 'react-router-dom';

export default function Adminlogin(){
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

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

    const handleLogin = () => {
        navigate('/dashboard');
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
                    <Button text="Login" backgroundColor="#FF4D00" onClick={() => handleLogin()}></Button>
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

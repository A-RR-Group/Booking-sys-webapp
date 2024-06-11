import React, { useState, useEffect, useRef } from 'react';
import icons from "../../utils/icons"
import InputField from "../../components/forms/inputField"
import Button from "../../components/forms/button"
import "../../assets/css/admin/LoginSignup.css"
import DesktopOnly from "../Other/DesktopOnly"
import { adminLogin } from '../../utils/apiFunctions';
import Notification from '../../components/pages/Notification';
import { validateEmail } from '../../utils/functions';

export default function Adminlogin(props){
    const [width, setWidth] = useState(window.innerWidth);
    const [notificationMessage, setNotificationMessage] = useState("");
    const emailAddressRef = useRef(null);
    const passwordRef = useRef(null);

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

    const login = async (email, password) => {
        try {
            const access = await adminLogin(email, password);
            if (!access.errors) {
                localStorage.setItem("access_token", access.access_token)
                localStorage.setItem("user", access.username);
                props.login(true);
            } else {
                handleNotification(access.errors[0].message);
            }
        } catch (error) {
            throw error;
        }
        
    };

    function handleNotification (props) {
        setNotificationMessage(props)
        setTimeout(() => {
            setNotificationMessage("")
        }, 5000);
    }
    function closeNotification () {
        setNotificationMessage("")
    }

    const handleLogin = () => {
        const email = emailAddressRef.current.value;
        const password = passwordRef.current.value;
        if (email && password){
            if(validateEmail(email)){
                login(email, password);
            }else{
                handleNotification("Invalid email");
            }
        }else{
            handleNotification("All fields are required")
        }
    };
    
    if (width < 700) {
    // Check width and render appropiate component
        return <DesktopOnly/>
    }else{
        return(
            <div className="all">
                { notificationMessage ? <Notification message={notificationMessage} onClick={closeNotification}/> : "" }
                {/*  Login container  */}
                <div className="LoginContainer">
                    <img src={icons.BusIcon} className="LogoOrange" alt="" />
                    <div className="InputsDiv">
                        <InputField ref={emailAddressRef} image={icons.MailIcon} placeholder="Email address" type="email"></InputField>
                        <InputField ref={passwordRef} image={icons.LockIcon} placeholder="Password" type="password"></InputField>
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

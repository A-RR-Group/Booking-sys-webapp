import icons from "../../utils/icons";
import InputField from "../../components/forms/inputField";
import PopupTitle from "../../components/pages/PopupTitle";
import Button from "../../components/forms/button";
import "../../assets/css/express/Login.css";
import DesktopOnly from "../Other/DesktopOnly";
import React, { useEffect, useRef, useState } from "react";
import { validateEmail } from "../../utils/functions";
import Notification from "../../components/pages/Notification";
import { expressLogin } from "../../utils/apiFunctions";

export default function ExpressLogin(props) {
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

    function handleNotification (props) {
        setNotificationMessage(props)
        setTimeout(() => {
            setNotificationMessage("")
        }, 5000);
    }

    const handleLogin = async () => {
        const email = emailAddressRef.current.value;
        const password = passwordRef.current.value;
        console.log(email);
        console.log(password);
        if (email && password) {
            if (validateEmail(email)) {
                try {
                    const access = await expressLogin(email, password);
                    if (!access.errors) {
                        localStorage.setItem("express_access", access.access_token)
                        localStorage.setItem("user", access.username);
                        props.login(true);
                    } else {
                        handleNotification(access.errors[0].message);
                    }
                } catch (error) {
                    throw error;
                }
            } else {
                handleNotification("Invalid email");
            }
        } else {
            handleNotification("All fields are required");
        }
    };

    // Check width and render appropriate component
    if (width < 700) {
        return <DesktopOnly />;
    } else {
        return (
            <div className="popupAll">
            { notificationMessage ? <Notification message={notificationMessage} /> : "" }
                <div className="popupContainer">
                    {/* Login container */}
                    <PopupTitle text="Express Login" color="#FF4D00" position="center" />
                    <div className="InputsDiv">
                        <InputField image={icons.MailIcon} ref={emailAddressRef} placeholder="Email address" type="email"></InputField>
                        <InputField image={icons.LockIcon} ref={passwordRef} placeholder="Password" type="password"></InputField>
                    </div>
                    <Button text="Login" backgroundColor="#FF4D00" onClick={handleLogin}></Button>
                </div>
            </div>
        );
    }
}

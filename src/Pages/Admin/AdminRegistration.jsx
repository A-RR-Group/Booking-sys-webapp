import icons from "../../utils/icons"
import InputField from "../../components/forms/inputField"
import Button from "../../components/forms/button"
import "../../assets/css/admin/LoginSignup.css"
import DesktopOnly from "../Other/DesktopOnly";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { adminSignup } from "../../utils/apiFunctions";
import { useRef } from "react";
import { validateEmail } from "../../utils/functions";
import Notification from "../../components/pages/Notification";

export default function AdminRegistration(){
    
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [notificationMessage, setNotificationMessage] = useState("");
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

    // Signing up 
    const signup = async() => {
        var username = usernameRef.current.value
        var email = emailRef.current.value
        var password = passwordRef.current.value
        if (username && email && password){
            if(validateEmail(email)){
                try {
                    const access = await adminSignup(username, email, password);
                    if (!access.errors) {
                        handleNotification(access.message);
                        setTimeout(() => {
                            navigate('/admin');
                        }, 2000);
                    } else if (access.errors){
                        handleNotification(access.errors[0].message);
                    } else {
                        handleNotification("Something went wrong");
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }else{
                handleNotification("Invalid email");
            }
        }else{
            handleNotification("All fields are required");
        }
        
    };

    function handleNotification (props) {
        setNotificationMessage(props)
        setTimeout(() => {
            setNotificationMessage("")
        }, 5000);
    }

    // Check width and render appropiate component
    if (width < 700) {
        return <DesktopOnly/>
    }else{
        return(
            <div className="all">
                {/* Notification container */}
                { notificationMessage ? <Notification message={notificationMessage}/> : "" }
                {/*  Registration container  */}
                <div className="LoginContainer">
                    <img src={icons.BusIcon} className="LogoOrange" alt="" />
                    <div className="InputsDiv">
                        <InputField ref={usernameRef} image={icons.UserIcon} placeholder="User name" type="text"></InputField>
                        <InputField ref={emailRef} image={icons.MailIcon} placeholder="Email address" type="email"></InputField>
                        <InputField ref={passwordRef} image={icons.LockIcon} placeholder="Password" type="password"></InputField>
                    </div>
                    <Button text="Register" backgroundColor="#FF4D00" onClick={signup}></Button>
                </div>
            </div>
        );
    }
}
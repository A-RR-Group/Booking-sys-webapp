import icons from "../../utils/icons"
import InputField from "../../components/forms/inputField"
import Button from "../../components/forms/button"
import "../../assets/css/admin/LoginSignup.css"
import DesktopOnly from "../Other/DesktopOnly";
import { useEffect, useState } from "react";

export default function AdminRegistration(){
    
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

    // Check width and render appropiate component
    if (width < 700) {
        return <DesktopOnly/>
    }else{
        return(
            <div className="all">
                {/*  Registration container  */}
                <div className="LoginContainer">
                    <img src={icons.BusIcon} className="LogoOrange" alt="" />
                    <div className="InputsDiv">
                        <InputField image={icons.UserIcon} placeholder="User name" type="text"></InputField>
                        <InputField image={icons.MailIcon} placeholder="Email address" type="email"></InputField>
                        <InputField image={icons.LockIcon} placeholder="Password" type="password"></InputField>
                    </div>
                    <Button text="Register" backgroundColor="#FF4D00"></Button>
                </div>
            </div>
        );
    }
}
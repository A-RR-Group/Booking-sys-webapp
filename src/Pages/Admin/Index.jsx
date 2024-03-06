import React, { useState, useEffect } from 'react';
import MailIcon from "../../Icons/d8e33892c4efea67faa5a1808f6accee.png"
import LockIcon from "../../Icons/lock.png"
import BusIcon from "../../Icons/bus.png"
import LeftIcon from "../../Icons/left-arrow.png"
import InputField from "../../components/inputField"
import Button from "../../components/button"
import "../../css/admin/index.css"
import DesktopOnly from "../DesktopOnly"

export default function Adminlogin(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
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
                <div className="GoBackLink"> <img src={LeftIcon} alt="" /> &nbsp; Lost your way? Go back to home</div>
            </div>
        );
    }
}
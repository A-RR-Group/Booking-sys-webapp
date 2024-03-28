import MailIcon from "../../assets/Icons/mail.png"
import LockIcon from "../../assets/Icons/lock.png"
import BusIcon from "../../assets/Icons/bus.png"
import UserIcon from "../../assets/Icons/user.png"
import InputField from "../../components/inputField"
import Button from "../../components/button"
import "../../assets/css/admin/LoginSignup.css"

export default function AdminRegistration(){

    return(
        <div className="all">
            <div className="LoginContainer">
                <img src={BusIcon} className="LogoOrange" alt="" />
                <div className="InputsDiv">
                    <InputField image={UserIcon} placeholder="User name" type="text"></InputField>
                    <InputField image={MailIcon} placeholder="Email address" type="email"></InputField>
                    <InputField image={LockIcon} placeholder="Password" type="password"></InputField>
                </div>
                <Button text="Register" backgroundColor="#FF4D00"></Button>
            </div>
        </div>
    );
}
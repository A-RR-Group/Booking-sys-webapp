import icons from "../../utils/icons"
import InputField from "../../components/forms/inputField"
import Button from "../../components/forms/button"
import "../../assets/css/admin/LoginSignup.css"

export default function AdminRegistration(){

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
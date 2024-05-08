import icons from "../../utils/icons"
import InputField from "../../components/forms/inputField"
import PopupTitle from "../../components/pages/PopupTitle"
import Button from "../../components/forms/button"
import "../../assets/css/express/Login.css"

export default function ExpressLogin(props) {
    const { login } = props;

    const handleLogin = (param) => {
        login(param)
    }
    
    return(
        <>
        <div className="popupAll" onClick={(e) => {closePopup(e)}}>
            <div className="popupContainer">
                {/*  Login container  */}
                <PopupTitle text="Express Login" color="#FF4D00" position="center"/>
                <div className="InputsDiv">
                    <InputField image={icons.MailIcon} placeholder="Email address" type="email"></InputField>
                    <InputField image={icons.LockIcon} placeholder="Password" type="password"></InputField>
                </div>
                <Button text="Login" backgroundColor="#FF4D00" onClick={() => handleLogin(true)}></Button>
            </div>
        </div>
        </>
    )
}
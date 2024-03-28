import LogoutIcon from "../assets/Icons/logout.png"
import "../assets/css/components/ExpressMore.css"

export default function ExpressMore(){
    return(
        <>
            <div className="ExpressMoreContainer">
                <p>Logout</p>
                <img src={LogoutIcon} alt="" />
            </div>
        </>
    )
    
}
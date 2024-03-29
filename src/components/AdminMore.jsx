import LogoutIcon from "../assets/Icons/logout.png"
import "../assets/css/components/AdminMore.css"

export default function AdminMore(){
    return(
        <>
            <div className="AdminMoreContainer">
                <p>Logout</p>
                <img src={LogoutIcon} alt="" />
            </div>
        </>
    )
    
}
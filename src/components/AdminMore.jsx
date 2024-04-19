import LogoutIcon from "../assets/Icons/logout.png"
import "../assets/css/components/AdminMore.css"
import { useRef } from "react"

export default function AdminMore(props){
    const AdminMoreContainer = useRef()
    document.addEventListener("click", (e) =>{
        if(e.target.className != "moreBtn"){
            if(!AdminMoreContainer.current.contains(e.target)){
                props.toggleMore('');
            }
        }
        
    })
    return(
        <>
            <div className="AdminMoreContainer" ref={AdminMoreContainer} onClick={props.onClick}>
                <div className="MoreLogoutDiv">
                    <p>Logout</p>
                    <img src={LogoutIcon} alt="" />
                </div>
            </div>
        </>
    )
    
}
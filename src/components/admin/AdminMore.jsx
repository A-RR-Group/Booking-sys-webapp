import icons from "../../utils/icons"
import "../../assets/css/components/admin/AdminMore.css"
import { useRef } from "react"

export default function AdminMore(props){
    const AdminMoreContainer = useRef()

    // Hiding the more div
    document.addEventListener("click", (e) =>{
        if(e.target.className != "moreBtn"){
            if(!AdminMoreContainer.current.contains(e.target)){
                props.toggleMore('');
            }
        }
        
    })
    return(
        <>
            {/* More Division container */}
            <div className="AdminMoreContainer" ref={AdminMoreContainer} onClick={props.onClick}>
                <div className="MoreLogoutDiv">
                    <p>Logout</p>
                    <img src={icons.LogoutIcon} alt="" />
                </div>
            </div>
        </>
    )
    
}
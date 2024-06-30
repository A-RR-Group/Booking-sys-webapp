import "../../assets/css/components/pages/UsernameTitle.css"
import React from "react"

export default function UsernameTitle(props){
    return(
        <>
        <h2 className="UsernameTitle">{props.username}</h2>
        </>
    )
}
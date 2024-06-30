import "../../assets/css/components/pages/PageTitle.css"
import React from "react"

export default function PageTitle(props){
    return(
        <>
            <h1 className="PageTitle">{props.title}</h1>
        </>
    )
}
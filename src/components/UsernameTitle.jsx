import "../assets/css/components/UsernameTitle.css"

export default function UsernameTitle(props){
    return(
        <>
        <h2 className="UsernameTitle">{props.username}</h2>
        </>
    )
}
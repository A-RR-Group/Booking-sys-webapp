import "../../assets/css/components/pages/UsernameTitle.css"

export default function UsernameTitle(props){
    return(
        <>
        <h2 className="UsernameTitle">{props.username}</h2>
        </>
    )
}
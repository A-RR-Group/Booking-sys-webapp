import "../../assets/css/components/pages/PageTitle.css"

export default function PageTitle(props){
    return(
        <>
            <h1 className="PageTitle">{props.title}</h1>
        </>
    )
}
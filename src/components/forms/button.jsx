import "../assets/css/components/button.css";

export default function Button(props) {
    return (
        <button className="button" style={{ backgroundColor: `${props.backgroundColor}` }} onClick={props.onClick}>
            {props.text}
        </button>
    );
}

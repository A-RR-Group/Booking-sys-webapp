import "../assets/css/components/StatisticCard.css"

export default function StatisticCard(props) {
    const cardStyle = {
        borderRadius: props.position === "alone" ? "20px" : "",
        borderRadius: props.position === "middle" ? "none" : "",
        borderBottomRightRadius: props.position === "end" ? "20px" : "",
        borderTopRightRadius: props.position === "end" ? "20px" : "",
        borderBottomLeftRadius: props.position === "front" ? "20px" : "",
        borderTopLeftRadius: props.position === "front" ? "20px" : ""
    };

    return (
        <div className="StatisticCard" style={cardStyle}>
            <h1>{props.numbers}</h1>
            <p>{props.category}</p>
        </div>
    );
}
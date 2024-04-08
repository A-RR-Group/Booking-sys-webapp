import "../assets/css/components/Table.css"

const TableHeader = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column}>{column}</th>
                ))}
            </tr>
        </thead>
    )
}

const TableContent = ({ entries, columns }) => {
    return (
        <tbody>
            {entries.map((entry) => (
                <tr key={entry.id}>
                    {columns.map((column) => (
                        <td key={column}>{entry[column]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

const Table = (props) => {
    const style = {
        display: props.state !== "active" ? "none" : "",
        flexDirection: props.state === "active" ? "column" : "",
        width: props.state === "active" ? "100%" : ""
    }
    return (
        <table style={style}>
            <TableHeader columns={props.columns} />
            <TableContent entries={props.entries} columns={props.columns} />
        </table>
    )
}

export default Table;

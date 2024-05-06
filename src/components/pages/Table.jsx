import "../../assets/css/components/pages/Table.css";
import icons from "../../utils/icons"

// Table headers components section
const ExpressTableHeader = ({ columns }) => {
    return (
        <thead>
            {columns.map((column) => (
                <th key={column}>{column}</th>
            ))}
            <th>Remove</th>
        </thead>
    );
};

const StationTableHeader = ({ columns }) => {
    return (
        <thead>
            {columns.map((column) => (
                <th key={column}>{column}</th>
            ))}
            <th>Edit</th>
            <th>Remove</th>
        </thead>
    );
};

const RidesHeader = ({columns}) => {
    return(
        <thead>
            {columns.map((column) => (
                <th key={column}>{column}</th>
            ))}
        </thead>
    )
}

const CanceledHeader = ({columns}) => {
    return(
        <thead>
            {columns.map((column) => (
                <th key={column}>{column}</th>
            ))}
        </thead>
    )
}

const BookingsHeader = ({columns}) => {
    return(
        <thead>
            {columns.map((column) => (
                <th key={column}>{column}</th>
            ))}
        </thead>
    )
}

const BusesTableHeader = ({ columns }) => {
    return (
        <thead>
            {columns.map((column) => (
                <th key={column}>{column}</th>
            ))}
            <th>Edit</th>
            <th>Remove</th>
        </thead>
    );
};

// Table content components section
const StationTableContent = ({ entries, columns, handlePopup }) => {
    return (
        <tbody>
            {entries.map((entry) => (
                <tr key={entry.id}>
                    <td>{entry.Bus_Station_name}</td>
                    <td>
                        <div className="editButton" key={entry.id} onClick={() => handlePopup('Edit Station', entry.id)}>
                            <img src={icons.WriteIcon} alt="Edit Icon" />&nbsp; Edit
                        </div>
                    </td>
                    <td>
                        <div className="deleteButton" key={entry.id} onClick={() => handlePopup('Remove Bus Station', entry.id)}>
                            <img src={icons.DeleteIcon} alt="Delete Icon" /> Remove
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

const ExpressTableContent = ({ entries, columns, handlePopup }) => {
    return (
        <tbody>
            {entries.map((entry) => (
                <tr key={entry.id}>
                    {columns.map((column) => (
                        <td key={column}>{entry[column]}</td>
                    ))}
                    <td>
                        <div className="deleteButton" key={entry.id} onClick={() => handlePopup('Remove Express', entry.id)}>
                            <img src={icons.DeleteIcon} alt="Delete Icon" /> Remove
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

const RidesTableContent = ({ entries, columns}) => {
    return (
        <tbody className="ridesTableContent">
            {entries.map((entry) => (
                <tr key={entry.id}>
                    {columns.map((column) => (
                        <td key={column}>{entry[column]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

const CanceledTableContent = ({ entries, columns }) => {
    return (
        <tbody className="canceledTableContent">
            {entries.map((entry) => (
                <tr key={entry.id}> {/* Assigning unique key */}
                    {columns.map((column) => (
                        <td key={column}>{entry[column]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

const BookingsTableContent = ({ entries, columns}) => {
    return (
        <tbody className="bookingsTableContent">
            {entries.map((entry) => (
                <tr key={entry.id}>
                    {columns.map((column) => (
                        <td key={column}>{entry[column]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

const BusesTableContent = ({ entries, columns, handlePopup }) => {
    return (
        <tbody>
            {entries.map((entry) => (
                <tr key={entry.id}>
                    {columns.map((column) => (
                        <td key={column}>{entry[column]}</td>
                    ))}
                    <td>
                        <div className="editButton" key={entry.id} onClick={() => handlePopup('Edit Bus', entry.id)}>
                            <img src={icons.WriteIcon} alt="Edit Icon" />&nbsp; Edit
                        </div>
                    </td>
                    <td>
                        <div className="deleteButton" key={entry.id} onClick={() => handlePopup('Remove Bus', entry.id)}>
                            <img src={icons.DeleteIcon} alt="Delete Icon" /> Remove
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

// Only exported table components section
const StationsTable = (props) => {
    const { columns, entries, setActivePopup } = props;

    const handlePopup = (popupName, key) => {
        setActivePopup(popupName);
    };

    const style = {
        display: props.state !== "active" ? "none" : "",
        flexDirection: props.state === "active" ? "column" : "",
        width: props.state === "active" ? "100%" : "",
    };

    return (
        <table style={style}>
            <StationTableHeader columns={columns} />
            <StationTableContent entries={entries} columns={columns} handlePopup={handlePopup} />
        </table>
    );
};

const ExpressTable = (props) => {
    const { columns, entries, setActivePopup } = props;

    const handlePopup = (popupName, key) => {
        setActivePopup(popupName);
    };

    const style = {
        display: props.state !== "active" ? "none" : "",
        flexDirection: props.state === "active" ? "column" : "",
        width: props.state === "active" ? "100%" : "",
    };

    return (
        <table style={style}>
            <ExpressTableHeader columns={columns} />
            <ExpressTableContent entries={entries} columns={columns} handlePopup={handlePopup} />
        </table>
    );
};

const RidesTable = (props) => {
    const { columns, entries } = props;

    const style = {
        display: props.state !== "active" ? "none" : "",
        flexDirection: props.state === "active" ? "column" : "",
        width: props.state === "active" ? "100%" : "",
    };

    return (
        <table style={style}>
            <RidesHeader columns={columns} />
            <RidesTableContent entries={entries} columns={columns}/>
        </table>
    );
};

const CanceledTable = (props) => {
    const { columns, entries } = props;

    const style = {
        display: props.state !== "active" ? "none" : "",
        flexDirection: props.state === "active" ? "column" : "",
        width: props.state === "active" ? "100%" : "",
    };

    return (
        <table style={style}>
            <CanceledHeader columns={columns} />
            <CanceledTableContent entries={entries} columns={columns}/>
        </table>
    );
};

const BookingsTable = (props) => {
    const { columns, entries } = props;

    const style = {
        display: props.state !== "active" ? "none" : "",
        flexDirection: props.state === "active" ? "column" : "",
        width: props.state === "active" ? "100%" : "",
    };

    return (
        <table style={style}>
            <BookingsHeader columns={columns} />
            <BookingsTableContent entries={entries} columns={columns}/>
        </table>
    );
};

const BusesTable = (props) => {
    const { columns, entries, setActivePopup } = props;
    const handlePopup = (popupName, key) => {
        setActivePopup(popupName);
    };

    const style = {
        display: props.state !== "active" ? "none" : "",
        flexDirection: props.state === "active" ? "column" : "",
        width: props.state === "active" ? "100%" : "",
    };

    return (
        <table style={style}>
            <BusesTableHeader columns={columns} />
            <BusesTableContent entries={entries} columns={columns} handlePopup={handlePopup}/>
        </table>
    );
};

export { ExpressTable, StationsTable, BookingsTable, RidesTable, CanceledTable, BusesTable };

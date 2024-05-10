import "../../assets/css/components/forms/ListFormInput.css";

const ListFormInput = ({ image, name, type, blackets, disabled, onClick }) => {
    return (
        <div className="listFormInputDiv" onClick={onClick}>
            <div className="listInputDescriptionDiv">
                <img src={image} alt="" />
                <p className="listInputName">{name}:</p>
            </div>
            {disabled ? (
                <p className="listInputText" onClick={onClick}> {`Click to edit (${blackets})`} </p>
            ) : (
                <input className="listInput" type={type} placeholder={`Click to edit (${blackets})`}/>
            )}
        </div>
    );
};

const ListFormDropdown = ({ image, name, entries, onChange }) => {
    return (
        <div className="listFormInputDiv">
            <div className="listInputDescriptionDiv">
                <img src={image} alt="" />
                <p className="listInputName">{name}:</p>
            </div>
            <select className="" id="" onChange={onChange}>
                {entries.map((entry, index) => (
                    <option key={index} value={entry.id}>
                        {Object.values(entry)[1]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export { ListFormInput, ListFormDropdown };

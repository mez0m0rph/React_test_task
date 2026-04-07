function Controls({
    inputValue,
    onInputChange,
    onAdd,
    onRemove,
    onEdit,
    onReset,
}) {
    return (
        <div className="controls">
            <input 
                type="text"
                placeholder="введите название узла"
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                className="node-input"
            />

            <div className="button-group">
                <button onClick={onAdd}>Add Child</button>
                <button onClick={onEdit}>Apply Name</button>
                <button onClick={onRemove}>Remove Selected</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    );
}

export default Controls;
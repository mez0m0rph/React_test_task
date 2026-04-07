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
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                placeholder="введите название узла"
                className="node-input"
            />

            <div className="button-group">
                <button onClick={onAdd}>Add</button>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onRemove}>Remove</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    );
}

export default Controls;
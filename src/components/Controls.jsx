function Controls({ onAdd, onRemove, onEdit, onReset}) {
    return (
        <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap"}}>
            <button onClick={onAdd}>Add Child</button>
            <button onClick={onRemove}>Remove Child</button>
            <button onClick={onEdit}>Edit selected</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default Controls;
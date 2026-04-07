function TreeNode( {node, selectedNodeId, onSelect}) {
    const isSelected = node.id === selectedNodeId;

    return (
        <div style={{marginTop: "15px"}}>
            <div
                onClick={() => onSelect(node.id)}
                style={{
                    cursor: "pointer",
                    padding: "5px 10px",
                    border: "1px solid green",
                    backgroundColor: isSelected ? "#dbeafe" : "white",
                    display: "inline-block",
                    borderRadius: "5px",
                }}
            >
                {node.name}
            </div>

            {node.children.length > 0 && (
                <div style={{ paddingLeft: "50px"}}>
                    {node.children.map((child) => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            selectedNodeId={selectedNodeId}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TreeNode;
function TreeNode( {node, selectedNodeId, onSelect}) {
    const isSelected = node.id === selectedNodeId;

    return (
        <div className="tree-node-wrapper">
            <div
                onClick={() => onSelect(node.id)}
                className={`tree-node ${isSelected ? "selected" : ""}`}
            >
                {node.name}
            </div>

            {node.children.length > 0 && (
                <div className="tree-children">
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
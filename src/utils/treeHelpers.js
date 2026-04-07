export function renameNode(node, targetId, newName) {
    if (node.id === targetId) {
        return {
            ...node,
            name: newName,
        };
    }

    return {
        ...node,
        children: node.children.map((child) => 
            renameNode(child, targetId, newName)
        ),
    };
}
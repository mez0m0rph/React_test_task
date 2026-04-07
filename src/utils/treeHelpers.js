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

export function addChildToNode(node, targetId, newChild) {
    if (node.id === targetId) {
        return {
            ...node,
            children: [...node.children, newChild],
        };
    }

    return {
        ...node,
        children: node.children.map((child) =>
            addChildToNode(child, targetId, newChild)
        ),
    };
}
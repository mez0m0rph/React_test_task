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

export function removeNode(node, targetId) {
    return {
        ...node,
        children: node.children
            .filter((child) => child.id !== targetId)
            .map((child) => removeNode(child, targetId)),
    };
}

export function findNodeById(node, targetId) {
    if (node.id === targetId) {
        return node;
    }

    for (const child of node.children) {
        const foundNode = findNodeById(child, targetId);

        if (foundNode) {
            return foundNode;
        }
    }

    return null;
}
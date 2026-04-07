import { useState } from "react";
import TreeNode from "./components/TreeNode";
import Controls from "./components/Controls";
import initialTree from "./data/initialTree";
import { addChildToNode, removeNode, renameNode } from "./utils/treeHelpers";

function App() {
    const [tree, setTree] = useState(initialTree);
    const [selectedNodeId, setSelectedNodeId] = useState(null);

    const handleAdd = () => {
        if (selectedNodeId === null) {
            alert("сначала выберите узел");
            return;
        }

        const childName = prompt("введите имя потомка");

        if (!childName || !childName.trim()) {
            return;
        }

        const newChild = {
            id: Date.now(),
            name: childName.trim(),
            children: [],
        };

        setTree(addChildToNode(tree, selectedNodeId, newChild));
    };

    const handleRemove = () => {
        if (selectedNodeId === null) {
            alert("сначала выберите узел");
            return;
        }
        if (selectedNodeId === tree.id) {
            alert("нельзя удалить кореневой узел");
            return;
        }

        setTree(removeNode(tree, selectedNodeId));
        setSelectedNodeId(null);
    };

    const handleEdit = () => {
        if (selectedNodeId === null) {
            alert("выберите узел");
            return;
        }

        const newName = prompt("введите новое имя");

        if (!newName || !newName.trim()) {
            return;
        }

        setTree(renameNode(tree, selectedNodeId, newName.trim()));
    };

    const handleReset = () => {
        setTree(initialTree);
        setSelectedNodeId(null);
    };

    return (
        <div style={{ padding: "25px", fontFamily: "Arial, sans-serif"}}>
            <h1>Дерево</h1>

            <p>Выбранный узел: {selectedNodeId ?? "узел не выбран"}</p>

            <Controls
                onAdd={handleAdd}
                onRemove={handleRemove}
                onEdit={handleEdit}
                onReset={handleReset}
            />

            <TreeNode
                node={tree}
                selectedNodeId={selectedNodeId}
                onSelect={setSelectedNodeId}
            />
        </div>
    );
}

export default App;
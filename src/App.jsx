import { useState } from "react";
import TreeNode from "./components/TreeNode";
import Controls from "./components/Controls";
import initialTree from "./data/initialTree";
import { renameNode } from "./utils/treeHelpers";

function App() {
    const [tree, setTree] = useState(initialTree);
    const [selectedNodeId, setSelectedNodeId] = useState(null);

    const handleAdd = () => {
        alert("заглушка пока что");
    };

    const handleRemove = () => {
        alert("пока что тоже заглушка"); 
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
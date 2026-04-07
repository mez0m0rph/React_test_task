import { useState } from "react";
import TreeNode from "./components/TreeNode";
import Controls from "./components/Controls";
import initialTree from "./data/initialTree";
import { addChildToNode, removeNode, renameNode } from "./utils/treeHelpers";

function App() {
    const [tree, setTree] = useState(initialTree);
    const [selectedNodeId, setSelectedNodeId] = useState(null);
    const [nodeName, setNodeName] = useState("");

    const handleAdd = () => {
        if (selectedNodeId === null) {
            alert("сначала выберите узел");
            return;
        }

        if (!nodeName.trim()) {
            alert("введите имя узла")
            return;
        }

        const newChild = {
            id: Date.now(),
            name: nodeName.trim(),
            children: [],
        };

        setTree(addChildToNode(tree, selectedNodeId, newChild));
        setNodeName("");
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
        setNodeName("");
    };

    const handleEdit = () => {
        if (selectedNodeId === null) {
            alert("выберите узел");
            return;
        }

        if (!nodeName.trim()) {
            alert("введите имя узла");
            return;
        }

        setTree(renameNode(tree, selectedNodeId, nodeName.trim()));
        setNodeName("");
    };

    const handleReset = () => {
        setTree(initialTree);
        setSelectedNodeId(null);
        setNodeName("");
    };

    return (
        <div className="app-container"> 
            <h1>Дерево</h1>
            
            <p className="selected-info">
                выбран узел: {selectedNodeId ?? "узел не выбран"}
            </p>

            <Controls
                onInputValue={nodeName}
                onInputChange={setNodeName}
                onAdd={handleAdd}
                onRemove={handleRemove}
                onEdit={handleEdit}
                onReset={handleReset}
            />

            <div className="tree-container">
                <TreeNode
                    node={tree}
                    selectedNodeId={selectedNodeId}
                    onSelect={setSelectedNodeId}
                />
            </div>
        </div>
    );
}

export default App;
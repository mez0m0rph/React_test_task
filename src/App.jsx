import { useState } from "react";
import TreeNode from "./components/TreeNode";
import Controls from "./components/Controls";
import initialTree from "./data/initialTree";
import { addChildToNode, removeNode, renameNode, findNodeById } from "./utils/treeHelpers";
import "./index.css";

function App() {
    const [tree, setTree] = useState(initialTree);
    const [selectedNodeId, setSelectedNodeId] = useState(null);
    const [nodeName, setNodeName] = useState("");

    const handleSelectNode = (nodeId) => {
        setSelectedNodeId(nodeId);

        const selectedNode = findNodeById(tree, nodeId);
        setNodeName(selectedNode ? selectedNode.name : "");
    };

    const handleAdd = () => {
        if (selectedNodeId === null) {
            alert("сначала выберите узел");
            return;
        }

        const selectedNode = findNodeById(tree, selectedNodeId);

        if (!selectedNode) {
            return;
        }

        const trimmedName = nodeName.trim();
        const childNodeName = trimmedName && trimmedName !== selectedNode.name
            ? trimmedName : `${selectedNode.name} child`;

        const newChild = {
            id: Date.now(),
            name: childNodeName,
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
        <div className="page"> 
            <div className="tree-layout">
                <div className="tree-header">Дерево</div>
            
                <div className="tree-body">
                    <TreeNode
                        node={tree}
                        selectedNodeId={selectedNodeId}
                        onSelect={handleSelectNode}
                    />
                </div>

                <div className="tree-footer">
                    <Controls
                        inputValue={nodeName}
                        onInputChange={setNodeName}
                        onAdd={handleAdd}
                        onRemove={handleRemove}
                        onEdit={handleEdit}
                        onReset={handleReset}
                    />
                </div>
            </div>
        </div>
    );

}

export default App;
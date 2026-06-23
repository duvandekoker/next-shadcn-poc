"use client";

import { useCallback, useEffect, useState } from "react";

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Edge,
  Handle,
  type Node,
  type NodeProps,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange,
  Position,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

function MultiHandleNode({ data }: NodeProps) {
  return (
    <>
      <Handle type="target" position={Position.Left} id="left-top" style={{ top: "33%" }} />
      <Handle type="target" position={Position.Left} id="left-bottom" style={{ top: "67%" }} />
      {String(data.label)}
      <Handle type="source" position={Position.Right} id="right-top" style={{ top: "33%" }} />
      <Handle type="source" position={Position.Right} id="right-bottom" style={{ top: "67%" }} />
    </>
  );
}

const nodeTypes = { default: MultiHandleNode };

const initialNodes: Node[] = [
  { id: "n1", position: { x: 0, y: 80 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 220, y: 80 }, data: { label: "Node 2" } },
];

const initialEdges: Edge[] = [
  { id: "n1-n2-top", source: "n1", sourceHandle: "right-top", target: "n2", targetHandle: "left-top" },
  { id: "n1-n2-bottom", source: "n1", sourceHandle: "right-bottom", target: "n2", targetHandle: "left-bottom" },
];

export function EffectChainFlow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setColorMode(root.classList.contains("dark") ? "dark" : "light");
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((prev) => applyNodeChanges(changes, prev)),
    [],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((prev) => applyEdgeChanges(changes, prev)),
    [],
  );

  const onConnect: OnConnect = useCallback((params) => setEdges((prev) => addEdge(params, prev)), []);

  return (
    <div className="overflow-hidden rounded-lg border" style={{ width: "100%", height: "320px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        colorMode={colorMode}
        fitView
        proOptions={{ hideAttribution: false }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}


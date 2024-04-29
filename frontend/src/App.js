import React from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from 'react-flow-renderer';
import 'reactflow/dist/style.css';
import './App.css';

// Custom node components
const InputNode = ({ data }) => <div className="custom-node input-node">{data.label}</div>;
const OutputNode = ({ data }) => <div className="custom-node output-node">{data.label}</div>;
const ConvNode = ({ data }) => <div className="custom-node conv-node">{data.label}</div>;
const PoolNode = ({ data }) => <div className="custom-node pool-node">{data.label}</div>;
const DenseNode = ({ data }) => <div className="custom-node dense-node">{data.label}</div>;

// Mapping node types to components
const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
  convNode: ConvNode,
  poolNode: PoolNode,
  denseNode: DenseNode,
};

const initialNodes = [
  { id: '1', type: 'inputNode', data: { label: 'Input Layer' }, position: { x: 250, y: 5 } },
  { id: '2', type: 'convNode', data: { label: 'Conv Layer' }, position: { x: 250, y: 125 } },
  { id: '3', type: 'poolNode', data: { label: 'Pooling Layer' }, position: { x: 250, y: 245 } },
  { id: '4', type: 'denseNode', data: { label: 'Dense Layer' }, position: { x: 250, y: 365 } },
  { id: '5', type: 'outputNode', data: { label: 'Output Layer' }, position: { x: 250, y: 485 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#000' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#000' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#000' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#000' } },
];

const NeuralNetworkFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#000' } }, eds));

  return (
    <ReactFlowProvider>
      <div style={{ height: 800 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="top-right"
        >
          <MiniMap nodeStrokeColor={(n) => {
            if (n.type === 'inputNode') return '#0041d0';
            if (n.type === 'outputNode') return '#ff0072';
            if (n.type === 'convNode') return '#42a5f5';
            if (n.type === 'poolNode') return '#ab47bc';
            if (n.type === 'denseNode') return '#00d084';
          }}
          nodeColor={(n) => {
            if (n.type.includes('Node')) return '#fff';
          }}
          />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default NeuralNetworkFlow;
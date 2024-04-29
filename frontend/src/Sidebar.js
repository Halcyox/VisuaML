function Sidebar() {
    const onDragStart = (event, nodeType) => {
      event.dataTransfer.setData('application/reactflow', nodeType);
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <aside>
        <div className="dndnode" onDragStart={(event) => onDragStart(event, 'Convolutional Layer')} draggable>
          Convolutional Layer
        </div>
        <div className="dndnode" onDragStart={(event) => onDragStart(event, 'Pooling Layer')} draggable>
          Pooling Layer
        </div>
        {/* Add more nodes as needed */}
      </aside>
    );
  }

  export default Sidebar;

  
import React, { useState } from 'react';
import './App.css';

function App() {
  const [components, setComponents] = useState([]);
  const [draggedComponent, setDraggedComponent] = useState(null);

  const handleDragStart = (event, component) => {
    setDraggedComponent(component);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (draggedComponent) {
      setComponents((prevComponents) => [...prevComponents, draggedComponent]);
    }
    setDraggedComponent(null);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <div
          className="draggable-component"
          draggable
          onDragStart={(e) => handleDragStart(e, 'Component 1')}
        >
          Component 1
        </div>
        <div
          className="draggable-component"
          draggable
          onDragStart={(e) => handleDragStart(e, 'Component 2')}
        >
          Component 2
        </div>
      </div>
      <div className="content-area" onDragOver={handleDragOver} onDrop={handleDrop}>
        {components.map((component, index) => (
          <div key={index} className="dropped-component">
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

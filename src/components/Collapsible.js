import React, { useState } from 'react';
import '../styles/Collapsible.css'; // Optional: Add your own styles

const CollapsibleBox = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-box">
      <div className="box-header" onClick={toggleOpen}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span> {/* Toggle sign */}
      </div >
      {isOpen && (
        <div className="box-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default CollapsibleBox;

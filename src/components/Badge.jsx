import React from 'react';
import '../Styles/Badge.css';

function Badge({ text }) {
  return (
    <div className="badge">
      <span className="text">{text}</span>
    </div>
  );
}

export default Badge;

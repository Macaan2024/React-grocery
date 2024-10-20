// Header.js
import React from 'react';

function Header({ onOpenModal }) {
  return (
    <nav>
      <h4>Grocery App</h4>
      <button onClick={onOpenModal}>Add Product</button>
    </nav>
  );
}

export default Header;

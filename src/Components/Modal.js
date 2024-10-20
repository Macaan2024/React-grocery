// Modal.js
import React, { useState } from 'react';

function Modal({ isOpen, onClose, onAddProduct }) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(), // Use a timestamp as a simple unique ID
      name: productName,
      price: parseFloat(productPrice),
      category: productCategory,
    };
    onAddProduct(newProduct);
    setProductName('');
    setProductPrice('');
    setProductCategory('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Product</h2>
        <label>
          Name:
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
          />
        </label>
        <label>
          Price:
          <input 
            type="number" 
            value={productPrice} 
            onChange={(e) => setProductPrice(e.target.value)} 
          />
        </label>
        <label>
          Category:
          <input 
            type="text" 
            value={productCategory} 
            onChange={(e) => setProductCategory(e.target.value)} 
          />
        </label>
        <button onClick={handleAddProduct}>Add Product</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;

// App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 10, category: 'Category 1' },
    { id: 2, name: 'Product B', price: 20, category: 'Category 2' },
  ]);
  const [nextId, setNextId] = useState(3);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const addProduct = (newProduct) => {
    const productWithId = {
      id: nextId,
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      category: newProduct.category,
    };
    setProducts((prevProducts) => [...prevProducts, productWithId]);
    setNextId((prevId) => prevId + 1);
    closeModal();
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
  };

  return (
    <>
      <Header onOpenModal={openModal} />
      <Main products={products} onDeleteProduct={deleteProduct} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} onAddProduct={addProduct} />
    </>
  );
}

export default App;
